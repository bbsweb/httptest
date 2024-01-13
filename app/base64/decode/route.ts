export const runtime = 'edge'

export const POST = async (req: Request) => {
  const formData = await req.formData()
  const value = formData.get('value')

  if (value && typeof value === 'string') {
    return new Response(Buffer.from(value, 'base64').toString())
  }

  return new Response('')
}
