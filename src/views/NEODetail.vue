<template>
  <div>
    <v-row>
      <BackIcon iconType="arrow-left" />
    </v-row>
    <v-row class="justify-center">
      <img
        :class="isImgLoaded ? 'show' : 'hide'"
        :v-show="isImgLoaded"
        @load="onImgLoad"
        :src="apodURL"
        alt="Astronomy Picture of the Day"
      />
    </v-row>
    <v-row class="verticaltab-row justify-center">
      <VerticalTabs
        :neoDetails="neoDetails"
        :tabLabels="tabLabels"
        :tabsLoading="tabsLoading"
        color="blue lighten-4"
      />
    </v-row>
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
      neoDetails: {},
      tabsLoading: true,
      tabLabels: ["Basics", "Size", "Closest Approaches"],
      apodURL: "",
      isImgLoaded: false,
    };
  },
  created() {
    this.fetchAndSetNEODetail();
  },
  methods: {
    async fetchAndSetNEODetail() {
      const neoResults = await this.fetchNEODetail();
      this.neoDetails = neoResults;
      this.tabsLoading = false;
      this.apodURL = await this.fetchAPOD();
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
    onImgLoad() {
      this.isImgLoaded = true;
    },
  },
};
</script>
<style scoped>
img {
  height: 25vh;
}

img.hide {
  visibility: hidden;
}
</style>
