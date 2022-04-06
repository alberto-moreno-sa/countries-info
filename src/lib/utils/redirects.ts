import { NextRequest } from 'next/server';

export default function redirects(req: NextRequest): Response {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/_sites')) {
    return new Response(null, { status: 404 });
  }
}
