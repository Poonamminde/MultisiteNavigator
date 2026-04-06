import { Worker } from "bullmq";
import Website from "../models/Website";
import extractUrls from "../utils/extractUrls";
import { REDIS_CONNECTION } from "../config";

const worker = new Worker(
  "fileQueue",
  async job => {
    const { filePath, userId } = job.data;

    const urls = await extractUrls(filePath);

    const websites = urls.map(url => ({
      url,
      userId
    }));

    await Website.insertMany(websites);

    return { count: urls.length };
  },
  { connection: REDIS_CONNECTION }
);