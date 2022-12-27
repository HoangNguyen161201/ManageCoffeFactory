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

export default async function addUser(
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
            message: "Vui lòng điền đẩy đủ thông tin để tạo tài khoản."
        })
    }

    //hash password
    const hashPassword = await bcrypt.hash(password, 10);

    console.log(hashPassword);
    

    //create user
    await UserModel.create({
        ...req.body,
        password: hashPassword
    })

    return res.status(200).json({
        status: 200,
        success: true,
        message: "Tạo tài khoản người dùng thành công."
    })
}
