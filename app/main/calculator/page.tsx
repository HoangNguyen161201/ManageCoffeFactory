'use client'

import { useEffect } from 'react'
import { useAppContext } from '../../../utils/context'
import { useRouter } from 'next/navigation'
import BtnCalculator from '../../../components/btnCalculator'

export default function calculatorPage() {
    const {
        contextState: { isDark },
        setContextState,
    } = useAppContext()
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

    return <div className={`${isDark ? 'dark' : ''} h-full`}>
      <div className='h-[30%] flex-col flex items-end p-6'>
        <div>
          1
        </div>
        <div className='flex-1 flex-col flex items-end justify-end'>
          <p className='font-semibold mb-2 text-6xl'>124,6+5</p>
          <p className='font-semibold text-3xl text-gray-300'>400</p>
        </div>
      </div>
      <div className='h-[70%] grid grid-cols-4 grid-flow-row gap-5 rounded-tl-[30px] rounded-tr-[30px] p-6 bg-color6'>
        <BtnCalculator text='AC' color='text-color3'/>
        <BtnCalculator text='C'  color='text-color3'/>
        <BtnCalculator text='%'  color='text-color3'/>
        <BtnCalculator text=':'  color='text-red-400'/>
        <BtnCalculator text='7'/>
        <BtnCalculator text='8'/>
        <BtnCalculator text='9'/>
        <BtnCalculator text='x' color='text-red-400'/>
        <BtnCalculator text='4'/>
        <BtnCalculator text='5'/>
        <BtnCalculator text='6'/>
        <BtnCalculator text='-' color='text-red-400'/>
        <BtnCalculator text='1'/>
        <BtnCalculator text='2'/>
        <BtnCalculator text='3'/>
        <BtnCalculator text='+' color='text-red-400'/>
        <BtnCalculator text='0'/>
        <BtnCalculator text='00'/>
        <BtnCalculator text=','/>
        <BtnCalculator text='=' color='text-red-400'/>
       

       
      </div>
    </div>
}
