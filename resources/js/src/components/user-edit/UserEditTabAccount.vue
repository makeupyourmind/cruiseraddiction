<!-- =========================================================================================
  File Name: UserEditTabInformation.vue
  Description: User Edit Information Tab content
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="user-edit-tab-info">


    <!-- Content Row -->
    <div class="vx-row">
      <div class="vx-col md:w-1/2 w-full">
        <vs-input class="w-full mt-4" label="Username" v-model="username" v-validate="'required|alpha_spaces'" name="username" />
        <span class="text-danger text-sm"  v-show="errors.has('username')">{{ errors.first('username') }}</span>

        <vs-input class="w-full mt-4" label="Name" v-model="name" v-validate="'required|alpha_spaces'" name="name" />
        <span class="text-danger text-sm"  v-show="errors.has('name')">{{ errors.first('name') }}</span>

        <vs-input class="w-full mt-4" label="Email" v-model="email" type="email" v-validate="'required|email'" name="email" />
        <span class="text-danger text-sm"  v-show="errors.has('email')">{{ errors.first('email') }}</span>

        <vs-input class="w-full mt-4" label="Country" v-model="country" v-validate="'required|numeric'" name="post_code" />
        <span class="text-danger text-sm"  v-show="errors.has('country')">{{ errors.first('country') }}</span>

        <vs-input class="w-full mt-4" label="State" v-model="state" v-validate="'alpha'" name="State" />
        <span class="text-danger text-sm"  v-show="errors.has('state')">{{ errors.first('state') }}</span>

        <vs-input class="w-full mt-4" label="City" v-model="city" v-validate="'alpha'" name="city" />
        <span class="text-danger text-sm"  v-show="errors.has('city')">{{ errors.first('city') }}</span>


      </div>

      <div class="vx-col md:w-1/2 w-full">

        <vs-input class="w-full mt-4" label="Phone" v-model="phone" v-validate="'numeric'" name="phone" />
        <span class="text-danger text-sm"  v-show="errors.has('phone')">{{ errors.first('phone') }}</span>

        <div class="mt-4">
          <label class="vs-input--label">Role</label>{{roleOptions.name}}

          <select class="vs-inputx vs-input--input normal hasValue"  v-model="role">
             <option v-for="(item) in (roleOptions)" 
             v-bind:key="item.id"  
             :value="item.id" 
             :selected="item.name == role ? true : false">{{item.name}}</option>
          </select>

          <span class="text-danger text-sm"  v-show="errors.has('role')">{{ errors.first('role') }}</span>
        </div>

          <!-- Col Content -->
         <div>
          <vs-input class="w-full mt-4" label="Address Line 1" v-model="street_address" v-validate="" name="street_address" />
          <span class="text-danger text-sm"  v-show="errors.has('street_address')">{{ errors.first('street_address') }}</span>
          <vs-input class="w-full mt-4" label="Address Line 2" v-model="street_address_two" />
        </div>

        
        <vs-input class="w-full mt-4" label="New password" type="password" v-model="newPassword"  name="New password" />
        <span class="text-danger text-sm"  v-show="errors.has('newPassword')">{{ errors.first('newPassword') }}</span>

      </div>
    </div>

    <!-- Permissions -->
<!--  -->

    <!-- Save & Reset Button -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button class="ml-auto mt-2" @click="update" >Update</vs-button>
          <!-- <vs-button class="ml-4 mt-2" type="border" color="warning" @click="reset_data">Reset</vs-button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@sass/vuesax/extraComponents/agGridStyleOverride.scss'

import vSelect from 'vue-select'
import {baseURL} from ".././../main"
import axios from 'axios';

export default {
  components: {
    vSelect
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      baseURL: http.options.root,

      username:'', 
      name:'', 
      email:'', 
      phone:'',
      role:'',
      newPassword:'',
      street_address:'', 
      street_address_two:'', 
      country:'', 
      state:'', 
      city:'',


      data_local: JSON.parse(JSON.stringify(this.data)),

      roleOptions: [],
    }
  },
  mounted() {
    this.selectRoles();
    this.distributionValues();
  },
  computed: {

    validateForm() {
      return !this.errors.any()
    }
    
  },
  methods: {

    distributionValues() {
      this.username = this.data_local.last_name;
      this.name = this.data_local.first_name; 
      this.email = this.data_local.email;
      this.phone = JSON.parse(this.data_local.phone).phoneNumber;
      this.role = this.data_local.roles["0"].name; 
      this.street_address = this.data_local.street_address;
      this.street_address_two = this.data_local.street_address_two; 
      this.country = this.data_local.country;
      this.state = this.data_local.state;
      this.city = this.data_local.city;
    },
    selectRoles(){
      var token = localStorage.getItem('token');

      axios({
        method: 'get',
        url: `${this.baseURL}api/superadmin/roles`,
        headers: { 'Authorization': 'Bearer ' + token } 
      })
      .then(response => { 
        this.roleOptions =  response.data;
      });
    },

    update() {
      var token = localStorage.getItem('token');

      axios.put(`${this.baseURL}api/superadmin/${this.data_local.id}`,  
        { 
          last_name: this.username,
          first_name: this.name,
          email: this.email,
          phone: this.phone,
          role_id: String(this.role),
          password: this.newPassword,
          street_address: this.street_address,
          street_address_two: this.street_address_two,
          country: this.country,
          state: this.state,
          city: this.city,
        }, {
        headers: { Authorization: "Bearer " + token }
      })

   

    },

  },
}
</script>
