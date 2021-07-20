<template>
  <div>
    <v-row class="dateRow">
      <DatePicker
        @date-change="onDateChange"
        label="Start Date"
        id="startDate"
        :date="startDate"
      />
      <DatePicker
        @date-change="onDateChange"
        label="End Date"
        id="endDate"
        :date="endDate"
      />
    </v-row>
    <ResultHeader
      :neoLength="neo.length"
      :startDate="startDate"
      :endDate="endDate"
      :dataTableLoading="dataTableLoading"
    />
    <Loader
      color="blue"
      :size="70"
      :width="7"
      :dataTableLoading="dataTableLoading"
      :dateRange="dateRange"
    />
    <InvalidRange :dateRange="dateRange" />
    <DataTable
      :apiKey="apiKey"
      :neoAll="this.neo"
      :dataTableLoading="this.dataTableLoading"
      @dataTable-loaded="dataTableLoaded"
      :dateRange="dateRange"
    />
  </div>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";
import DatePicker from "../components/Home/DatePicker.vue";
import DataTable from "../components/Home/DataTable.vue";
import ResultHeader from "../components/Home/ResultHeader.vue";
import Loader from "../components/Home/Loader.vue";
import InvalidRange from "../components/Home/InvalidRange.vue";
export default {
  name: "Home",
  data() {
    return {
      apiKey: process.env.VUE_APP_NASA_API_KEY,
      neo: [],
      startDate: this.getToday(),
      endDate: this.getToday(),
      dataTableLoading: true,
      dateRange: 0,
    };
  },
  components: {
    // HelloWorld,
    DatePicker,
    DataTable,
    ResultHeader,
    Loader,
    InvalidRange,
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
      this.setDateRange();
      if (this.dateRange >= 0 && this.dateRange <= 7) {
        this.fetchAndSetNEO();
      }
    },
    setDateRange() {
      const day = 86400000;
      this.dateRange = Math.floor(
        (Date.parse(this.endDate) - Date.parse(this.startDate)) / day
      );
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
