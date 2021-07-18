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

    <DataTable :apiKey="apiKey" />
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
    };
  },
  components: {
    // HelloWorld,
    DatePicker,
    DataTable,
  },
  async created() {
    const neoResults = await this.fetchAsteroids();
    const {next, prev} = newResults.links;
    const neo = 
    console.log(asteroids);
  },
  methods: {
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
<style scoped>
.dateRow {
  justify-content: center;
}
</style>
