import { ShortUrl } from "../models/url.model.js";
import {nanoid} from 'nanoid'
import {ApiError} from '../utils/ApiErrors.js'


const handleGetAllUrls =  async (req, res) => {
    const all_redirect_urls = await ShortUrl.find({})
    if(!all_redirect_urls) throw new ApiError(500, "Urls not found in the database")

    return res.status(200).json({
        urls : all_redirect_urls
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


const handleRedirect = async (req, res) => {
    const { id }  = req.params;

    if(!id) throw new ApiError(400, "Url Id is required")


    const redirect = await ShortUrl.findOne({nanoId : id})


    if(!redirect) throw new ApiError(400, "There is no redirect url for the given nanoId")

    return res.status(301).redirect(redirect.redirectURL)
}


export {
    handleGetAllUrls,
    handleRedirect,
    handleGenerateShortUrl
}