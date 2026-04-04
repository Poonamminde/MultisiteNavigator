import { Worker } from "bullmq";
import IORedis from "ioredis";
import Website from "../models/Website";
import extractUrls from "../utils/extractUrls";

const connection = new IORedis({
  host: "127.0.0.1",
  port: 6379,
  maxRetriesPerRequest: null
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