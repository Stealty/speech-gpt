import { ref } from "vue";
import { defineStore } from "pinia";
import { useSpeechSynthesis } from "@vueuse/core";

const { utterance, speak } = useSpeechSynthesis();

export const useChatStore = defineStore("chat", () => {
  const chatLog = ref([]);

  function addLog(log, voice) {
    this.chatLog.unshift(log);
    utterance.value.lang = "en-US";
    utterance.value.voice = voice;
  }

  function updateLog(identifier, answer) {
    const logIndex = this.chatLog.findIndex((log) => {
      return log.id === identifier;
    });

    this.chatLog[logIndex].answer = answer;

    utterance.value.text = answer;
    speak();
  }

  return { chatLog, addLog, updateLog };
});
