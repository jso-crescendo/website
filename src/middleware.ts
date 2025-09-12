import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {concertQuickLinkMiddleware} from './app/konzerte/quicklink-redirect-middleware';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest): NextResponse | void {
  return concertQuickLinkMiddleware(request);
}
