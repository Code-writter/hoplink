import { ApiError } from "../utils/ApiErrors.js"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { User } from "../models/user.model.js"
import cookieParser from "cookie-parser"

dotenv.config()

export const verifyJWT = async (req, res, next) => {
    try {
        
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer", "")

        console.log(req.cookies?.accessToken)

        if(!token) throw new ApiError(401, "Unauthorized Access")

        const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        console.log(decodeToken)
        const user = await User.findById(decodeToken._id).select("-password", "-refreshToken")
        console.log(user)
        if(!user) throw new ApiError(401, "Invalid Access Token")

        //* setting user in the req obj
        req.user = user;
        // Pass middleware to next
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Token")
    }
}


