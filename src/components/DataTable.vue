<template lang="">
  <div class="container">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="10"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        { text: "Passenger Name", value: "name" },
        { text: "Number Of Trips", value: "trips" },
        { text: "Airline", value: "airline[0].name" },
        { text: "Logo", value: "logo" },
        { text: "Website", value: "website" },
      ],
      desserts: [],
      loading: true,
      page: 1,
    };
  },
};
</script>
<style lang=""></style>
