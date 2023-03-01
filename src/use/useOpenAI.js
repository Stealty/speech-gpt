import { useChatStore } from "../stores/chatStore";

const useOpenAI = (result, voice) => {
  const { addLog } = useChatStore();

  fetch("https://speech-gpt-server.vercel.app/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: result.value,
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    }),
  })
    .then((response) => response.json())
    .then(async (data) => {
      const log = {
        time: new Date(),
        question: result.value,
        answer: data.bot,
      };

      addLog(log, voice);

      result.value = "";
    })
    .catch((error) => console.error(error));
};

export default useOpenAI;
