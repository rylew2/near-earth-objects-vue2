<template lang="">
  <div class="container">
    <v-data-table
      :headers="headers"
      :items="neos"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>
<script>
export default {
  props: {
    neoAll: Array,
  },
  data() {
    return {
      headers: [
        { text: "NEO Name", value: "neoName" },
        { text: "Hazardous", value: "hazardous" },
        { text: "Closest Approach to Earth", value: "Date" },
      ],
      neos: [],
      loading: true,
      page: 1,
    };
  },
  watch: {
    neoAll: function (newNeo) {
      this.neos = newNeo;
    },
  },
};
</script>
<style lang=""></style>
