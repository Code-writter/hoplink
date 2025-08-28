import {Router} from 'express'

import { handleGetAllUrls } from '../controllers/url.controller.js'

const router = Router()


router.route("/")
.get(handleGetAllUrls)


export default router