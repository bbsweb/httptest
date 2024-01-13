export const runtime = 'edge'

export const GET = (req: Request, {params}: {params: {user: string, passwd: string}}) => {
  const authHeader = req.headers.get('authorization')

  if (authHeader) {
    const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString()
    if (`${params.user}:${params.passwd}` === auth) return Response.json({user: params.user})
  }

  return new Response(null, {
    status: 401,
    headers: {'WWW-Authenticate': 'Basic'}
  })
}
