<template>
  <div>
    <div>
      <v-dialog v-model="dialog" max-width="800">
        <v-card color="rgb(255, 0, 0, 0.8)">
          <v-card-actions>
            <b-row class="row justify-content-end">
              <b-col cols="4" sm="4" md="3" lg="2" xl="2">
                <v-btn color="primary" text @click="dialog = false">
                  <img
                    src="https://img.icons8.com/material/24/ffffff/delete-sign--v1.png"
                  />
                </v-btn>
              </b-col>
            </b-row>
          </v-card-actions>

          <v-card-title class="text-h5" style="color: #ffffff">
            Error
          </v-card-title>

          <v-card-text>
            <p style="color: #ffffff" v-if="errorMsgfrom != ''">
              <span style="font-weight: bold">From Address: </span>
              {{ errorMsgfrom }}
            </p>
            <p style="color: #ffffff" v-if="errorMsgTo != ''">
              <span style="font-weight: bold">To Address: </span>
              {{ errorMsgTo }}
            </p>
            <p
              style="color: #ffffff"
              v-if="
                errorMsgLetter != '' && errorMsgfrom == '' && errorMsgTo == ''
              "
            >
              <span style="font-weight: bold">File: </span> {{ errorMsgLetter }}
            </p>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
    <b-container>
      <span v-if="checkValue == 0">
        <b-row class="main-div row justify-content-center">
          <b-col class="heading" cols="12" sm="12" md="8" lg="8" xl="8">
            <h3>Send a PDF by postal mail.</h3>
            <h4>
              Send a physical letter anywhere in the world from your computer in
              seconds.
            </h4>
            <h5>Just $1 + 50¢ / page!</h5>
          </b-col>
        </b-row>
        <b-row class="upload-div row justify-content-center">
          <b-col
            @dragover.prevent
            ref="onFilePicked"
            type="file"
            @drop.prevent="addFile"
            style="border: 2px dashed #dddddd !important; background: #effffb"
            cols="12"
            sm="12"
            md="8"
            lg="8"
            xl="8"
          >
            <b-card
              @drop="onFilePicked"
              no-margin
              style="border-style: solid dotted !important; width: 100%"
              class="card-upload"
            >
              <label class="level-upload">
                Upload a PDF
                <input
                  type="file"
                  style="display: none"
                  ref="fileInput"
                  accept="application/pdf,application/vnd.ms-excel"
                  @change="onFilePicked"
                />
              </label>
              <p class="p-item">...or simply drop the file here</p>
            </b-card>
          </b-col>
        </b-row>
      </span>
      <b-row v-if="checkValue == 1" class="row justify-content-center">
        <b-col cols="12" sm="12" md="8" lg="8" xl="8">
          <b-row>
            <b-col>
              <h5 style="color: #000000">From</h5>
              <v-text-field
                v-model="fromName"
                class="text-input"
                placeholder="Name"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="fromAddress1"
                class="text-input"
                placeholder="Address Line 1"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="fromAddress2"
                class="text-input"
                placeholder="Address Line 2"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="fromCity"
                class="text-input"
                placeholder="City"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="fromState"
                class="text-input"
                placeholder="State or Province"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="fromZip"
                class="text-input"
                placeholder="ZIP or Postcode"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="fromCountry"
                class="text-input"
                placeholder="Country"
                :rules="rules1"
                hide-details="auto"
              ></v-text-field>
            </b-col>
            <b-col>
              <h5 style="color: #000000">To</h5>
              <v-text-field
                class="text-input"
                v-model="toName"
                placeholder="Name"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="toAddress1"
                class="text-input"
                placeholder="Address Line 1"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="toAddress2"
                class="text-input"
                placeholder="Address Line 2"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="toCity"
                class="text-input"
                placeholder="City"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="toState"
                class="text-input"
                placeholder="State or Province"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="toZip"
                class="text-input"
                placeholder="ZIP or Postcode"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="toCountry"
                class="text-input"
                placeholder="Country as US for United State"
                :rules="rules1"
                hide-details="auto"
              ></v-text-field>
            </b-col>
            <b-col cols="12" sm="12" md="12" lg="12" xl="12">
              <b-row>
                <b-col>
                  <b-row class="row justify-content-start">
                    <b-col cols="10" sm="8" md="6" lg="4" xl="4">
                      <b-button
                        variant="light"
                        style="
                          width: 100%;
                          background: #dddddd;
                          color: #black;
                          font-weight: bold;
                        "
                        @click="backButton"
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
                    <b-col cols="10" sm="8" md="6" lg="4" xl="4">
                      <b-button
                        v-if="btnLoading == false"
                        @click="confarmForm"
                        :disabled="!addressCheck"
                        variant="light"
                      >
                        Next
                        <img
                          style="width: 24px"
                          src="https://img.icons8.com/material/24/000000/chevron-right--v1.png"
                      /></b-button>
                      <div
                        v-if="btnLoading == true"
                        class="spinner-grow text-success"
                        role="status"
                      ></div>
                    </b-col> </b-row
                ></b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-row>
      <file-progress v-if="checkValue == 2" />
      <payment-pdf :item="pdfUrl" v-if="checkValue == 3" />
      <payment-done :item="file" v-if="checkValue == 4" />
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import "vuetify/dist/vuetify.min.css";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
export default {
  data: () => ({
    rules: [(value) => !!value || "Required."],
    rules1: [
      (value) =>
        (value && value.length === 2) ||
        "*Enter 2 letter Country Code. For example : US for United States",
    ],

    checkError: false,
    errorMsgTo: "",
    pdfUrl: "",
    errorMsgLetter: "",
    errorMsgAddress: "",
    errorMsgfrom: "",
    file: "",
    files: [],
    fromID: "",
    checkCOmponent: 0,
    toId: "",
    fromId: "",
    fromName: "",
    fromAddress1: "",
    fromAddress2: "",
    fromCity: "",
    fromState: "",
    fromZip: "",
    fromCountry: "",
    toName: "",
    toAddress1: "",
    toAddress2: "",
    dialog: false,
    toCity: "",
    toState: "",
    toZip: "",
    toCountry: "",
    btnLoading: false,
  }),
  computed: {
    checkValue() {
      return this.$store.getters.checkValue;
    },
    addressCheck() {
      return (
        this.file != "" &&
        this.fromName != "" &&
        this.fromAddress1 != "" &&
        this.fromCity != "" &&
        this.fromState != "" &&
        this.fromZip != "" &&
        this.fromCountry != "" &&
        this.toName != "" &&
        this.toAddress1 != "" &&
        this.toCity != "" &&
        this.toState != "" &&
        this.toZip != "" &&
        this.toCountry != ""
      );
    },
  },

  methods: {
    backButton() {
      this.$store.dispatch("backFunc");
    },
    confarmForm() {
      this.addreeFunc();
    },
    addFile(e) {
      console.log(e.dataTransfer.files[0].name);
      this.$store.dispatch("checkFunc1");
      if (e.dataTransfer.files) {
        this.btnLoading = true;
        this.loadingUpload = true;
        if (e.dataTransfer.files[0]) {
          const file = e.dataTransfer.files[0];
          var storageRef = firebase.storage().ref("sendPdf" + "/" + "user");
          var uploadTask = storageRef.put(file);
          uploadTask.on(
            "state_changed",
            () => {},
            (error) => {
              alert(error);
            },
            () => {
              uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                this.file = downloadURL;
                this.btnLoading = false;
              });
            }
          );
        }

        e.dataTransfer.files = null;
        this.checkCOmponent = 1;
        this.$store.dispatch("checkFunc1");
      }
    },
    pdfupdateFunc() {
      this.btnLoading = true;
      console.log("to", this.toId, "from", this.fromID);
      var key = Math.random().toString(36).substring(7);
      var myHeaders = new Headers();
      myHeaders.append("Access-Control-Allow-Origin", "*");
      myHeaders.append("Idempotency-Key", key);
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      myHeaders.append(
        "Authorization",
        "Basic bGl2ZV9kZjBmNTAwZDM5NTdiMzczMjI4YThlNDI1NzNlZTYzOTY5MDo="
      );
      myHeaders.append("Access-Control-Allow-Origin", "*");
      myHeaders.append("Access-Control-Allow-Credentials", "true");

      var urlencoded = new URLSearchParams();
      urlencoded.append("to", this.toId);
      urlencoded.append("from", this.fromID);
      urlencoded.append("color", "true");
      urlencoded.append("file", this.file);
      urlencoded.append("address_placement", "insert_blank_page");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      fetch("https://api.lob.com/v1/letters", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.id == undefined) {
            this.errorMsgLetter = result.error.message;
            this.dialog = true;
            this.btnLoading = false;
          } else {
            this.pdfUrl = result.url;
            this.errorMsgfrom = "";
            this.btnLoading = false;
            if (this.toId != "" && this.fromID != "") {
              this.$store.dispatch("checkFunc2");
            }
          }
        })
        .catch((error) => (this.errorMsgAddress = error.message));
    },
    async addreeFunc() {
      var myHeaders = new Headers();
      var key = Math.random().toString(36).substring(7);
      myHeaders.append("Idempotency-Key", key);
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      myHeaders.append(
        "Authorization",
        "Basic bGl2ZV9kZjBmNTAwZDM5NTdiMzczMjI4YThlNDI1NzNlZTYzOTY5MDo="
      );
      var myHeaders2 = new Headers();
      var key2 = Math.random().toString(36).substring(7);
      myHeaders2.append("Idempotency-Key", key2);
      myHeaders2.append("Content-Type", "application/x-www-form-urlencoded");
      myHeaders2.append(
        "Authorization",
        "Basic bGl2ZV9kZjBmNTAwZDM5NTdiMzczMjI4YThlNDI1NzNlZTYzOTY5MDo="
      );

      let from = new URLSearchParams();
      from.append("name", this.fromName);
      from.append("address_line1", this.fromAddress1);
      from.append("address_line2", this.fromAddress2);
      from.append("address_city", this.fromCity);
      from.append("address_state", this.fromState);
      from.append("address_zip", this.fromZip);
      from.append("address_country", this.fromCountry);
      let to = new URLSearchParams();
      to.append("name", this.toName);
      to.append("address_line1", this.toAddress1);
      to.append("address_line2", this.toAddress2);
      to.append("address_city", this.toCity);
      to.append("address_state", this.toState);
      to.append("address_zip", this.toZip);
      to.append("address_country", this.toCountry);
      var requestFrom = {
        method: "POST",
        headers: myHeaders,
        body: from,
        redirect: "follow",
      };
      var requestTo = {
        method: "POST",
        headers: myHeaders2,
        body: to,
        redirect: "follow",
      };
      // from
      this.btnLoading = true;
      await fetch("https://api.lob.com/v1/addresses", requestFrom)
        .then((response) => response.json())
        .then((result) => {
          if (result.id == undefined) {
            this.errorMsgfrom = result.error.message;
            this.dialog = true;
            this.btnLoading = false;
          } else {
            this.fromID = result.id;
            this.errorMsgfrom = "";
            this.btnLoading = false;
          }
        })
        .then(
          //to
          () =>
            fetch("https://api.lob.com/v1/addresses", requestTo)
              .then((response) => response.json())
              //
              .then((result) => {
                if (result.id == undefined) {
                  this.errorMsgTo = result.error.message;
                  this.dialog = true;
                  this.btnLoading = false;
                } else {
                  this.toId = result.id;
                  this.errorMsgTo = "";
                  this.btnLoading = false;
                }
              })
              .then(() => this.pdfupdateFunc())
        );
    },
    onFilePicked(event) {
      //let key = Math.random().toString(36).substring(7);

      if (event.target.files) {
        this.btnLoading = true;
        console.log(event.target.result);

        this.loadingUpload = true;
        if (event.target.files[0]) {
          const file = event.target.files[0];
          var storageRef = firebase.storage().ref("sendPdf" + "/" + "user");
          var uploadTask = storageRef.put(file);
          uploadTask.on(
            "state_changed",
            () => {},
            (error) => {
              alert(error);
            },
            () => {
              uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                this.file = downloadURL;
                this.btnLoading = false;
              });
            }
          );
        }

        event.target.files = null;
        this.checkCOmponent = 1;
        this.$store.dispatch("checkFunc1");
      }
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 1200px) {
  .level-upload {
    text-align: center;
    background: #55ddbb;
    color: #ffffff;
    font-weight: bold;
    width: 34%;
    padding: 10px 20px 10px 20px;
    font-size: 16px;
    margin: 55px 33% 0% 33%;
  }
  .text-input {
    font-weight: bold;
    margin-top: 10px;
  }
  .card-upload {
    background: #effffb;
    height: 220px;
  }
  .upload-div {
    margin-top: 2%;
  }
  .main-div {
    margin-top: 5%;
  }
  .heading {
    text-align: center;
  }
  h3 {
    font-size: 28px;
    font-weight: 700;
    font-family: "Rubik", sans-serif;
    color: #000000;
  }
  h4 {
    font-size: 24px;
    font-weight: 900;
    font-family: "Rubik", sans-serif;
    opacity: 0.5;
    line-height: 40px;
    margin: 0% 10% 0% 10%;
    color: #000000;
  }
  h5 {
    font-size: 18px;
    font-weight: 700;
    font-family: "Rubik", sans-serif;
    color: #000000;
  }
  .p-item {
    font-size: 14px;
    font-weight: 700;
    font-family: "Rubik", sans-serif;
    color: #000000;
    text-align: center;
    opacity: 0.7;
  }
}

@media only screen and (min-width: 1201px) {
  .level-upload {
    text-align: center;
    background: #55ddbb;
    color: #ffffff;
    font-weight: bold;
    width: 24%;
    padding: 10px 20px 10px 20px;
    margin: 55px 38% 0% 38%;
  }
  .text-input {
    font-weight: bold;
    margin-top: 10px;
  }
  .card-upload {
    background: #effffb;
    height: 220px;
  }
  .upload-div {
    margin-top: 2%;
  }
  .main-div {
    margin-top: 5%;
  }
  .heading {
    text-align: center;
  }
  h3 {
    font-size: 34px;
    font-weight: 700;
    font-family: "Rubik", sans-serif;
    color: #000000;
  }
  h4 {
    font-size: 30px;
    font-weight: 900;
    font-family: "Rubik", sans-serif;
    opacity: 0.5;
    line-height: 40px;
    margin: 0% 10% 0% 10%;
    color: #000000;
  }
  h5 {
    font-size: 20px;
    font-weight: 700;
    font-family: "Rubik", sans-serif;
    color: #000000;
  }
  .p-item {
    font-size: 14px;
    font-weight: 700;
    font-family: "Rubik", sans-serif;
    color: #000000;
    text-align: center;
    opacity: 0.7;
  }
}
</style>
