import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAHjKfKpdu3r_BwH4zqIqWISjlKO08t1rw",
//   authDomain: "wedding-17518.firebaseapp.com",
//   databaseURL: "https://wedding-17518-default-rtdb.firebaseio.com",
//   projectId: "wedding-17518",
//   storageBucket: "wedding-17518.appspot.com",
//   messagingSenderId: "721409157120",
//   appId: "1:721409157120:web:a4f4a53ee8639db9d190e5"
// };

// // Initialize Firebase


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
