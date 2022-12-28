'use client'

import {useEffect} from 'react'
import { useAppContext } from "../../../utils/context";
import {useRouter} from 'next/navigation'

export default function calculatorPage() {
  const {setIsLoading} = useAppContext()
  const router = useRouter()
  useEffect(()=> {
    const isLogin = localStorage.getItem('login')
    if(isLogin) return setIsLoading(false)
    setIsLoading(true)
    router.push('/login')
  }, [])

  const {isDark} = useAppContext()
  return (
    <div className={isDark ? 'dark': ''}>page</div>
  )
}
