import 'server-only';
import {headers} from 'next/headers';

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_SUBMISSIONS_PER_WINDOW = 3;
const MAX_TRACKED_KEYS = 100;

const buckets = new Map<string, {count: number; resetAt: number}>();

/**
 * Best-effort client IP for Vercel. `x-forwarded-for` is set by the platform
 * and may contain a chain — the first entry is the original client.
 */
export const getClientIp = async (): Promise<string> => {
  const h = await headers();
  return (
    h.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    h.get('x-real-ip') ||
    'unknown'
  );
};

const sweep = () => {
  const now = Date.now();
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt < now) {
      buckets.delete(key);
    }
  }
};

/**
 * In-memory sliding window rate limiter, keyed by an arbitrary string
 * (e.g. `contact-form:<ip>`).
 *
 * NOTE: the counter lives in the memory of the current server instance. It
 * caps casual abuse and burst submissions; a determined attacker spreading
 * requests across serverless instances is better stopped with a shared store
 * (e.g. Upstash Redis) — see README notes in the PR.
 */
export const isRateLimited = (key: string): boolean => {
  if (buckets.size > MAX_TRACKED_KEYS) {
    sweep();
  }

  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, {count: 1, resetAt: now + WINDOW_MS});
    return false;
  }

  bucket.count += 1;
  return bucket.count > MAX_SUBMISSIONS_PER_WINDOW;
};
