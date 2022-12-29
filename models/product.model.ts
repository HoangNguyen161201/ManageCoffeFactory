import { Model, model, models, Schema } from 'mongoose'
import mongooseDelete from 'mongoose-delete'

export interface IProduct {
    _id: string,
    name: string,
    deleted: boolean,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
}

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        unique: true,
        require: true
    }
}, {timestamps: true})

//Add plugin
productSchema.plugin(mongooseDelete, {deletedAt: true});

const ProductModel = models.Product as Model<IProduct, {}, {}, {}, any> || model<IProduct>('Product', productSchema)

export default ProductModel
