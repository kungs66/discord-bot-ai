const OpenAI = require("openai");
// import OpenAI from "openai";
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
  organization: "org-gVxEu0LsuKlxdxYAsdk7Wj0v",
});

module.exports = {
  async say(instruction) {
    try {
      return await openai.completions.create({
        model: "text-davinci-003",
        prompt: instruction,
        max_tokens: 1024,
        temperature: 0,
      });
    } catch (error) {
      // Consider adjusting the error handling logic for your use case
      if (error.response) {
        console.error(error.response.status, error.response.data);
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
      }
    }
  },
};
