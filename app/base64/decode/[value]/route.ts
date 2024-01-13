export const runtime = 'edge'

const handler = (_: Request, {params}: {params: {value: string}}) => new Response(Buffer.from(params.value, 'base64').toString())

export const GET = handler
export const POST = handler
