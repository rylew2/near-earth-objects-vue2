<template>
  <div>
    <v-row class="dateRow" align="center">
      <v-col>
        <DatePicker label="Start Date" />
      </v-col>
      <v-col>
        <DatePicker label="End Date" />
      </v-col>
    </v-row>

    <DataTable :apiKey="apiKey" :neoAll="this.neo" />
  </div>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";
import DatePicker from "../components/DatePicker.vue";
import DataTable from "../components/DataTable.vue";
export default {
  name: "Home",
  data() {
    return {
      apiKey: process.env.VUE_APP_NASA_API_KEY,
      next: "",
      prev: "",
      neo: [],
    };
  },
  components: {
    // HelloWorld,
    DatePicker,
    DataTable,
  },
  async created() {
    const neoResults = await this.fetchAsteroids();
    const { next, prev } = neoResults.links;
    console.log("next Link ==>", next);
    console.log("prev link ==> ", prev);

    let neoFlattened = this.formatNeoData(neoResults.near_earth_objects);
    console.log("neoFlattened ", neoFlattened);
    this.neo = neoFlattened;
  },
  methods: {
    formatNeoData(neo) {
      let result = [];
      for (let [key, val] of Object.entries(neo)) {
        for (let neoObj of val) {
          result.push({
            Date: key,
            neoName: neoObj.name,
            neoRefId: neoObj.neo_reference_id,
            nasaUrl: neoObj.nasa_jpl_url,
            absMagnitude: neoObj.absolute_magnitude_h,
            hazardous: neoObj.is_potentially_hazardous_asteroid ? "Yes" : "No",
          });
        }
      }
      return result;
    },
    async fetchAsteroids() {
      const startDate = "2015-09-07";
      const endDate = "2015-09-08";
      const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${this.apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  },
};
</script>
