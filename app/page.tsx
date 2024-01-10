import Swagger from './swagger'
import spec from './spec.json'

export const runtime = 'edge'

export default function Page () {
  return <Swagger spec={spec}/>
}
