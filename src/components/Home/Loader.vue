<template>
  <v-row v-if="dataTableLoading && dateRange <= 7 && dateRange >= 0">
    <v-col align="center">
      <v-progress-circular
        indeterminate
        :color="color"
        :size="size"
        :width="width"
      ></v-progress-circular>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "Loader",
  props: {
    color: String,
    size: Number,
    width: Number,
    dataTableLoading: Boolean,
    dateRange: Number,
  },
};
</script>
