import { useRouter } from 'next/navigation'
import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { useAppContext } from '../utils/context'
import Toast from '../utils/Toast'
import { RiPriceTag3Line } from 'react-icons/ri'
import LinkNavigation from './LinkNavigation'
import { CgMathPercent } from 'react-icons/cg'
import { AiOutlineHome } from 'react-icons/ai'

export default function Navigation() {
    const { isOpenMenu, setIsOpenMenu, setIsLoading } = useAppContext()
    const router = useRouter()
    return (
        <div
            className={`fixed flex flex-col top-0 transition duration-300 w-full h-screen bg-white border left-0 ${
                isOpenMenu ? 'translate-x-0' : 'translate-x-[-100%]'
            } `}>
            <div className="h-[70px] pl-6 pr-6 flex justify-between items-center">
                <p className="font-bold text-2xl">Tính Năng</p>
                <button
                    onClick={() => setIsOpenMenu(false)}
                    className="bg-gray-300 transition duration-300 active:bg-gray-400 p-3 rounded-md">
                    <AiOutlineLeft fontSize={16} color="#838589" />
                </button>
            </div>
            <div className="flex-1 overflow-auto p-6">
                <LinkNavigation
                    icon={<AiOutlineHome size={18} />}
                    link="/main"
                    text="Tổng quan"
                />
                <LinkNavigation
                    icon={<RiPriceTag3Line size={18} />}
                    link="/main/CoffeePrice"
                    text="Giá cà phê trực tuyến"
                />
                <LinkNavigation
                    icon={<CgMathPercent size={18} />}
                    link="/main/calculator"
                    text="Máy tính"
                />
            </div>
            <div className="p-6 w-full">
                <button
                    onClick={() => {
                        localStorage.removeItem('login')
                        setIsLoading(true)
                        setIsOpenMenu(false)
                        Toast({
                            text: 'Đăng xuất thành công',
                            type: 'success',
                        }).showToast()
                        router.push('/login')
                    }}
                    className="h-12 w-full text-white rounded-lg text-[16px] transition duration-300 active:bg-red-600 bg-red-500">
                    Đăng xuất
                </button>
            </div>
        </div>
    )
}
