import { NextRequest } from 'next/server';
import redirects from 'lib/utils/redirects';

export default function middleware(req: NextRequest): Response {
  return redirects(req);
}
