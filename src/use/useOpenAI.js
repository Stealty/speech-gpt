import { useChatStore } from "@stores/chatStore";

const useOpenAI = (result, voice) => {
  const date = new Date();
  const { addLog, updateLog } = useChatStore();

  const log = {
    time: date,
    question: result.value,
    answer: "",
    id: date.getTime(),
  };

  addLog(log);

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
      updateLog(log.id, data.bot);

      result.value = "";
    })
    .catch((error) => console.error(error));
};

export default useOpenAI;
