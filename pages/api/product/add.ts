// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ProductModel, { IProduct } from '../../../models/product.model'
import handleCatchError from '../../../utils/catchAsyncError'
import { DataResponse } from '../../../utils/commonTypes'
import connectMongo from '../../../utils/connectMongo'
import {
    GoogleSheetInstance,
    rangeGoogleSheet,
} from '../../../utils/googleSheet'
import { GoogleSpreadsheet } from 'google-spreadsheet'

const addProduct = handleCatchError(
    async (req: NextApiRequest, res: NextApiResponse<DataResponse>) => {
        if (req.method === 'POST') {
            const { name } = req.body as IProduct
            //connect db
            await connectMongo()

            //Check valid input
            if (!name) {
                return res.status(200).json({
                    statusCode: 200,
                    success: true,
                    message: 'Vui lòng nhập đầy đủ thông tin để tạo sản phẩm.',
                })
            }

            //create product
            const product = await ProductModel.create({
                name,
            })

            // Initialize the sheet
            const doc = await GoogleSheetInstance() 

            const sheet = doc.sheetsByTitle[rangeGoogleSheet.product]

            //add new data product to google sheet
            await sheet.addRow({
                "Id": product.id,
                "Tên sản phẩm": product.name,
                "Trạng thái xóa": product.deleted ? "TRUE" : "FALSE",
                "Ngày tạo": product.createdAt.toLocaleString(),
                "Ngày cập nhật": product.updatedAt.toLocaleString(),
                "Ngày xóa": product.deletedAt ? product.deletedAt.toLocaleString() : "",
            })

            return res.status(200).json({
                statusCode: 200,
                success: true,
                message: 'Tạo sản phẩm mới thành công.',
                // product,
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

export default addProduct
