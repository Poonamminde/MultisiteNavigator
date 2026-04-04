import xlsx from "xlsx";
import fs from "fs/promises";

const extractUrls = async (filePath: string): Promise<string[]> => {
  // Read the workbook
  const workbook = xlsx.readFile(filePath);

  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  const rows: Record<string, any>[] = xlsx.utils.sheet_to_json(sheet);

  const urls: string[] = [];

  rows.forEach((row) => {
    Object.values(row).forEach((value) => {
      if (typeof value === "string" && value.startsWith("http")) {
        urls.push(value);
      }
    });
  });

  // Delete the file after processing
  try {
    await fs.unlink(filePath);
  } catch (err) {
    console.error("Failed to delete file:", err);
  }

  return urls;
};

export default extractUrls;