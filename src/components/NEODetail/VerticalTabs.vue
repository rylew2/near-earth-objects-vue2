<template>
  <v-card class="verticalTabsCard" v-if="!tabsLoading">
    <v-toolbar elevation="16" :color="color">
      <v-toolbar-title>
        <a :href="neoDetails.nasa_jpl_url" target="_blank"
          >{{ neoDetails.name }}
        </a>
      </v-toolbar-title>
    </v-toolbar>
    <v-tabs fixed-tabs vertical ref="tabs" hide-slider>
      <v-tab v-for="tabName in tabLabels" :key="tabName">{{ tabName }} </v-tab>

      <v-tab-item>
        <BasicDetails :neoDetails="neoDetails" />
      </v-tab-item>
      <v-tab-item>
        <SizeDetails :neoDetails="neoDetails" />
      </v-tab-item>
      <v-tab-item>
        <ClosestApproaches :neoDetails="neoDetails" />
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import BasicDetails from "./BasicDetails.vue";
import SizeDetails from "./SizeDetails.vue";
import ClosestApproaches from "./ClosestApproaches.vue";
export default {
  name: "VerticalTabs",
  created() {
    this.$refs.tabs && this.$refs.tabs.onResize();
  },
  props: {
    tabLabels: Array,
    tabsLoading: Boolean,
    neoDetails: Object,
    color: String,
  },
  components: {
    BasicDetails,
    SizeDetails,
    ClosestApproaches,
  },
};
</script>
<style scoped>
.verticalTabsCard {
  /* max-width: 90vw; */
}
</style>
