import fs from "fs";
import path from "path";

export const apiKey = process.env.GEMINI_AI_KEY as string;

export const getPrompt = (file: any) =>
  fs.readFileSync(path.join(__dirname, file), "utf-8");
