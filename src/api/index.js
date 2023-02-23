/* eslint-disable prettier/prettier */

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export const askOpenAi = async () => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
  });

  console.log(response.data.choices[0].text);
};
export default askOpenAi;
