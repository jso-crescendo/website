'use server';

import {createSignupRequest} from '@/firebase/email-signup';
import {sanitize} from '@/utils/escape';
import {getClientIp, isRateLimited} from '@/utils/rate-limit';
import {validateToken} from '@/utils/turnstile';
import {FIELD_LIMITS, isValidEmail} from '@/utils/validation';

interface SignupResult {
  success: boolean;
}

const TURNSTILE_ACTION = 'newsletter-form';

export async function submitSignupRequest(
  _prevState: SignupResult,
  data: FormData,
): Promise<SignupResult> {
  const ip = await getClientIp();
  if (isRateLimited(`${TURNSTILE_ACTION}:${ip}`)) {
    return {success: false};
  }

  const token = data.get('cf-turnstile-response')?.toString();
  if (!token || !(await validateToken(token, TURNSTILE_ACTION, ip))) {
    return {success: false};
  }

  const name = sanitize(data.get('name')?.toString(), FIELD_LIMITS.short);
  const email = sanitize(data.get('email')?.toString(), FIELD_LIMITS.email);

  if (!name || !email || !isValidEmail(email)) {
    return {success: false};
  }

  await createSignupRequest({name, email});
  return {success: true};
}
