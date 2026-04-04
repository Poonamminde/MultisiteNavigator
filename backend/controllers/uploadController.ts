import { Response } from "express";
import { fileQueue } from "../queues/fileProcessor";

import { Request } from "express";

export interface AuthRequest extends Request {
  file?: Express.Multer.File;
  user?: {
    id: string;
  };
}

export const uploadFile = async (req: AuthRequest, res: Response) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        message: "File is required"
      });
    }

    const filePath = req.file.path;
    const userId = req.user?.id;

    await fileQueue.add("processFile", {
      filePath,
      userId
    });

    res.json({
      message: "File uploaded and processing started"
    });

  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};