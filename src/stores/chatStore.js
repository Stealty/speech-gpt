import { ref } from "vue";
import { defineStore } from "pinia";
import { useSpeechSynthesis } from "@vueuse/core";

const { utterance, speak } = useSpeechSynthesis();

export const useChatStore = defineStore("chat", () => {
  const chatLog = ref([]);

  function addLog(log, voice) {
    utterance.value.text = log.answer;
    utterance.value.lang = "en-US";
    utterance.value.voice = voice;
    this.chatLog.unshift(log);
    speak();
  }

  return { chatLog, addLog };
});
