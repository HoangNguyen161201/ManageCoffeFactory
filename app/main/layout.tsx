'use client'
import BtnSetDarkMode from '../../components/btnSetDarkMode'
import {useAppContext} from '../../utils/context'

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const {isDark} = useAppContext()
    return (
        <div className={isDark ? 'dark': ''}>
            <div className="dark:bg-color1 pl-6 pr-6 h-[70px] flex justify-between items-center">
                <p>ff</p>
                <BtnSetDarkMode/>
            </div>
            <div className='dark:bg-color1 h-[92.4vh]'>
                {children}
            </div>
        </div>
    )
}
