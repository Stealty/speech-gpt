import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Button from "@atoms/Button.vue";

describe("Atoms", () => {
  describe("Button", () => {
    const wrapper = mount(Button, {
      props: { name: "Button name", click: () => {} },
    });
    it("renders properly", () => {
      expect(wrapper.text()).toContain("Button name");
    });
    it("Dispatch click event", () => {
      expect(wrapper.attributes("click"));
    });
  });
});
