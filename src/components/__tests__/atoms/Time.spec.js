import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Time from "@atoms/Time.vue";

describe("Atoms", () => {
  describe("Time", () => {
    const wrapper = mount(Time, {
      props: {
        time: new Date(),
      },
    });

    it("Should receive and format date", () => {
      expect(wrapper.text()).toContain(new Date().toLocaleTimeString("pt-BR"));
    });
  });
});
