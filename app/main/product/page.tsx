'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAppContext } from '../../../utils/context'
export default function page() {
    const { setContextState } = useAppContext()
    const router = useRouter()
    useEffect(() => {
        const isLogin = localStorage.getItem('login')
        if (isLogin)
            return setContextState((state) => ({
                ...state,
                isLoading: false,
            }))
        setContextState((state) => ({
            ...state,
            isLoading: true,
        }))
        router.push('/login')
    }, [])
    return <div>page</div>
}
