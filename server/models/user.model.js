import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({

    email : {
        type : String,
        required : true,
        unique : true
    },
    username : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true
    },
    urls : {
        type : Schema.Types.ObjectId,
        ref : "ShortUrl"
    },

    refreshToken : {
        type : String
    }

}, {
    timestamps : true
})


// Hash the password before saving

userSchema.pre("save", async function(next){
    // If password is not modified then move to next
    if(!this.isModified("password")) return next();
    const rounds = Number(process.env.SALT)

    this.password = await bcrypt.hash(this.password, rounds );
    next();

})


// Method to check password is correct or not

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
}



// method to generate the access token

userSchema.methods.generateAccessToken = function (){
    const payload = {
        _id : this._id,
        username : this.username,
        email : this.email,
    }

    const secret = process.env.ACCESS_TOKEN_SECRET;
    const expiryDate = process.env.ACCESS_TOKEN_EXPIRY;

    const token = jwt.sign(payload, secret, {expiresIn : expiryDate})

    return token;
}

userSchema.methods.generateRefreshToken = function(){
    const payload = {
        _id : this._id
    }

    const secret = process.env.REFRESH_TOKEN_SECRET;
    const expiryDate = process.env.REFRESH_TOKEN_EXPIRY
    const token = jwt.sign(payload, secret, {expiresIn : expiryDate})
    return token;
}




export const User = mongoose.model("User", userSchema)