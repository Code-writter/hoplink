import { Router } from "express";

import {
    handleGetAllUrls,
    handleRedirect,
    handleDeleteUrl,
    handleUrlInfo,
    handleGenerateShortUrl,
} from "../controllers/url.controller.js";

const router = Router();

router.route("/").get(handleGetAllUrls).post(handleGenerateShortUrl);

router.route("/:id").get(handleRedirect).delete(handleDeleteUrl);

router.route("/url-info/:id").get(handleUrlInfo);

export default router;
