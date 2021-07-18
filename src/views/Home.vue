<template>
  <div>
    <v-row class="dateRow">
      <v-col align="center">
        <DatePicker
          @date-change="onDateChange"
          label="Start Date"
          id="startDate"
          :date="startDate"
          :dateMax="this.endDate"
        />
      </v-col>
      <v-col align="center">
        <DatePicker
          @date-change="onDateChange"
          label="End Date"
          id="End Date"
          :date="endDate"
          :dateMin="this.startDate"
        />
      </v-col>
    </v-row>
    <v-row v-if="!this.dataTableLoading">
      <v-col>
        <v-subheader class="justify-center"
          >{{ this.neo.length }} NEO Results for
          {{ this.formatDateString(startDate) }} to
          {{ this.formatDateString(endDate) }}</v-subheader
        >
      </v-col>
    </v-row>

    <DataTable
      :apiKey="apiKey"
      :neoAll="this.neo"
      :dataTableLoading="this.dataTableLoading"
      @dataTable-loaded="dataTableLoaded"
    />
  </div>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";
import DatePicker from "../components/Home/DatePicker.vue";
import DataTable from "../components/Home/DataTable.vue";
export default {
  name: "Home",
  data() {
    return {
      apiKey: process.env.VUE_APP_NASA_API_KEY,
      next: "",
      prev: "",
      neo: [],
      startDate: this.getToday(),
      endDate: this.getToday(),
      dataTableLoading: true,
    };
  },
  components: {
    // HelloWorld,
    DatePicker,
    DataTable,
  },
  async created() {
    this.fetchAndSetNEO();
  },
  methods: {
    getToday() {
      return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10);
    },
    formatDateString(date) {
      return new Date(date).toString().slice(0, 15);
    },
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
    async fetchNEO(startDate = this.startDate, endDate = this.endDate) {
      const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${this.apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
    async onDateChange(eventArray) {
      this.dataTableLoading = true;
      const [dateType, date] = eventArray;
      if (dateType === "Start Date") {
        this.startDate = date;
      } else {
        this.endDate = date;
      }
      this.fetchAndSetNEO();
    },
    async fetchAndSetNEO() {
      const neoResults = await this.fetchNEO();
      const neoFlattened = this.formatNeoData(neoResults.near_earth_objects);

      this.neo = neoFlattened;
      this.dataTableLoaded();
    },
    dataTableLoaded() {
      this.dataTableLoading = false;
    },
  },
};
</script>
