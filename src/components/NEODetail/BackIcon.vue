<template>
  <div>
    <router-link to="/">
      <v-icon large color="black">mdi-{{ iconType }}</v-icon></router-link
    >
  </div>
</template>
<script>
export default {
  name: "BackIcon",

  props: {
    iconType: String,
  },
};
</script>
