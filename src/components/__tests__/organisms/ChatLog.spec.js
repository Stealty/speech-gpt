import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ChatLog from "@organisms/ChatLog.vue";

describe("Organisms", () => {
  describe("ChatLog", () => {
    const wrapper = mount(ChatLog, {
      props: {
        chatlog: [
          {
            time: new Date(),
            question: "What do you want",
            answer: "I want to...",
          },
        ],
      },
    });

    it("Should render a list", () => {
      expect(wrapper.get("ul"));
    });
  });
});
