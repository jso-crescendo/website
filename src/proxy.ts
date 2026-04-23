import type {NextRequest, NextResponse} from 'next/server';
import {concertQuickLinkMiddleware} from './app/konzerte/quicklink-redirect-middleware';

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest): NextResponse | undefined {
  return concertQuickLinkMiddleware(request);
}
