<template lang="">
  <v-row>
    <v-col>
      <div class="container">
        <v-data-table
          v-if="!this.dataTableLoading && dateRange <= 7 && dateRange >= 0"
          :headers="headers"
          :items="neos"
          class="elevation-4 row-pointer"
          @click:row="handleClickRow"
          :items-per-page="10"
        ></v-data-table>
      </div>
    </v-col>
  </v-row>
</template>
<script>
// import AboutVue from "../views/About.vue";
export default {
  props: {
    neoAll: Array,
    dataTableLoading: Boolean,
    dateRange: Number,
  },
  data() {
    return {
      headers: [
        { text: "NEO Name", value: "neoName" },
        { text: "Hazardous", value: "hazardous" },
        { text: "Closest Approach to Earth", value: "Date" },
      ],
      neos: [],

      page: 1,
    };
  },
  methods: {
    handleClickRow(rowData) {
      console.log("handleClickRow", rowData);
      this.$router.push(`/NEODetail/${rowData.neoRefId}`);
    },
  },
  watch: {
    neoAll: function (newNeo) {
      this.neos = newNeo;
      this.$emit("dataTable-loaded");
    },
  },
};
</script>
<style scoped>
.row-pointer >>> tbody tr :hover {
  cursor: pointer;
}
</style>
