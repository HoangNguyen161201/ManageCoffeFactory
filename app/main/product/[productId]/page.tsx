'use client'
import { useAppContext } from '../../../../utils/context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

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
