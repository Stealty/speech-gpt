<!-- eslint-disable no-undef -->
<script setup>
import { useSpeechRecognition } from "@vueuse/core";
import { useSpeechSynthesis } from "@vueuse/core";
import { watch } from "vue";
import { askOpenAi } from "../api/openai";

const { isFinal, result, start } = useSpeechRecognition({
  lang: "pt-BR",
  continuous: false,
});

const { isPlaying, utterance, speak } = useSpeechSynthesis();

watch(isFinal, async () => {
  await askOpenAi(result.value).then((result) => {
    utterance.value.text = result.replace("?\n\n", "").trim();
    utterance.value.lang = "pt-BR";
    speak();
  });
});

watch(isPlaying, () => {
  start();
});
</script>

<template>
  <main>
    <button @click="start()">Ask something</button>
    <div>{{ result }}</div>
    <div>{{ isFinal }}</div>
    <div>{{ isPlaying }}</div>
  </main>
</template>
