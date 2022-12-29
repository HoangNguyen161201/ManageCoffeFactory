import { Model, model, models, Schema } from 'mongoose'
import mongooseDelete from 'mongoose-delete'

export interface IUser {
    password: string
    number: string
    role: string
}

const userSchema = new Schema<IUser>({
    password: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        unique: true,
        require: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
}, {timestamps: true})

//Add plugin
userSchema.plugin(mongooseDelete, {deletedAt: true});

const UserModel = models.User as Model<IUser, {}, {}, {}, any> || model<IUser>('User', userSchema)

export default UserModel
