export const runtime = 'edge'

export const GET = () => Response.json({uuid: crypto.randomUUID()})
