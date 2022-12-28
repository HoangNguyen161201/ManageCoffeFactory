import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { useAppContext } from '../utils/context'


export default function Navigation() {
    const {isOpenMenu, setIsOpenMenu} = useAppContext()
    return (
        <div className={`fixed top-0 transition duration-300 w-full h-screen bg-white border left-0 ${isOpenMenu ? 'translate-x-0': 'translate-x-[-100%]'} `}>
            <div className="h-[70px] pl-6 pr-6 flex justify-between items-center">
                <p className="font-bold text-2xl">Tính Năng</p>
                <button onClick={()=> setIsOpenMenu(false)} className="bg-gray-300 transition duration-300 active:bg-gray-400 p-3 rounded-md">
                    <AiOutlineLeft fontSize={16} color="#838589" />
                </button>
            </div>
        </div>
    )
}
