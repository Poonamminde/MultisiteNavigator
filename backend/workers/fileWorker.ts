import { Worker } from "bullmq";
import IORedis from "ioredis";
import Website from "../models/Website";
import extractUrls from "../utils/extractUrls";
import { REDIS_URL } from "../config";

const connection = new IORedis(REDIS_URL, {
  maxRetriesPerRequest: null,
});

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
  { connection }
);