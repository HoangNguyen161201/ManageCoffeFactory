import * as yup from 'yup'

export const validateLogin = yup.object({
    number: yup.string().required('Số điện thoại không được phép để trống!'),
    password: yup.string().required('Mật khẩu không được phép để trống!')
})