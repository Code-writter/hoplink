import {Router} from 'express'

import { 
    handleGetAllUrls,
    handleGenerateShortUrl

} from '../controllers/url.controller.js'

const router = Router()


router.route("/")
.get(handleGetAllUrls)
.post(handleGenerateShortUrl)

export default router