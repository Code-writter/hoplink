import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiErrors.js"


const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        // Save refreshToken in the database

        user.refreshToken = refreshToken;

        await user.save({validateBeforeSave : false})

        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(500, `Something went wrong while generating the Access Token and refresh Token : ${error.message}`)
    }
}


const getUserDetails = (req, res) => {
    return res.json({
        msg : "get User detials"
    })
}


const handleRegisterUser = async (req, res) => {
    const { email, username, password } = req.body;

    // if(!email || !username || !password) throw new ApiError(400, "Email, Username and Password is required ");
    
    if(
        [email, username, password].some((field) => field.trim === "")
    ){  
        // 400 for bad request
        throw new ApiError(400, "All fields are required")
    }

    // Check for the existing User

    const existingUser = await User.findOne({
        email
    })

    if(existingUser) throw new ApiError(409, "User with same email already exists")

    const user = await User.create({
        email,
        password,
        username
    })


    // remove some fields before sending user
    // TODO : Add refresh toke field as well
    const created_user = await User.findById(user._id).select("-password")

    if(!created_user) throw new ApiError(500, "User Creation Failed")

    return res.status(201).json({
        created_user
    })
}



export {
    getUserDetails,
    handleRegisterUser
}