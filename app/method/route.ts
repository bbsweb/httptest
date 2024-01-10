import type {NextRequest} from 'next/server'
import {handleReq} from '../util'

export const runtime = 'edge'

const handler = (req: NextRequest) => handleReq(req).then(data => Response.json(data))

export const GET = handler
export const POST = handler
export const PUT = handler
export const PATCH = handler
export const DELETE = handler
