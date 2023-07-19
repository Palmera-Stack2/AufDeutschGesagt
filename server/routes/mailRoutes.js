import express from "express";
import { sendMailChimp } from "../controllers/mailController.js";

const router = express.Router();

router.post("/signup", sendMailChimp);

export default router;
