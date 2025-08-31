import { Router } from "express";

import {
    handleGetAllUrlsByUser,
    handleRedirect,
    handleDeleteUrl,
    handleUrlInfo,
    handleGenerateShortUrl,
} from "../controllers/url.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").get(verifyJWT ,handleGetAllUrlsByUser).post(verifyJWT ,handleGenerateShortUrl);

router.route("/:id").get(handleRedirect).delete(verifyJWT ,handleDeleteUrl);

router.route("/url-info/:id").get(verifyJWT ,handleUrlInfo);

export default router;
