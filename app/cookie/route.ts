import type {NextRequest} from 'next/server'

export const runtime = 'edge'

export const GET = (req: NextRequest) => Response.json({...req.cookies.get('httptest')})

export const POST = (req: NextRequest) => new Response(null, {
  status: 302,
  headers: {
    Location: '/cookie',
    'Set-Cookie': `httptest=${req.nextUrl.searchParams.get('value')};`
  }
})

export const DELETE = () => new Response(null, {
  headers: {
    'Set-Cookie': 'httptest=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'
  }
})
