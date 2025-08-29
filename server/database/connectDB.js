import mongoose from 'mongoose'
import chalk from 'chalk'
import { ApiError } from '../utils/ApiErrors.js'
import dotenv from 'dotenv'



export default async function connectDB(){
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}${process.env.APPLICATION_NAME}`)

        // connection established
        console.log(chalk.greenBright(`\nDatabase Connected : ${connectionInstance.connection.host}`))
    } catch (error) {
        throw new ApiError(500, chalk.redBright("Database connection Error"))
    }
}