'use client'

import { useRouter } from 'next/navigation'
import Toast from 'toastify-js'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validateLogin } from '../../utils/validate'
import Input from '../../components/Input'

interface Login {
    password?: string
    number?: string
}

export default function Login() {
    const router = useRouter()

    const form = useForm<Login>({
        resolver: yupResolver(validateLogin),
        defaultValues: {
            number: '',
            password: '',
        },
    })

    const { handleSubmit, setError } = form

    const onSubmit = (values: Login) => {
        const { password: pass } = values
        if (pass != '29031998') {
            setError(
                'password',
                { type: 'focus', message: 'Mật khẩu không chính xác!' },
                { shouldFocus: true }
            )
            return
        }

        Toast({
            text: 'Đăng nhập thành công',
            duration: 3000,
            gravity: 'top',
            position: 'right',
            style: {
                background: '#36c148',
                borderRadius: '8px',
            },
        }).showToast()
        router.push('/')
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
