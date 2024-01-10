export const runtime = 'edge'

export const GET = (_: Request, {params}: {params: {n: string}}) => {
  const n = parseInt(params.n, 10)

  if (n >= 0 && n <= 10000) return new Response(new ArrayBuffer(n), {
    headers: {
      'content-type': 'application/octet-stream'
    }
  })

  return new Response(null, {status: 400})
}
