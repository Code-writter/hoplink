import {Router} from 'express'
import { 
    getUserDetails, 
    handleLoginUser, 
    handleRegisterUser
} from '../controllers/user.controller.js'
const router = Router()


router.route("/")
.get(getUserDetails)

router.route("/register").post(handleRegisterUser)
router.route("/login").post(handleLoginUser)


export default router 