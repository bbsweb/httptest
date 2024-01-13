import files from './files.json'

export const runtime = 'edge'

const types = {
  text: 'text/plain; charset=utf-8',
  xml: 'application/xml',
  svg: 'image/svg+xml',
  png: 'image/png',
  jpg: 'image/jpeg',
  webp: 'image/webp'
}

export const GET = (_: Request, {params}: {params: {type: string}}) => {
  switch (params.type) {
  case 'text':
  case 'xml':
  case 'svg':
    return new Response(files[params.type], {
      headers: {
        'cache-control': 'public, max-age=86400',
        'content-type': types[params.type],
      }
    })
  case 'png':
  case 'jpg':
  case 'webp':{
    return new Response(Uint8Array.from(Buffer.from(files[params.type], 'base64')), {
      headers: {
        'cache-control': 'public, max-age=86400',
        'content-type': types[params.type],
      }
    })
  }
  default:
    return new Response(null)
  }
}
