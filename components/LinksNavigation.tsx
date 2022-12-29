import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { useAppContext } from '../utils/context'

interface ILinksNavigation {
    text: string
    icon: any
    data?: Array<{
        text: string
        link: string
        icon: any
    }>
}

export default function LinksNavigation({
    text,
    icon,
    data = [],
}: ILinksNavigation) {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const { setContextState } = useAppContext()
    const path = usePathname()

    return (
        <div>
            <div
                onClick={() => {
                    setIsOpen(!isOpen)
                }}
                className={`flex items-center mb-5 rounded-lg border h-12`}>
                <div className={`pl-3 pr-3  text-gray-500`}>{icon}</div>
                <p className={`text-gray-500 flex-1`}>{text}</p>
                <div
                    className={`pl-3 transition transform ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                    } pr-3 text-gray-500`}>
                    <BsChevronDown />
                </div>
            </div>
            <div
                className={`${
                    !isOpen ? 'h-0' : 'h-auto'
                } mb-5 border-gray-300 pl-8 border-l overflow-hidden transition duration-300`}>
                {data.map((item, key) => (
                    <div
                        key={key}
                        onClick={() => {
                            if (path != item.link) {
                                router.push(item.link)
                                setContextState((state) => ({
                                    ...state,
                                    isLoading: true,
                                    isOpenMenu: false,
                                    namePage: item.text
                                }))
                                return
                            }
                            setContextState((state) => ({
                                ...state,
                                isOpenMenu: false,
                            }))
                        }}
                        className={`flex ${path !== item.link && 'border'} ${
                            path == item.link && 'bg-color3'
                        } items-center  mt-5 rounded-lg border h-12`}>
                        <div
                            className={`pl-3 pr-3 ${
                                path !== item.link
                                    ? 'text-gray-500'
                                    : 'text-white'
                            }`}>
                            {item.icon}
                        </div>
                        <p
                            className={`${
                                path !== item.link
                                    ? 'text-gray-500'
                                    : 'text-white font-semibold'
                            }`}>
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
