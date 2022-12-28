import { Model, model, models, Schema } from 'mongoose'

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

const UserModel = models.User as Model<IUser, {}, {}, {}, any> || model<IUser>('User', userSchema)

export default UserModel
