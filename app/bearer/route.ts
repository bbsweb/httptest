export const runtime = 'edge'

export const GET = (req: Request) => {
  const auth = req.headers.get('authorization')

  if (auth && auth.startsWith('Bearer ')) {
    return Response.json({token: auth.slice(7)})
  }

  return new Response(null, {status: 401})
}
