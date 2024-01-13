export const runtime = 'edge'

export const POST = async (req: Request) => {
  const formData = await req.formData()
  const value = formData.get('value')

  if (value) {
    if (value instanceof File) {
      const blob = await value.arrayBuffer()
      return new Response(Buffer.from(blob).toString('base64'))
    }
    return new Response(Buffer.from(value).toString('base64'))
  }

  return new Response('')
}
