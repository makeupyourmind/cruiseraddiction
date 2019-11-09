/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
Vue.use(VueResource);
window.http = Vue.http;
Vue.http.options.root = 'https://back.cruiseraddiction.com/' //http://127.0.0.1:8000/';

// Vuesax Component Framework
import Vuesax from 'vuesax'

Vue.use(Vuesax);

// Theme Configurations
import '../themeConfig.js'

// Globally Registered Components
import './globalComponents.js';

// Vue Router
import router from './router';

// Vuex Store
import store from './store/store';

// Vuesax Admin Filters
import './filters/filters';


// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer';
Vue.use(VueHammer);

// form Validation
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

//Axios

import {request, response} from './api/interceptors';
Vue.http.interceptors.push(request);
Vue.http.interceptors.push(response);

// PrismJS
import 'prismjs'
// import 'prismjs/themes/prism-tomorrow.css'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
