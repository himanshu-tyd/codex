import dotenv from "dotenv";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { firstPrompt, secondPrompt, thirdPrompt } from "./intialPrompts";
import { getSystemPrompt } from "./prompt";
import express from "express";
import templateRoute from "./routes/route";

dotenv.config();

const port=8000

const app = express();

app.use(express.json());

const apiKey = process.env.GEMINI_AI_KEY as string;

app.use("/api", templateRoute);

const main = async (prompt: string) => {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: getSystemPrompt(),
  });

  // const generationConfig = {
  //   temperature: 0.9,
  //   topK: 1,
  //   topP: 1,
  // };

  // const safetySettings = [
  //   {
  //     category: HarmCategory.HARM_CATEGORY_HARASSMENT,
  //     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  //   },
  //   {
  //     category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
  //     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  //   },
  //   {
  //     category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
  //     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  //   },
  //   {
  //     category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
  //     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  //   },
  // ];

  const chat = model.startChat({
    // generationConfig,
    // safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: firstPrompt }],
      },
      {
        role: "user",
        parts: [{ text: secondPrompt }],
      },
      {
        role: "user",
        parts: [{ text: thirdPrompt }],
      },
    ],
  });

  const result = await chat.sendMessageStream(prompt);

  for await (let item of result.stream) {
    if (item.candidates) {
      console.log(item.candidates[0].content.parts[0].text);
    }
  }
};

const prompt = "create nextjs todo app";
// main(prompt);

app.listen(port ,()=>{
  console.log(`SERVER IS RUNNIG AT PORT ${port} `)
})
