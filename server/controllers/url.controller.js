import { ShortUrl } from "../models/url.model.js";
import {nanoid} from 'nanoid'
import {ApiError} from '../utils/ApiErrors.js'


const handleGetAllUrls = (req, res) => {
    const data = req.body.data
    return res.json({
        msg : `Data : ${data}`
    })
}

const handleGenerateShortUrl = async (req, res) => {
    const { redirectURL } = req.body;
    const nanoId = nanoid(8)

    if( !redirectURL || !nanoId ) throw new ApiError(500, "Redirect Url and Nano Id is required ")

    const newRedirectUrl = await ShortUrl.create({
        nanoId : nanoId,
        redirectURL : redirectURL
    })

    if(!newRedirectUrl) throw new ApiError(500, "New Url cannot not be created")

    return res.status(200).json({
        msg : `New Url : ${newRedirectUrl.nanoId}`
    })
}

export {
    handleGetAllUrls,
    handleGenerateShortUrl
}