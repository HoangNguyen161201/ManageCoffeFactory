"use client"

import {useSearchParams} from 'next/navigation'
import { useEffect } from 'react'

export default function Detail() {
  const parameter = useSearchParams()
  console.log(parameter.get('page'))
  return (
    <div>this is detail</div>
  )
}
