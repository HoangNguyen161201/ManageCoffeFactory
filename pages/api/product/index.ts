// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ProductModel from '../../../models/product.model'
import handleCatchError from '../../../utils/catchAsyncError'
import { DataResponse } from '../../../utils/commonTypes'
import connectMongo from '../../../utils/connectMongo'

const getAllProduct = handleCatchError(
    async (req: NextApiRequest, res: NextApiResponse<DataResponse>) => {
        if (req.method === 'GET') {
            //connect db
            await connectMongo()

            //get all products
            const products = await ProductModel.find({})

            return res.status(200).json({
                statusCode: 200,
                success: true,
                message: 'Lấy tất cả sản phẩm thành công.',
                products,
            })
        } else {
            return res.status(404).json({
                statusCode: 404,
                success: false,
                message: 'Phương thức không hợp lệ.',
            })
        }
    }
)

export default getAllProduct
