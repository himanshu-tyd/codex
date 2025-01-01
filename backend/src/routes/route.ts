import express from "express";
import { getPrompt } from "../lib/helper";


const route = express.Router();

route.post("/template", async (req, res) => {
  const prompt = req.body.prompt;

});

export default route;
