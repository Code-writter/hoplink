import {Router} from 'express'
import { 
    getUserDetails, 
    handleLoginUser, 
    handleLogoutUser, 
    handleRegisterUser
} from '../controllers/user.controller.js'
const router = Router()


router.route("/")
.get(getUserDetails)

router.route("/register").post(handleRegisterUser)
router.route("/login").post(handleLoginUser)
router.route("/logout").post(handleLogoutUser)

export default router 