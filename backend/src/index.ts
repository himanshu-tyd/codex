import dotenv from "dotenv";
import { firstPrompt, secondPrompt, thirdPrompt } from "./intialPrompts";
import { getSystemPrompt } from "./prompt";
import express from "express";
import templateRoute from "./routes/route";
import Anthropic from "@anthropic-ai/sdk";

dotenv.config();
const port = 8000;
const app = express();
app.use(express.json());

export const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const main = async (prompt: string) => {
  const systemPrompt = getSystemPrompt();
  const res = await client.messages.stream({
    messages: [
      { role: "user", content: firstPrompt },
      { role: "user", content: secondPrompt },
      { role: "user", content: thirdPrompt },
    ],
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 8000,
    system: systemPrompt,
    stream: true,
  });

  console.log(res);
};

app.use("/api", templateRoute);

const prompt = "create todo app";
// main(prompt);

app.listen(port, () => {
  console.log(`SERVER IS RUNNIG AT PORT ${port} `);
});
