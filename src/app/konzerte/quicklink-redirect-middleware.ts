import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {ALL_CONCERTS} from '@/data/concerts';

export function concertQuickLinkMiddleware(
  request: NextRequest,
): NextResponse | void {
  const concert = getConcertByQuickLink(request.nextUrl.pathname);
  if (concert) {
    const quickLink = concert.quickLinks?.find((ql) =>
      request.nextUrl.pathname.startsWith(ql.url),
    );
    const redirectUrl = new URL(
      `/konzerte/${concert.id}?utm_source=${quickLink?.utmSource}&utm_campaign=${quickLink?.utmCampaign}`,
      request.url,
    );

    return NextResponse.redirect(redirectUrl, {status: 307});
  }
}

const getConcertByQuickLink = (quickLink: string) => {
  return ALL_CONCERTS.find((c) =>
    c.quickLinks?.some((ql) => quickLink.startsWith(ql.url)),
  );
};
