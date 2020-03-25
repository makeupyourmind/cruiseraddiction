
<template>
  <div id="user-edit-tab-info">
    <div class="vx-row">
      <div class="vx-col md:w-1/2 w-full">

        <vs-input class="w-full mt-4"
                  label="Username"
                  v-model="userData.username"
                  v-validate="'required|alpha_spaces'"
                  name="username" />
        <span class="text-danger text-sm"
              v-show="errors.has('userData.username')">
              {{ errors.first('userData.username') }}
        </span>

        <vs-input class="w-full mt-4"
                  label="Name"
                  v-model="userData.name"
                  v-validate="'required|alpha_spaces'"
                  name="name" />
        <span class="text-danger text-sm"
              v-show="errors.has('userData.name')">
              {{ errors.first('userData.name') }}
        </span>

        <vs-input class="w-full mt-4"
                  label="Email"
                  v-model="userData.email"
                  type="email"
                  v-validate="'required|email'"
                  name="email" />
        <span class="text-danger text-sm"
            v-show="errors.has('userData.email')">
            {{ errors.first('userData.email') }}
        </span>

        <vs-input class="w-full mt-4"
                  label="Country"
                  v-model="userData.country"
                  v-validate="'required|numeric'"
                  name="post_code" />
        <span class="text-danger text-sm"
              v-show="errors.has('userData.country')">
              {{ errors.first('userData.country') }}
        </span>

        <vs-input class="w-full mt-4"
                  label="State"
                  v-model="userData.state"
                  v-validate="'alpha'"
                  name="State" />
        <span class="text-danger text-sm"
              v-show="errors.has('userData.state')">
              {{ errors.first('userData.state') }}
        </span>

        <vs-input class="w-full mt-4"
                  label="City"
                  v-model="userData.city"
                  v-validate="'alpha'"
                  name="city" />
        <span class="text-danger text-sm"
              v-show="errors.has('userData.city')">
              {{ errors.first('userData.city') }}
        </span>

      </div>

      <div class="vx-col md:w-1/2 w-full">
        <vs-input class="w-full mt-4"
                  label="Phone"
                  v-model="userData.phone"
                  v-validate="'numeric'"
                  name="phone" />
        <span class="text-danger text-sm"
              v-show="errors.has('userData.phone')">
              {{ errors.first('userData.phone') }}
        </span>

        <div class="mt-4">
          <label class="vs-input--label">Role</label>
          <select class="vs-inputx vs-input--input normal hasValue"  v-model="userData.role">
            <option v-for="(item) in (roleOptions)"
                    :value="item.id">
                    {{item.name}}
            </option>
          </select>
          <span class="text-danger text-sm"
                v-show="errors.has('userData.role')">
                {{ errors.first('userData.role') }}
          </span>
        </div>

        <div>
          <vs-input class="w-full mt-4"
                    label="Address Line 1"
                    v-model="userData.street_address"
                    name="street_address" />
          <span class="text-danger text-sm"
                v-show="errors.has('userData.street_address')">
                {{ errors.first('userData.street_address') }}
          </span>
          <vs-input class="w-full mt-4"
                    label="Address Line 2"
                    v-model="userData.street_address_two" />
        </div>
        <vs-input class="w-full mt-4"
                  label="New password"
                  type="password"
                  v-model="userData.newPassword"
                  name="New password" />
        <span class="text-danger text-sm"
              v-show="errors.has('userData.newPassword')">
              {{ errors.first('userData.newPassword') }}
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
import {editTab} from '../../helpers/EditTab'

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
      userData: new editTab(),
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
      this.userData.username = this.data_local.last_name;
      this.userData.name = this.data_local.first_name;
      this.userData.email = this.data_local.email;
      this.userData.phone = JSON.parse(this.data_local.phone).formattedNumber;
      this.userData.role = this.data_local.roles["0"].id;
      this.userData.street_address = this.data_local.street_address;
      this.userData.street_address_two = this.data_local.street_address_two;
      this.userData.country = this.data_local.country;
      this.userData.state = this.data_local.state;
      this.userData.city = this.data_local.city;
    },
    async selectRoles(){
       UserEditTabAccount.selectRoles()
        .then((response)=> {
          // debugger
          this.roleOptions =  response.data;
      })
    },

     async update() {
      var data = {
        last_name: this.userData.username,
        first_name: this.userData.name,
        email: this.userData.email,
        phone: this.userData.phone,
        role_id: String(this.userData.role),
        password: this.userData.newPassword,
        street_address: this.userData.street_address,
        street_address_two: this.userData.street_address_two,
        country: this.userData.country,
        state: this.userData.state,
        city: this.userData.city,
      }
        UserEditTabAccount.update(this.data_local.id, data);

    },

  },
}


</script>
