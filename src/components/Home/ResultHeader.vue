<template lang="">
  <v-row v-if="!this.dataTableLoading">
    <v-col>
      <v-subheader class="justify-center"
        >{{ neoLength }} NEO Results for
        {{ this.formatDateString(startDate) }} to
        {{ this.formatDateString(endDate) }}</v-subheader
      >
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "ResultHeader",
  props: {
    neoLength: Number,
    startDate: String,
    endDate: String,
    dataTableLoading: Boolean,
  },
  methods: {
    formatDateString(date) {
      return new Date(date).toString().slice(0, 15);
    },
  },
};
</script>
<style lang=""></style>
