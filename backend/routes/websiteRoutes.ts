import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { getWebsites } from "../controllers/websiteController";

const router = express.Router();

// GET /api/websites?page=1&limit=10
router.get("/", authMiddleware, getWebsites);

export default router;