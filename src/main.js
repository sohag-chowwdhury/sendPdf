import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import { store } from './store'
import firebase from 'firebase/app'
import 'firebase/firestore'
import moment from 'moment';


import FileProgressBar from './components/FileProgressBar.vue'
import PaymentPdf from './components/PaymentPdf.vue'
import PaymentDone from './components/PaymentDone.vue'
import Footer from './components/Footer.vue'





Vue.component('file-progress', FileProgressBar)
Vue.component('payment-pdf', PaymentPdf)
Vue.component('payment-done', PaymentDone)
Vue.component('app-footer', Footer)




import Vuetify from 'vuetify'
Vue.use(Vuetify);


Vue.use(Vuetify)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.prototype.moment = moment

new Vue({
  vuetify: new Vuetify(),
  router,
  moment,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyB613jVQ4CcAx2aBEc2NqrYz0NdwI72HP4",
      authDomain: "student-blog-80add.firebaseapp.com",
      databaseURL: "https://student-blog-80add.firebaseio.com",
      projectId: "student-blog-80add",
      storageBucket: "student-blog-80add.appspot.com",
      messagingSenderId: "16050745740",
      appId: "1:16050745740:web:b4dfbab9954a3eafe526a9",
      measurementId: "G-XVXWK2B266"
    })
    
  }
}).$mount('#app')
