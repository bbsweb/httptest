export const runtime = 'edge'

export const GET = () => new Response(crypto.randomUUID())
