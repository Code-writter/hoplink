import { Router } from "express";
import {
    getUserDetails,
    handleLoginUser,
    handleLogoutUser,
    handleRegisterUser,
} from "../controllers/user.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";



const router = Router();

router.route("/").get(getUserDetails);

router.route("/register").post(handleRegisterUser);
router.route("/login").post(handleLoginUser);
router.route("/logout").post(verifyJWT, handleLogoutUser);

export default router;
