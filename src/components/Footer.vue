<template>
  <div>
    <b-row class="row justify-content-center">
      <b-col cols="12" sm="12" md="8" lg="6" xl="6">
        <b-row>
          <b-col cols="12" sm="12" md="4" xl="4" lg="4">
            <p>@demoy COmpany LCC</p>
          </b-col>
          <b-col cols="12" sm="12" md="4" xl="4" lg="4">
            <h6>About</h6>
            <p style="cursor: pointer" @click="termsFunc">Terms or Service</p>
            <p @click="policyFunc">Privacy & Policy</p></b-col
          >
          <b-col cols="12" sm="12" md="4" xl="4" lg="4">
            <h6>Help</h6>
            <p style="color: #55ddbb">help@domain.com</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  methods: {
    homeButton() {
      this.$store.dispatch("checkFunc");
    },
    termsFunc() {
      this.$router.push("/terms");
    },
    policyFunc() {
      this.$router.push("/privacy");
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 1200px) {
  h4 {
    font-size: 30px;
    font-weight: 900;
    font-family: "Rubik", sans-serif;
    opacity: 0.5;
    line-height: 40px;
    text-align: center;

    color: #000000;
  }
  h5 {
    font-size: 16px;
    font-weight: 500;
    font-family: "Rubik", sans-serif;
    text-align: center;
    color: #000000;
    opacity: 0.7;
  }
  h6 {
    font-size: 14px;
    font-weight: 500;
    font-family: "Rubik", sans-serif;
    color: #000000;
    text-align: start;
    text-align: center;
  }
  p {
    font-size: 13px;
    font-weight: 500;
    font-family: "Rubik", sans-serif;
    color: #000000;
    text-align: start;
    opacity: 0.6;
    text-align: center;
  }

  .text-input {
    font-weight: bold;
    margin-top: 10px;
  }
}
@media only screen and (min-width: 1201px) {
  h4 {
    font-size: 30px;
    font-weight: 900;
    font-family: "Rubik", sans-serif;
    opacity: 0.5;
    line-height: 40px;

    color: #000000;
  }
  h5 {
    font-size: 16px;
    font-weight: 500;
    font-family: "Rubik", sans-serif;
    color: #000000;
    opacity: 0.7;
  }
  h6 {
    font-size: 14px;
    font-weight: 500;
    font-family: "Rubik", sans-serif;
    color: #000000;
    text-align: start;
  }
  p {
    font-size: 13px;
    font-weight: 500;
    font-family: "Rubik", sans-serif;
    color: #000000;
    text-align: start;
    opacity: 0.6;
  }

  .text-input {
    font-weight: bold;
    margin-top: 10px;
  }
}
</style>