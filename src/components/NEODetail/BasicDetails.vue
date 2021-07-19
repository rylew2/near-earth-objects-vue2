<template lang="">
  <v-card flat>
    <v-card-text>
      <v-list two-line>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="black"> mdi-space-station </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Name</v-list-item-title>
            <v-list-item-subtitle>{{ neoDetails.name }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="green"> mdi-rename-box </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Designation</v-list-item-title>
            <v-list-item-subtitle>{{
              neoDetails.designation
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="blue"> mdi-pencil-ruler </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Absolute Magnitude</v-list-item-title>
            <v-list-item-subtitle>{{
              neoDetails.absolute_magnitude_h
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="red"> mdi-close-octagon </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Hazardous</v-list-item-title>
            <v-list-item-subtitle>{{
              neoDetails.is_potentially_hazardous_asteroid ? "Yes" : "No"
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="gray"> mdi-link-variant </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>NASA JPL URL</v-list-item-title>
            <v-list-item-subtitle
              ><a target="_blank" :href="neoDetails.nasa_jpl_url">
                {{ neoDetails.nasa_jpl_url }}
              </a>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "BasicDetails",
  props: {
    neoDetails: Object,
  },
};
</script>
