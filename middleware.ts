import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  // Create authenticated Supabase Client.
  // Check if we have a session

  if (req.nextUrl.pathname.startsWith('/api')) {
    return res;
  }

  if (req.nextUrl.pathname.startsWith('/assets')) {
    return res;
  }

  // Auth condition not met, redirect to home page.
  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = '/javascript/dashboard/filter/recent';
  redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/hub/insights/:path*', '/user/:path'],
};
