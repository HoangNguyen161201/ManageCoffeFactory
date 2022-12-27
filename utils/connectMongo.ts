import mongoose from 'mongoose'

const connectMongo = async () => {
    await mongoose.connect(process.env.MONGO_URI as string).catch(e => {
        console.log('Connect MongoDB false');
    })
}

export default connectMongo