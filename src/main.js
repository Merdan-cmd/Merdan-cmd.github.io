import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/index";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";

Vue.config.productionTip = false;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC594sru8ohvFMb3sr4MTt09rbNn7daigQ",
  authDomain: "trymebitch-9ff94.firebaseapp.com",
  databaseURL: "https://trymebitch-9ff94.firebaseio.com",
  projectId: "trymebitch-9ff94",
  storageBucket: "trymebitch-9ff94.appspot.com",
  messagingSenderId: "845504492718",
  appId: "1:845504492718:web:85df76d09309dc7e65e93f",
  measurementId: "G-4QD6YSY41Y",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
