// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import bcrypt from 'bcrypt'
import type { NextApiRequest, NextApiResponse } from 'next'
import UserModel, { IUser } from '../../../models/user.model'
import handleCatchError from '../../../utils/catchAsyncError'
import { DataResponse } from '../../../utils/commonTypes'
import connectMongo from '../../../utils/connectMongo'

const addUser = handleCatchError(
    async (req: NextApiRequest, res: NextApiResponse<DataResponse>) => {
        const { password, number } = req.body as IUser
        //connect db
        await connectMongo()

        //Check valid input
        if (!password || password == '' || !number || number == '') {
            res.status(400).json({
                statusCode: 400,
                success: false,
                message: 'Vui lòng điền đẩy đủ thông tin để tạo tài khoản.',
            })
        }

        //hash password
        const hashPassword = await bcrypt.hash(password, 10)

        console.log(hashPassword)

        //create user
        await UserModel.create({
            ...req.body,
            password: hashPassword,
        })

        return res.status(200).json({
            statusCode: 200,
            success: true,
            message: 'Tạo tài khoản người dùng thành công.',
        })
    }
)

export default addUser
