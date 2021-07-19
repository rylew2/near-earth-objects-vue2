<template>
  <v-card flat>
    <v-card-text>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold"
            >Top 5 Closest Approaches</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        three-line
        v-for="approach in closestApproaches"
        :key="approach.id"
      >
        <v-list-item-content>
          <v-list-item-title
            ><span class="font-weight-medium">Miss Distance (miles):</span>
            {{ Math.floor(approach.miss_distance.miles) }}</v-list-item-title
          >
          <v-list-item-subtitle>
            Approach Date:
            {{ approach.close_approach_date }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            Orbiting Body: {{ approach.orbiting_body }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <span class="font-weight-medium">Relative Velocity (mph):</span>
            {{ Math.floor(approach.relative_velocity.miles_per_hour) }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "BasicDetails",
  props: {
    neoDetails: Object,
  },
  data() {
    return {
      closestApproaches: this.setClosestApproaches(),
    };
  },
  created() {
    this.setClosestApproaches();
  },
  methods: {
    setClosestApproaches() {
      return this.neoDetails.close_approach_data
        .sort((a, b) =>
          a.miss_distance.miles > b.miss_distance.miles ? 1 : -1
        )
        .slice(0, 5);
    },
  },
};
</script>
