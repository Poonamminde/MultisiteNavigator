import dotenv from "dotenv";
import IORedis from "ioredis";
dotenv.config();
 
export const JWT_SECRET = process.env.JWT_SECRET as string
export const MONGO_URI = process.env.MONGO_URI as string
export const FRONTEND_URL = process.env.FRONTEND_URL as string
export const PORT = process.env.PORT || 5000
export const REDIS_URL = process.env.REDIS_URL as string

export const REDIS_CONNECTION = new IORedis(REDIS_URL, {
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
  tls: REDIS_URL?.startsWith("rediss://") ? {} : undefined
});