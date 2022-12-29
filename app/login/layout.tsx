'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Loading from '../../components/Loading'
import { useAppContext } from '../../utils/context'

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const {
        contextState: { isDark, isLoading },
        setContextState,
    } = useAppContext()
    const router = useRouter()

    useEffect(() => {
        const isLogin = localStorage.getItem('login')
        if (isLogin == 'true') {
            router.push('/main')
        } else {
            setContextState((state) => ({
                ...state,
                isLoading: false,
            }))
        }
    }, [])

    return (
        <div className={isDark ? 'dark' : ''}>
            {children}
            {isLoading && <Loading />}
        </div>
    )
}
