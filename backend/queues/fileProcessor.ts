import { Queue } from "bullmq";
import { REDIS_CONNECTION } from "../config";

export const fileQueue = new Queue("fileQueue", {
  connection: REDIS_CONNECTION
});