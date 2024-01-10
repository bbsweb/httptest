export const runtime = 'edge'

const handler = (_: Request, {params}: {params: {code: string}}) => {
  const status = parseInt(params.code, 10)

  if (status >= 200 && status <= 599) return new Response(null, {status})

  return new Response(null, {status: 400})
}

export const GET = handler
export const POST = handler
export const PUT = handler
export const PATCH = handler
export const DELETE = handler
