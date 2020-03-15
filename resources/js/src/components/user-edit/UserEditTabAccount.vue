
<template>
  <div id="user-edit-tab-info">
    <div class="vx-row">
      <div class="vx-col md:w-1/2 w-full">

        <vs-input class="w-full mt-4" 
                  label="Username" 
                  v-model="userData.user.username" 
                  v-validate="'required|alpha_spaces'" 
                  name="username" />
        <span class="text-danger text-sm"  
              v-show="errors.has('userData.user.username')">
              {{ errors.first('userData.user.username') }}
        </span>

        <vs-input class="w-full mt-4" 
                  label="Name" 
                  v-model="userData.user.name" 
                  v-validate="'required|alpha_spaces'" 
                  name="name" />
        <span class="text-danger text-sm"  
              v-show="errors.has('userData.user.name')">
              {{ errors.first('userData.user.name') }}
        </span>

        <vs-input class="w-full mt-4" 
                  label="Email" 
                  v-model="userData.user.email" 
                  type="email" 
                  v-validate="'required|email'" 
                  name="email" />
        <span class="text-danger text-sm"  
            v-show="errors.has('userData.user.email')">
            {{ errors.first('userData.user.email') }}
        </span>

        <vs-input class="w-full mt-4" 
                  label="Country" 
                  v-model="userData.user.country" 
                  v-validate="'required|numeric'" 
                  name="post_code" />
        <span class="text-danger text-sm"  
              v-show="errors.has('userData.user.country')">
              {{ errors.first('userData.user.country') }}
        </span>

        <vs-input class="w-full mt-4" 
                  label="State" 
                  v-model="userData.user.state" 
                  v-validate="'alpha'" 
                  name="State" />
        <span class="text-danger text-sm"  
              v-show="errors.has('userData.user.state')">
              {{ errors.first('userData.user.state') }}
        </span>

        <vs-input class="w-full mt-4" 
                  label="City" 
                  v-model="userData.user.city" 
                  v-validate="'alpha'" 
                  name="city" />
        <span class="text-danger text-sm"  
              v-show="errors.has('userData.user.city')">
              {{ errors.first('userData.user.city') }}
        </span>

      </div>

      <div class="vx-col md:w-1/2 w-full">
        <vs-input class="w-full mt-4" 
                  label="Phone" 
                  v-model="userData.user.phone" 
                  v-validate="'numeric'" 
                  name="phone" />
        <span class="text-danger text-sm"  
              v-show="errors.has('userData.user.phone')">
              {{ errors.first('userData.user.phone') }}
        </span>

        <div class="mt-4">
          <label class="vs-input--label">Role</label>
          <select class="vs-inputx vs-input--input normal hasValue"  v-model="userData.user.role">
            <option v-for="(item) in (roleOptions)" 
                    :value="item.id" 
                    :selected="item.name === userData.user.role ? true : false">
                    {{item.name}}
            </option>
          </select>
          <span class="text-danger text-sm"  
                v-show="errors.has('userData.user.role')">
                {{ errors.first('userData.user.role') }}
          </span>
        </div>

        <div>
          <vs-input class="w-full mt-4" 
                    label="Address Line 1" 
                    v-model="userData.user.street_address" 
                    name="street_address" />
          <span class="text-danger text-sm"  
                v-show="errors.has('userData.user.street_address')">
                {{ errors.first('userData.user.street_address') }}
          </span>
          <vs-input class="w-full mt-4" 
                    label="Address Line 2" 
                    v-model="userData.user.street_address_two" />
        </div>
        <vs-input class="w-full mt-4" 
                  label="New password" 
                  type="password" 
                  v-model="userData.user.newPassword" 
                  name="New password" />
        <span class="text-danger text-sm"  
              v-show="errors.has('userData.user.newPassword')">
              {{ errors.first('userData.user.newPassword') }}
        </span>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button class="ml-auto mt-2" @click="update" >Update</vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import '@sass/vuesax/extraComponents/agGridStyleOverride.scss'
import vSelect from 'vue-select'
import {UserEditTabAccount} from "../../api/UserEditTabAccount";
import editTab from '../../modules/editTab'

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
      
      userData:editTab,
      data_local: this.data,
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
      this.userData.user.username = this.data_local.last_name;
      this.userData.user.name = this.data_local.first_name;  
      this.userData.user.email = this.data_local.email;
      this.userData.user.phone = JSON.parse(this.data_local.phone).phoneNumber;
      this.userData.user.phone = this.data_local.phone;
      this.userData.user.role = this.data_local.roles["0"].id; 
      this.userData.user.street_address = this.data_local.street_address;
      this.userData.user.street_address_two = this.data_local.street_address_two; 
      this.userData.user.country = this.data_local.country;
      this.userData.user.state = this.data_local.state;
      this.userData.user.city = this.data_local.city;
    },
    selectRoles(){
      UserEditTabAccount.selectRoles()
        .then((response)=> {
          this.roleOptions =  response.data;
      }) 
    },

    update() {
      var data = {
        last_name: this.userData.user.username,
        first_name: this.userData.user.name,
        email: this.userData.user.email,
        phone: this.userData.user.phone,
        role_id: String(this.userData.user.role),
        password: this.userData.user.newPassword,
        street_address: this.userData.user.street_address,
        street_address_two: this.userData.user.street_address_two,
        country: this.userData.user.country,
        state: this.userData.user.state,
        city: this.userData.user.city,
      }

      UserEditTabAccount.update(this.data_local.id, data);
    },

  },
}


</script>
