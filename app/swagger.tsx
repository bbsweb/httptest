'use client'

import {useEffect, useRef} from 'react'
import swagger from './swagger-ui-bundle'

import './swagger-ui.css'

export default function Swagger ({url, spec}: {url?: string, spec?: object}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    swagger({url, spec, domNode: ref.current})
  }, [url, spec])

  return <div ref={ref}/>
}
