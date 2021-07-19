<template lang="">
  <v-card flat>
    <v-card-text>
      <v-list two-line>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="green"> mdi-size-m </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Average Size in Meters</v-list-item-title>
            <v-list-item-subtitle>{{
              getAverageDiameterByType("meters")
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="purple"> mdi-arrow-split-vertical </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Average Size in Feet</v-list-item-title>
            <v-list-item-subtitle>{{
              getAverageDiameterByType("feet")
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "SizeDetails",
  props: {
    neoDetails: Object,
  },
  methods: {
    getAverageDiameterByType(type) {
      const diameters = this.neoDetails.estimated_diameter;
      if (type === "meters") {
        const { estimated_diameter_min, estimated_diameter_max } =
          diameters.meters;
        return (estimated_diameter_min + estimated_diameter_max) / 2;
      } else if (type === "feet") {
        const { estimated_diameter_min, estimated_diameter_max } =
          diameters.feet;
        return (estimated_diameter_min + estimated_diameter_max) / 2;
      }
      return -1;
    },
  },
};
</script>
