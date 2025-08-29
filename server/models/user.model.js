import mongoose, { Schema } from "mongoose";

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
    }
    
}, {
    timestamps : true
})



export const User = mongoose.model("User", userSchema)