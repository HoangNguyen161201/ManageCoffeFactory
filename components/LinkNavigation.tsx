import { usePathname, useRouter } from 'next/navigation'
import { useAppContext } from '../utils/context'

export default function LinkNavigation({
    text,
    link,
    icon,
}: {
    text: string
    link: string
    icon: any
}) {
    const path = usePathname()

    const router = useRouter()

    const { setContextState } = useAppContext()
    return (
        <div
            onClick={() => {
                if (path != link) {
                    router.push(link)
                    setContextState((state)=> ({
                        ...state,
                        isLoading: true,
                        namePage: text,
                        isOpenMenu: false
                    }))
                    return
                }
                setContextState((state)=> ({
                    ...state,
                    isOpenMenu: false
                }))
                
            }}
            className={`flex items-center mb-5 rounded-lg ${
                path !== link && 'border'
            } ${path == link && 'bg-color3'} h-12`}>
            <div
                className={`pl-3 pr-3 ${
                    path !== link ? 'text-gray-500' : 'text-white'
                }`}>
                {icon}
            </div>
            <p
                className={`${
                    path !== link ? 'text-gray-500' : 'text-white font-semibold'
                }`}>
                {text}
            </p>
        </div>
    )
}
