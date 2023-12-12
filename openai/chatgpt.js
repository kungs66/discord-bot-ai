const OpenAI = require("openai");
require("dotenv").config();

// const configuration = new Configuration({
//   apiKey: process.env.openai,
// });

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
  organization: "org-FkFolYmTDS6JpLbGGMeV8cqi",
});

module.exports = {
  async say(instruction) {
    try {
      return await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: instruction,
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
