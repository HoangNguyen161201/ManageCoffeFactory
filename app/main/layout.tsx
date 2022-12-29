'use client'
import BtnSetDarkMode from '../../components/btnSetDarkMode'
import { useAppContext } from '../../utils/context'
import Loading from '../../components/Loading'
import { BiMenuAltLeft } from 'react-icons/bi'
import { AiOutlineLeft } from 'react-icons/ai'
import Navigation from '../../components/Navigation'
import { trusted } from 'mongoose'
export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const {
        contextState: { isDark, isLoading, namePage },
        setContextState,
    } = useAppContext()
    return (
        <div className={isDark ? 'dark' : ''}>
            <div className="dark:bg-color1 pl-6 pr-6 h-[70px] flex justify-between items-center">
                <button
                    onClick={() =>
                        setContextState((state) => ({
                            ...state,
                            isOpenMenu: true,
                        }))
                    }
                    className="bg-color3 transition duration-300 active:bg-color5 p-3 rounded-md">
                    <BiMenuAltLeft
                        style={{
                            transform: 'scale(1.5)',
                        }}
                        color="white"
                    />
                </button>
                <p
                    className={
                        'text-lg dark:text-white pl-6 pr-6 truncate font-semibold whitespace-nowrap break-words'
                    }>
                    {namePage}
                </p>
                <BtnSetDarkMode />
            </div>
            <div className="dark:bg-color1 h-[92.4vh]">{children}</div>
            <Navigation />
            {isLoading && <Loading />}
        </div>
    )
}
