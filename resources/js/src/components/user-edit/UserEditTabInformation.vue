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
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/2">

        <!-- Col Header -->
        <div class="flex items-end">
          <feather-icon icon="UserIcon" class="mr-2" svgClasses="w-5 h-5" />
          <span class="leading-none font-medium">Personal Information</span>
        </div>

        <!-- Col Content -->
        <div>

          <!-- DOB -->
            <vs-input class="w-full mt-4" label="Country" v-model="country" v-validate="'required|numeric'" name="post_code" />
            <span class="text-danger text-sm"  v-show="errors.has('country')">{{ errors.first('country') }}</span>

            <vs-input class="w-full mt-4" label="City" v-model="state" v-validate="'required|alpha'" name="State" />
            <span class="text-danger text-sm"  v-show="errors.has('state')">{{ errors.first('state') }}</span>

            <vs-input class="w-full mt-4" label="City" v-model="city" v-validate="'required|alpha'" name="city" />
            <span class="text-danger text-sm"  v-show="errors.has('city')">{{ errors.first('city') }}</span>

        </div>
      </div>

      <!-- Address Col -->
      <div class="vx-col w-full md:w-1/2">

          <!-- Col Header -->
          <div class="flex items-end md:mt-0 mt-base">
            <feather-icon icon="MapPinIcon" class="mr-2" svgClasses="w-5 h-5" />
            <span class="leading-none font-medium">Address</span>
          </div>

          <!-- Col Content -->
          <div>
            <vs-input class="w-full mt-4" label="Address Line 1" v-model="street_address" v-validate="'required'" name="street_address" />
            <span class="text-danger text-sm"  v-show="errors.has('street_address')">{{ errors.first('street_address') }}</span>

            <vs-input class="w-full mt-4" label="Address Line 2" v-model="street_address_two" />

          </div>
      </div>
    </div>

    <!-- Save & Reset Button -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button class="ml-auto mt-2" @click="save_changes" :disabled="!validateForm">Save Changes</vs-button>
         <!--  <vs-button class="ml-4 mt-2" type="border" color="warning" @click="reset_data">Reset</vs-button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'

export default {
  components: {
    vSelect,
    flatPickr
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {

      street_address:'', 
      street_address_two:'', 
      country:'', 
      state:'', 
      city:'',

      data_local: JSON.parse(JSON.stringify(this.data)),

      langOptions: [
        { label: "English",  value: "english"  },
        { label: "Spanish",  value: "spanish"  },
        { label: "French",   value: "french"   },
        { label: "Russian",  value: "russian"  },
        { label: "German",   value: "german"   },
        { label: "Arabic",   value: "arabic"   },
        { label: "Sanskrit", value: "sanskrit" },
      ],
    }
  },
  mounted() {
    this.distributionValues();
  },
  computed: {
    validateForm() {
      return !this.errors.any()
    }
  },
  methods: {
    distributionValues() {
      this.street_address = this.data_local.street_address;
      this.street_address_two = this.data_local.street_address_two; 
      this.country = this.data_local.country;
      this.state = this.data_local.state;
      this.city = this.data_local.city;
    },
    save_changes() {
      if(!this.validateForm) return

      // Here will go your API call for updating data
      // You can get data in "this.data_local"
    },
    reset_data() {
      this.data_local = Object.assign({}, this.data)
    }
  },
}
</script>
