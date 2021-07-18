<template>
  <v-container>
    <h1>{{ msg }}</h1>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
