import {Router} from 'express'
import { 
    getUserDetails, 
    handleRegisterUser
} from '../controllers/user.controller.js'
const router = Router()


router.route("/")
.get(getUserDetails)
.post(handleRegisterUser)



export default router 