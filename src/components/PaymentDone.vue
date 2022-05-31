<template>
  <div>
    <b-row class="row justify-content-center">
      <b-col cols="12" sm="12" md="8" lg="8" xl="8">
        <b-card style="width: 100%">
          <img
            style="width: 100px"
            src="https://img.icons8.com/flat-round/256/26e07f/checkmark.png"
          />
          <br />
          <h4>Payment successful</h4>
          <p>Your order has been placed</p>
          <b-row style="row justify-content-end">
            <b-col cols="4" sm="4" md="3" lg="2" xl="2">
              <b-button
                @click="homeButton"
                variant="light"
                style="
                  width: 100%;
                  background: #dddddd;
                  color: #black;
                  font-weight: bold;
                "
              >
                <img
                  style="width: 24px"
                  src="https://img.icons8.com/material/24/000000/chevron-left--v1.png"
                />
                Back</b-button
              >
            </b-col>
          </b-row>
        </b-card>
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
  },
};
</script>
<style scoped>
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
  font-size: 18px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: #000000;
  opacity: 0.7;
}
.text-input {
  font-weight: bold;
  margin-top: 10px;
}
</style>