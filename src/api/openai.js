/* eslint-disable prettier/prettier */

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const askOpenAi = async (prompt) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 2000,
    temperature: 0.2,
  });

  const text = response.data.choices[0].text;

  return text;
};
