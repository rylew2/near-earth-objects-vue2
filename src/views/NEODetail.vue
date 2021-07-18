<template>
  <div class="about">
    <BackIcon iconType="arrow-left" />

    <h1>This is NEO Detail page {{ neoRefId }}</h1>
    <VerticalTabs />
  </div>
</template>

<script>
import VerticalTabs from "../components/NEODetail/VerticalTabs.vue";
import BackIcon from "../components/NEODetail/BackIcon.vue";
export default {
  name: "NEODetail",
  components: {
    VerticalTabs,
    BackIcon,
  },
  data() {
    return {
      apiKey: process.env.VUE_APP_NASA_API_KEY,
      neoRefId: this.$route.params.id,
      neoDetails: [],
      tabsLoading: true,
    };
  },
  created() {
    this.fetchAndSetNEODetail();
    console.log(this.neoDetails);
  },
  methods: {
    async fetchAndSetNEODetail() {
      const neoResults = await this.fetchNEO();
      const neoFlattened = this.formatNeoData(neoResults.near_earth_objects);

      this.neoDetails = neoFlattened;
      this.tabsLoading = false;
    },
    async fetchNEODetail() {
      const url = `https://api.nasa.gov/neo/rest/v1/neo/${this.neoRefId}?api_key=${this.apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
    formatNeoData(neoDetail) {
      let result = [];
      for (let [key, val] of Object.entries(neoDetail)) {
        for (let neoObj of val) {
          result.push({
            Date: key,
            hazardous: neoObj.is_potentially_hazardous_asteroid ? "Yes" : "No",
          });
        }
      }
      return result;
    },
    async fetchAPOD() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      return data.url;
    },
  },
};
</script>
