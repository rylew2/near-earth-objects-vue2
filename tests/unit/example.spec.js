import HelloWorld from "@/components/HelloWorld.vue";
import Home from "@/views/Home.vue";
import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";

describe("HelloWorld.vue", () => {
  const localVue = createLocalVue();
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = mount(HelloWorld, {
      propsData: { msg },
    });
    console.log(wrapper.text());
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("HelloWorld.vue", () => {
  const localVue = createLocalVue();
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = mount(Home, {
      propsData: { msg },
    });
    console.log(wrapper.text());
    expect(wrapper.text()).toMatch(msg);
  });
});
