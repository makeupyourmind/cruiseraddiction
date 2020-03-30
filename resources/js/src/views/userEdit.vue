<template>
  <div id="page-user-edit">
<!--    <vs-alert color="danger"-->
<!--              ref="alert"-->
<!--              v-if="user_not_found"-->
<!--              title="User Not Found">-->
<!--      <span> </span>-->
<!--      <span>-->
<!--        <span>Check </span>-->
<!--        <router-link :to="{name:'page-user-list'}"-->
<!--                      class="text-inherit underline">-->
<!--                       All Users-->
<!--        </router-link>-->
<!--      </span>-->
<!--    </vs-alert>-->
    <vx-card v-if="user_data">
      <div slot="no-body" class="tabs-container px-6 pt-6">
        <vs-tabs v-model="activeTab" class="tab-action-btn-fill-conatiner">
          <vs-tab label="Account"
                  icon-pack="feather"
                  icon="icon-user">
            <div class="tab-text">
              <user-edit-tab-account class="mt-4" :data="user_data" />
            </div>
          </vs-tab>
        </vs-tabs>
      </div>
    </vx-card>
    <div v-if="user_not_found">
      User record with id: {{ $route.params.userId }} not found.
    </div>
  </div>
</template>

<script>
import UserEditTabAccount from "../components/user-edit/UserEditTabAccount.vue"
import '@sass/vuesax/extraComponents/agGridStyleOverride.scss'
// Store Module
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'


export default {
  components: {
    UserEditTabAccount,
  },
  data() {
    return {
      user_data: null,
      ok: false,
      user_not_found: false,
      activeTab: 0,
    }
  },
  watch: {
    async activeTab() {
      this.fetch_user_data(this.$route.params.userId)
    }
  },
  methods: {
    async fetch_user_data(userId) {
      this.$store.dispatch("userManagement/fetchUser", userId)
        .then(res => {
          this.user_data = res.data
      }).catch(() => this.user_not_found = true)
    }

  },
  mounted() {
    this.fetch_user_data(this.$route.params.userId)
    // this.ok = true;
  }
}

</script>
