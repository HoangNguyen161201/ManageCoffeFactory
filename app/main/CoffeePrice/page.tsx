'use client'
import { useEffect } from 'react'
import { useAppContext } from '../../../utils/context'
import { useRouter } from 'next/navigation'

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
    return (
        <div>
            <iframe
                src="https://giacaphe.com/gia-ca-phe-truc-tuyen/"
                className="w-full h-[92.2vh]"
            />
        </div>
    )
}
