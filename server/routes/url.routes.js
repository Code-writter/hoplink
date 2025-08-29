import {Router} from 'express'

import { 
    handleGetAllUrls,
    handleRedirect,
    handleDeleteUrl,
    handleGenerateShortUrl
} from '../controllers/url.controller.js'

const router = Router()


router.route("/")
.get(handleGetAllUrls)
.post(handleGenerateShortUrl)

router.route("/:id")
.get(handleRedirect)
.delete(handleDeleteUrl)



export default router