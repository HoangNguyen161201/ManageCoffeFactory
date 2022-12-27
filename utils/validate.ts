import * as yup from 'yup'

export const validateLogin = yup.object({
    password: yup.string().required('Mật khẩu không được phép để trống!')
})