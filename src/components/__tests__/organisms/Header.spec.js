import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Header from "@organisms/Header.vue";

describe("Organisms", () => {
  describe("Header", () => {
    const wrapper = mount(Header, {
      props: {
        title: "Default Title",
        description: "Default Description",
      },
    });
    it("Should be a header", () => {
      expect(wrapper.get("header"));
    }),
      it("Should render the title", () => {
        expect(wrapper.get("h1").html()).toContain("Default Title");
      });
    it("Should render the description", () => {
      expect(wrapper.get("p").html()).toContain("Default Description");
    });
  });
});
