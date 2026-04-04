import Website from "../models/Website";
import { Request, Response } from "express";
import { AuthRequest } from "../middlewares/authMiddleware";

export const getWebsites = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const websites = await Website.find({ userId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Website.countDocuments({ userId });

    res.json({
      websites,
      page,
      totalPages: Math.ceil(total / limit),
      total,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}