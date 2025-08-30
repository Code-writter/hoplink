import mongoose, { Schema} from "mongoose";

const urlSchema = new Schema({

    nanoId : {
        type : String,
        required : true,
        unique : true
    },
    redirectURL:{
        type : String,
        required : true
    },
    information : [{
        timestamp : {
            type : Number
        }
    }],

    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    
}, {
    timestamps : true
})

export const ShortUrl = mongoose.model("ShortUrl", urlSchema)