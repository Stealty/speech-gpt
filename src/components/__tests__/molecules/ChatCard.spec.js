import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ChatCard from "@molecules/ChatCard.vue";

describe("Molecules", () => {
  describe("ChatCard", () => {
    const wrapper = mount(ChatCard, {
      props: {
        username: "Default username",
        content: "Default content",
      },
    });

    it("Should display username", () => {
      expect(wrapper.text()).toContain("Default username");
    });
    it("Should display user message", () => {
      expect(wrapper.text()).toContain("Default content");
    });
  });
});
