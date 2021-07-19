<template lang="">
  <v-row v-if="dateRange > 7 || dateRange < 0">
    <v-col align="center">
      <h2>
        Invalid range - please make sure the Start Date is less than the End
        Date, and that the day difference is no more than 7
      </h2>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "Invalidrange",
  props: {
    dateRange: Number,
  },
};
</script>
<style scoped>
.row {
  color: red;
}
</style>
