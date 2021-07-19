<template>
  <v-col align="center">
    <div class="dateContainer">
      <h3 class="dateLabel">
        <label :for="id">{{ label }}:</label>
      </h3>

      <input
        type="date"
        :id="id"
        name="trip-start"
        :value="date"
        :min="dateMin"
        :max="dateMax"
        @change="onChange($event)"
      />
    </div>
  </v-col>
</template>

<script>
export default {
  name: "DatePicker",
  props: {
    label: String,
    date: String,
    id: String,
    dateMin: String,
    dateMax: String,
  },
  data: () => ({
    // date: this.date,
    menu: false,
    modal: false,
    menu2: false,
  }),
  methods: {
    onChange(e) {
      console.log("onchange in datatable => ", [
        this.label,
        e.target.id,
        e.target.value,
      ]);
      this.$emit("date-change", [this.label, e.target.value]);
    },
  },
};
</script>
<style scoped>
.dateContainer {
  /* border: 1px solid; */
  margin: 15 auto;
}
.dateLabel {
  font-style: bold;
}

input {
  font-size: 2rem;
}
</style>
