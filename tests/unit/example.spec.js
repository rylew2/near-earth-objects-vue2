// import App from "@/App.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Home from "@/views/Home.vue";
import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";

const fetch = jest.fn(() => Promise.resolve());

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = mount(HelloWorld, {
      propsData: { msg },
    });
    console.log(wrapper.text());
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("Home.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("renders props.msg when passed", () => {
    const wrapper = mount(Home, {
      localVue,
      vuetify,
      propsData: { title: "Foobar" },
    });
    console.log(wrapper);
    const input = wrapper.find("#endDate");
    console.log(input);
    expect(wrapper.text()).toMatch("abc");
  });
});
