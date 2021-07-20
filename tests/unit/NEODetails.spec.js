// import App from "@/App.vue";
import VerticalTabs from "@/components/NEODetail/VerticalTabs.vue";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";

describe("NEODetails.vue", () => {
  const localVue = createLocalVue();
  let vuetify;
  const neoDetailsObj = {
    id: "3542519",
    neo_reference_id: "3542519",
    name: "(2010 PK9)",
    designation: "2010 PK9",
    nasa_jpl_url: "https://nasa.gov",
    absolute_magnitude_h: 21.8,
  };
  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("DatePicker renders and can be changed", () => {
    const wrapper = shallowMount(VerticalTabs, {
      localVue,
      vuetify,
      propsData: {
        tabLabels: ["Basics", "Size", "Closest Approaches"],
        tabsLoading: false,
        neoDetails: neoDetailsObj,

        color: "blue",
        close_approach_data: [],
      },
    });

    const toolbar = wrapper.find("v-toolbar-stub");
    expect(toolbar.attributes("color")).toEqual("blue");

    const tabs = wrapper.findAll("v-tab-stub");
    const tab1 = tabs.at(0);
    const tab2 = tabs.at(1);
    const tab3 = tabs.at(2);

    expect(tab1.text()).toEqual("Basics");
    expect(tab2.text()).toEqual("Size");
    expect(tab3.text()).toEqual("Closest Approaches");

    const detailLink = wrapper.find("a");
    expect(detailLink.text()).toEqual("(2010 PK9)");
    expect(detailLink.attributes("href")).toEqual("https://nasa.gov");
  });
});
