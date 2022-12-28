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
    const { isDark, isLoading, setIsLoading } = useAppContext()
    const router = useRouter()

    useEffect(() => {
        const isLogin = localStorage.getItem('login')
        if (isLogin == 'true') {
            router.push('/main')
        } else {
            setIsLoading(false)
        }
    }, [])

    return (
        <div className={isDark ? 'dark' : ''}>
            {children}
            {isLoading && <Loading />}
        </div>
    )
}
