import type {NextRequest} from 'next/server'

export const handleReq = async (req: NextRequest) => {
  const args: Record<string, string> = {}
  const headers: Record<string, string> = {}
  const file: Record<string, number> = {}
  const form: Record<string, string> = {}
  let json = {}

  for (const [k, v] of req.nextUrl.searchParams.entries()) {
    args[k] = v
  }

  for (const [k, v] of req.headers.entries()) {
    headers[k] = v
  }

  try {
    const formData = await req.formData()
    for (const [k, v] of formData.entries()) {
      if (v instanceof Blob) {
        file[k] = v.size
      } else {
        form[k] = v
      }
    }
  } catch (e) { /**/ }

  try {
    json = await req.json()
  } catch (e) { /**/ }

  return {
    args,
    headers,
    file,
    form,
    json,
    origin: req.ip,
    url: req.url
  }
}
