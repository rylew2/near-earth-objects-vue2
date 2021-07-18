<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>NASA Near Earth Objects</h1>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  created() {
    console.log("ryan");
    console.log(process.env);
    console.log(process.env.NASA_API_KEY);
  },
};
</script>
