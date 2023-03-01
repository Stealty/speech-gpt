import { useSpeechRecognition } from "@vueuse/core";
import useOpenAI from "@use/useOpenAI";

const useRecognition = () => {
  const { result, start, recognition, stop, isListening } =
    useSpeechRecognition({
      lang: "en-US",
      continuous: false,
    });

  recognition.onend = () => {
    const voices = window.speechSynthesis.getVoices();
    console.log("recog");
    if (result.value.length > 0) {
      useOpenAI(result, voices[1]);
    } else {
      alert("Say something...");
    }
  };

  return { start, stop, isListening };
};

export default useRecognition;
