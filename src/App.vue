<template>
  <v-app>
    <router-view />
    <app-footer style="margin-top: 100px" v-if="checkValue != 2" />
  </v-app>
</template>
<script>
export default {
  computed: {
    checkValue() {
      return this.$store.getters.checkValue;
    },
  },
};
</script>
<style>
</style>
