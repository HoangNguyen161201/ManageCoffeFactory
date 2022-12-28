// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ProductModel, { IProduct } from '../../../models/product.model'
import handleCatchError from '../../../utils/catchAsyncError'
import { DataResponse } from '../../../utils/commonTypes'
import connectMongo from '../../../utils/connectMongo'
import {
    authGoogle,
    getGoogleSheet,
    rangeGoogleSheet,
} from '../../../utils/googleSheet'

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

            //handle google sheet
            //instance of google sheet api
            const googleSheets = await getGoogleSheet()
            const spreadsheetId = process.env.SPREAD_SHEET_ID

            //write rows to google sheet
            await googleSheets.spreadsheets.values.append({
                auth: authGoogle,
                spreadsheetId,
                range: `${rangeGoogleSheet.product}!A2:B2`,
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [[product.id, product.name]],
                },
            })

            return res.status(200).json({
                statusCode: 200,
                success: true,
                message: 'Tạo sản phẩm mới thành công.',
                product,
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
