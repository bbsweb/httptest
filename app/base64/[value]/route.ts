export const runtime = 'edge'

export const GET = (_: Request, {params}: {params: {value: string}}) => new Response(Buffer.from(params.value, 'base64').toString())
