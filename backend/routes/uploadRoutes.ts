import { Router } from "express";
import multer from "multer";
import { uploadFile } from "../controllers/uploadController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

const upload = multer({ dest: "uploads/" });

router.post("/", authMiddleware, upload.single("file"), uploadFile);

export default router;