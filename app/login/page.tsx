'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validateLogin } from '../../utils/validate'
import Toast from '../../utils/Toast'
import Input from '../../components/Input'
import { useMutation } from 'react-query'
import axios from 'axios'
import { useEffect } from 'react'
import { useAppContext } from '../../utils/context'

interface Login {
    password?: string
    number?: string
}

export default function Login() {
    const {setIsLoading} = useAppContext()
    const { mutate, isError, isSuccess, isLoading } = useMutation(
        (data: Login) => {
            return axios.post('/api/auth/login', data)
        }
    )

    useEffect(() => {
        if (isError) {
            Toast({
                text: 'Số điện thoại hoặc mật khẩu không chính xác!',
                type: 'error',
            }).showToast()
            setIsLoading(false)
        }
        if (isSuccess) {
            Toast({
                text: 'Đăng nhập thành công',
                type: 'success',
            }).showToast()
            localStorage.setItem('login', 'true')
            router.push('/main')
        }
    }, [isError, isSuccess])

    const router = useRouter()

    const form = useForm<Login>({
        resolver: yupResolver(validateLogin),
        defaultValues: {
            number: '',
            password: '',
        },
    })

    const { handleSubmit } = form

    const onSubmit = async (values: Login) => {
        setIsLoading(true)
        mutate(values)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={'flex flex-col w-full p-8 h-screen justify-center'}>
            <h1 className="mb-5 text-2xl font-bold text-color2">
                Welcome to login &#128075;
            </h1>
            <div className={'mb-2'}>
                <Input
                    form={form}
                    placeholder="Nhập số điện thoại"
                    name="number"
                    label="Số điện thoại"
                />
                <Input
                    form={form}
                    placeholder="Nhập mật khẩu"
                    name="password"
                    type="password"
                    label="Mật khẩu"
                />
            </div>
            <button
                type="submit"
                className="h-12 text-white rounded-lg text-[16px] transition duration-300 active:bg-color5 bg-color3">
                Đăng nhập
            </button>
        </form>
    )
}
