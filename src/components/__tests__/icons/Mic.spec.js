import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Mic from "@icons/Mic.vue";

describe("Icons", () => {
  describe("Mic", () => {
    const wrapper = mount(Mic, {
      props: {
        isListening: true,
      },
    });

    it("Should display an icon", () => {
      expect(wrapper.element.outerHTML).toContain("va-icon");
    });
  });
});
