// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ProductModel from '../../../../models/product.model'
import handleCatchError from '../../../../utils/catchAsyncError'
import { DataResponse } from '../../../../utils/commonTypes'
import connectMongo from '../../../../utils/connectMongo'
import {
    GoogleSheetInstance,
    rangeGoogleSheet,
} from '../../../../utils/googleSheet'

const deleteProduct = handleCatchError(
    async (req: NextApiRequest, res: NextApiResponse<DataResponse>) => {
        if (req.method === 'DELETE') {
            const { productId } = req.query
            //connect db
            await connectMongo()

            //Check existing product
            const existProduct = await ProductModel.findOne({
                _id: productId,
            })

            if (!existProduct) {
                return res.status(400).json({
                    statusCode: 400,
                    success: false,
                    message: 'Sản phẩm không tồn tại trong hệ thống.',
                })
            }

            //soft delete product
            existProduct.delete({
                _id: productId,
            })

            //update status soft delete to google sheet
            // Initialize the sheet
            const doc = await GoogleSheetInstance()
            const sheet = doc.sheetsByTitle[rangeGoogleSheet.product]
            const rows = await sheet.getRows() // can pass in { limit, offset }

            for (let index = 0; index < rows.length; index++) {
                const row = rows[index]
                if (row['Id'] == productId) {
                    row['Trạng thái xóa'] = 'TRUE'
                    await row.save()
                    break
                }
            }

            return res.status(200).json({
                statusCode: 200,
                success: true,
                message: 'Xóa sản phẩm thành công.',
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

export default deleteProduct
