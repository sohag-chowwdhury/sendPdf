<template>
  <div>
    <b-row>
      <b-col>
        <b-card style="width: 100%; height: 360px; background: #d6d2d2">
          <b-row style="background: #d6d2d2" class="row justify-content-center">
            <b-col
              style="background: #d6d2d2"
              cols="11"
              sm="11"
              md="6"
              lg="4"
              xl="4"
            >
              <b-row>
                <b-col style="background: #d6d2d2; width: 100%">
                  <pdf
                    v-for="i in numPages"
                    :key="i"
                    :src="item"
                    :page="i"
                    style="display: inline-block; width: 30%"
                  ></pdf>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="row justify-content-center">
      <b-col cols="12" sm="12" md="8" lg="8" xl="8">
        <h4 style="text-align: center">
          Total : <span style="color: #1dbf73"> $ {{ 1.5 * numPages }}</span>
        </h4>
        <h6>Expected delivery</h6>
        <h5 style="color:#43A047">{{ moment().add(7, "d").format("LL") }}</h5>
      </b-col>
      <b-col cols="12" sm="12" md="8" lg="8" xl="8">
        <h5 class="mx-2" style="opacity: 1; text-align: start; font-size: 20px">
          Payment
        </h5>
        <b-row class="mx-2">
          <b-col cols="12" sm="12" md="12" lg="12" xl="12">
            <v-text-field
              v-model="cardNumber"
              class="text-input"
              placeholder="Credate card number"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </b-col>
          <b-row>
            <b-col>
              <v-text-field
                v-model="month"
                class="text-input"
                placeholder="Month"
                type="number"
                :rules="rules1"
                hide-details="auto"
              ></v-text-field>
            </b-col>
            <b-col>
              <v-text-field
                v-model="year"
                class="text-input"
                placeholder="Year"
                :rules="rules2"
                hide-details="auto"
                type="number"
              ></v-text-field>
            </b-col>
            <b-col>
              <v-text-field
                v-model="cvc"
                class="text-input"
                placeholder="CVC"
                :rules="rules3"
                hide-details="auto"
              ></v-text-field>
            </b-col>
          </b-row>
          <b-col cols="12" sm="12" md="12" lg="12" xl="12">
            <v-text-field
              v-model="address"
              class="text-input"
              placeholder="Billing Address"
              hide-details="auto"
            ></v-text-field>
          </b-col>
        </b-row>
        <b-row class="mx-2">
          <b-col>
            <b-row class="row justify-content-start">
              <b-col cols="10" sm="8" md="8" lg="4" xl="4">
                <b-button
                  @click="backButton"
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
          </b-col>
          <b-col>
            <b-row class="row justify-content-end">
              <b-col cols="12" sm="8" md="8" lg="4" xl="4">
                <b-button :disabled="!pay" @click="confarmForm" variant="light">
                  Pay Now
                  <img
                    style="width: 24px"
                    src="https://img.icons8.com/material/24/000000/chevron-right--v1.png"
                /></b-button>
              </b-col> </b-row
          ></b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import pdf from "vue-pdf";

var loadingTask = pdf.createLoadingTask(
  "https://cdn.mozilla.net/pdfjs/tracemonkey.pdf"
);
export default {
  components: {
    pdf,
  },
  props: ["item"],
  data: () => ({
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 16) || "Min 16 characters",
    ],
    rules1: [
      (value) => !!value || "Required.",
      (value) => (value < 13 && value.length < 3) || "Month not Valid",
    ],
    rules2: [
      (value) => !!value || "Required.",
      (value) => (value && value.length < 5) || "Year Not Valid",
    ],
    rules3: [
      (value) => !!value || "Required.",
      (value) => (value && value.length < 4) || "max 3 characters",
    ],
    cardNumber: "",
    setdelevery: "",
    month: "",
    year: "",
    cvc: "",
    address: "",
    src: loadingTask,
    numPages: undefined,
  }),

  mounted() {
    var src = pdf.createLoadingTask(this.item);

    src.promise.then((pdf) => {
      this.numPages = pdf.numPages;
    });
  },
  computed: {
    checkValue() {
      return this.$store.getters.checkValue;
    },
    pay() {
      return (
        this.cardNumber != "" &&
        this.month != "" &&
        this.year != "" &&
        this.address != ""
      );
    },
  },
  methods: {
    backButton() {
      this.$store.dispatch("backFunc2");
    },
    confarmForm() {
      this.$store.dispatch("checkFunc4");
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 1200px) {
  h4 {
    font-size: 28px;
    font-weight: 900;
    font-family: "Rubik", sans-serif;
    opacity: 0.5;
    line-height: 40px;
    margin: 0% 10% 0% 10%;
    text-align: center !important;
    color: #000000;
  }
  h5 {
    font-size: 14px;
    font-weight: 500;
    font-family: "Rubik", sans-serif;
    color: #000000;
    text-align: center;
    opacity: 0.7;
  }
  h6 {
    font-size: 16px;
    font-weight: 500;
    font-family: "Rubik", sans-serif;
    color: #000000;
    text-align: center;
    opacity: 0.7;
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
    margin: 0% 10% 0% 10%;
    text-align: center !important;
    color: #000000;
  }
  h5 {
    font-size: 16px;
    font-weight: 500;
    font-family: "Rubik", sans-serif;
    color: #000000;
    text-align: center;
    opacity: 0.7;
  }
  h6 {
    font-size: 18px;
    font-weight: 500;
    font-family: "Rubik", sans-serif;
    color: #000000;
    text-align: center;
    opacity: 0.7;
  }
  .text-input {
    font-weight: bold;
    margin-top: 10px;
  }
}
</style>