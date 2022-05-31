<template>
  <div>
    <b-row>
      <b-col>
        <b-card style="width: 100%; height: 230px; background: #eeeeee">
          <b-row class="row justify-content-center">
            <b-col cols="11" sm="11" md="10" lg="9" xl="9">
              <b-progress
                style="margin-top: 100px"
                :value="value"
                :max="max"
                show-value
                class="mb-3"
              ></b-progress>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      max: 100,
    };
  },
  created() {
    setInterval(() => this.valueFunc(), 33.3333333333);
  },

  methods: {
    valueFunc() {
      if (this.value < 101) {
        this.value += 1;
        if (this.value == 101) {
          this.$store.dispatch("checkFunc3");
        }
      }
    },
  },
};
</script>