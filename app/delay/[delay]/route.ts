import type {NextRequest} from 'next/server'
import {handleReq} from '../../util'

export const runtime = 'edge'

const handler = (req: NextRequest, {params}: {params: {delay: string}}) => {
  const delay = parseInt(params.delay, 10)
  let delayPromise

  if (delay > 0 && delay <= 10) {
    delayPromise = new Promise(resolve => {
      setTimeout(resolve, delay * 1000)
    })
  }

  return Promise.all([handleReq(req), delayPromise]).then(([data]) => Response.json(data))
}

export const GET = handler
export const POST = handler
export const PUT = handler
export const PATCH = handler
export const DELETE = handler
