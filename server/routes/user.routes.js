import {Router} from 'express'
import { getUserDetails } from '../controllers/user.controller.js'
const router = Router()


router.route("/")
.get(getUserDetails)



export default router 