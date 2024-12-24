import dotenv from "dotenv";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import express from "express";
import { getPrompt } from "../lib/helper";

const route = express.Router();

route.post("/template", async (req, res) => {
  const prompt:string = req.body.prompt;

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_KEY!);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: getPrompt("../prompts/template.md"),
  });

  const chat = await model.generateContent(prompt);


  console.log(chat.response.candidates)

//   res.json(chat.response.candidates);
});

export default route;
