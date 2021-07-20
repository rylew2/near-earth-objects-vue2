// import App from "@/App.vue";
import DatePicker from "@/components/home/DatePicker.vue";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";

describe("Home.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("DatePicker renders and can be changed", () => {
    let todayDate = new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    );
    let today = todayDate.toISOString().substr(0, 10);
    const wrapper = shallowMount(DatePicker, {
      localVue,
      vuetify,
      propsData: { date: today, label: "Start Date" },
    });

    const label = wrapper.find("label");
    expect(label.text()).toEqual("Start Date:");

    const input = wrapper.find("input");
    expect(input.element.value).toEqual(today);

    todayDate.setDate(todayDate.getDate() + 5);
    const fiveDaysAhead = todayDate.toISOString().substr(0, 10);
    input.setValue(fiveDaysAhead);
    expect(input.element.value).toEqual(fiveDaysAhead);
  });
});
