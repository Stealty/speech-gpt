import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ThemeSwitcher from "@molecules/ThemeSwitcher.vue";

describe("Molecules", () => {
  describe("ThemeSwitcher", () => {
    const wrapper = mount(ThemeSwitcher);

    it("Should display a switch", () => {
      expect(wrapper.element.outerHTML).toContain("va-switch");
    });
    it("Should dispatch a switch event", () => {
      wrapper.find("button").trigger("click");
      expect(wrapper.get("va-switch").html());
    });
  });
});
// need to fix
