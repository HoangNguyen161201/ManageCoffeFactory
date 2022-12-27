'use client'
import { useRef, useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import Toast from 'toastify-js';

export default function Login() {
    const [error, setError] = useState<string | undefined>()

    const passRef = useRef<any>()

    const router = useRouter()

    const handleLogin = useCallback(() => {
        const pass = passRef.current.value
        if (!pass) {
            setError('Mật khẩu không được phép để trống!')
            return
        }
        if (pass != '29031998') {
            setError('Mật khẩu không chính xác!')
            return
        }
        
        setError('')
        
        Toast({
            text: 'Đăng nhập thành công',
            duration: 3000,
            gravity: 'top',
            position: 'right',
            style: {
                background: '#36c148',
                borderRadius: '8px'
            }
        }).showToast()
        
        router.push('/')
    }, [])
    return (
        <div className={'flex flex-col w-full p-8 h-screen justify-center'}>
            <h1 className="mb-5 text-2xl font-bold text-color2">
                Welcome to login &#128075;
            </h1>
            <div className="flex flex-col mb-4">
                <label className="text-[14px] mb-2 text-gray-400 font-semibold">
                    Mật khẩu
                </label>
                <input
                    ref={passRef}
                    type="password"
                    className="h-12  p-4 border-2 rounded-lg outline-none text-[20px] focus:border-color3"
                />
                {error && <p className="mt-2 text-[14px] text-red-600">{error}</p>}
            </div>
            <button
                onClick={handleLogin}
                className="h-12 text-white rounded-lg text-[16px] transition duration-300 active:bg-color5 bg-color3">
                Sign in
            </button>
        </div>
    )
}
