<template lang="">
  <div class="container">
    <v-progress-circular
      v-if="this.dataTableLoading"
      indeterminate
      color="blue"
      :size="70"
      :width="7"
    ></v-progress-circular>

    <v-data-table
      v-if="!this.dataTableLoading"
      :headers="headers"
      :items="neos"
      class="elevation-4 row-pointer"
      @click:row="handleClickRow"
      :items-per-page="10"
    ></v-data-table>
  </div>
</template>
<script>
// import AboutVue from "../views/About.vue";
export default {
  props: {
    neoAll: Array,
    dataTableLoading: Boolean,
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
