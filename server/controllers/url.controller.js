import { ShortUrl } from "../models/url.model.js";
import {nanoid} from 'nanoid'
import {ApiError} from '../utils/ApiErrors.js'


const handleGetAllUrls =  async (req, res) => {
    const {id} = req.params.id
    const all_redirect_urls = await ShortUrl.find({
        owner : id
    })

    if(!all_redirect_urls) throw new ApiError(500, "Urls not found in the database")

    return res.status(200).json({
        urls : all_redirect_urls
    })
}

const handleGenerateShortUrl = async (req, res) => {
    const { redirectURL } = req.body;
    const {id} = req.headers
    const nanoId = nanoid(8)

    if( !redirectURL || !nanoId ) throw new ApiError(500, "Redirect Url and Nano Id is required ")

    const newRedirectUrl = await ShortUrl.create({
        nanoId : nanoId,
        redirectURL : redirectURL,
        information : []
    })

    if(!newRedirectUrl) throw new ApiError(500, "New Url cannot not be created")

    return res.status(200).json({
        msg : `New Url : ${newRedirectUrl.nanoId}`
    })
}


const handleRedirect = async (req, res) => {
    const id  = req.params.id;

    if(!id) throw new ApiError(400, "Url Id is required")


    const redirect = await ShortUrl.findOneAndUpdate({
        nanoId : id
    }, {
        $push : {
        information : {
            timestamp : Date.now()
        }
    }
})


    if(!redirect) throw new ApiError(400, "There is no redirect url for the given nanoId")

    return res.status(301).redirect(redirect.redirectURL)
}

const handleDeleteUrl = async (req, res) => {
    const id   = req.params.id;

    if(!id) throw new ApiError(400, "Url Id is required")

    try {
        await ShortUrl.deleteOne({nanoId : id})
    } catch (error) {
        throw new ApiError(500, "Cannot able to delete the url")
    }
    
    return res.status(200).json({
        res : "Url deleted"
    })
}   

const handleUrlInfo = async (req, res) => {
    const id = req.params.id

    if(!id) throw new ApiError(400, "Id is required")

    const urlInfo = await ShortUrl.findById(id)

    if(!urlInfo) throw new ApiError(404, "Url Info not found")

    return res.status(200).json(urlInfo)
}

export {
    handleGetAllUrls,
    handleRedirect,
    handleDeleteUrl,
    handleUrlInfo,
    handleGenerateShortUrl,
}