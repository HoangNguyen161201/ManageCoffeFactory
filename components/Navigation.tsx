import { useRouter } from 'next/navigation'
import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { useAppContext } from '../utils/context'
import Toast from '../utils/Toast'
import { RiPriceTag3Line } from 'react-icons/ri'
import LinkNavigation from './LinkNavigation'
import { CgMathPercent } from 'react-icons/cg'
import { AiOutlineHome } from 'react-icons/ai'
import { useQuery } from 'react-query'
import axios from 'axios'
import LinksNavigation from './LinksNavigation'
import {CiCoffeeBean} from 'react-icons/ci'
import { BsBoxSeam } from 'react-icons/bs'
import {MdOutlineDashboard} from 'react-icons/md'

export default function Navigation() {
    const { setContextState, contextState: { isOpenMenu} } = useAppContext()
    const router = useRouter()
    const { data: productsData } = useQuery<{
        data: {
            products: Array<{
                _id: string
                name: string
            }>
        }
    }>(
        'product',
        () => {
            return axios.get('/api/product')
        },
        {
            retry: 2,
            staleTime: 5,
        }
    )

    return (
        <div
            className={`fixed flex flex-col top-0 transition duration-300 w-full h-screen bg-white border left-0 ${
                isOpenMenu ? 'translate-x-0' : 'translate-x-[-100%]'
            } `}>
            <div className="h-[70px] pl-6 pr-6 flex justify-between items-center">
                <p className="font-bold text-2xl">Tính Năng</p>
                <button
                    onClick={() => setContextState(state => ({
                        ...state,
                        isOpenMenu: false
                    }))}
                    className="bg-gray-300 transition duration-300 active:bg-gray-400 p-3 rounded-md">
                    <AiOutlineLeft fontSize={16} color="#838589" />
                </button>
            </div>
            <div className="flex-1 overflow-auto p-6">
                <LinkNavigation
                    icon={<AiOutlineHome size={18} />}
                    link="/main"
                    text="Trang chủ"
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
                
                <LinksNavigation
                    icon={<BsBoxSeam size={18} />}
                    text="Sản phẩm"
                    data={productsData?.data.products && [ {
                        icon: <MdOutlineDashboard size={18}/>,
                        link: '/main/product',
                        text: 'Tổng quan'
                    }, ...productsData.data.products.map(item => ({
                        icon: <CiCoffeeBean size={18}/>,
                        link: `/main/product/${item._id}`,
                        text: item.name
                    }))]}

                />
            </div>
            <div className="p-6 w-full">
                <button
                    onClick={() => {
                        localStorage.removeItem('login')
                        setContextState(state => ({
                            ...state,
                            isLoading: true,
                            isOpenMenu: false
                        }))
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
