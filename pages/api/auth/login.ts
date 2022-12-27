// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../../utils/connectMongo'
import UserModel, { IUser } from '../../../models/userModel'
import bcrypt from 'bcrypt'

type Data = {
    status: number,
    success: boolean,
    message: string
}

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {password, number} = req.body as IUser
    //connect db
    await connectMongo()

    //Check valid input 
    if(!password || password == "" || !number || number == ""){
        res.status(400).json({
            status: 400,
            success: false,
            message: "Vui lòng điền đẩy đủ thông tin để đăng nhập."
        })
    }

    //Check exist user
    const existUser = await UserModel.findOne({
        number: number
    })

    if(!existUser){
        return res.status(400).json({
            status: 400,
            success:false,
            message: "Số điện thoại hoặc mật khẩu không chính xác."
        })
    }

    //Check hash password
    const resultCheckHash = await bcrypt.compare(password, existUser.password);

    if(!resultCheckHash){
        return res.status(400).json({
            status: 400,
            success:false,
            message: "Số điện thoại hoặc mật khẩu không chính xác."
        })
    }

    res.status(200).json({
        status: 200,
        success: true,
        message: "Đăng nhập thành công."
    })
}
