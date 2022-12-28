import { Model, model, models, Schema } from 'mongoose'
import mongooseDelete from 'mongoose-delete'

export interface IProduct {
    name: {
        type: string
    }
}

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        unique: true,
        require: true
    }
}, {timestamps: true})

//Add plugin
productSchema.plugin(mongooseDelete, {overrideMethods: 'all',deletedAt: true});

const ProductModel = models.Product as Model<IProduct, {}, {}, {}, any> || model<IProduct>('Product', productSchema)

export default ProductModel
