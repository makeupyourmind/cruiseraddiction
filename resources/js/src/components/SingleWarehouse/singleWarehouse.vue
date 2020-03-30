<template>
  <div>
    <vs-dropdown
      class="ml-auto md:block hidden cursor-pointer"
      style="margin-left:15px!important "
      vs-trigger-click
    >
      <vs-button radius icon="icon-edit" icon-pack="feather"></vs-button>
      <vs-dropdown-menu class="w-32" style="margin-left: 50px">
        <!-- <vs-dropdown-item>
                    <div class="flex items-center">
                        <span>Create bundle</span>
                    </div>
        </vs-dropdown-item>-->

        <vs-dropdown-item>
          <div class="flex items-center">
            <span>Create Single item</span>
          </div>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <div @click="deleteItem" class="flex items-center">
            <span>Delete item</span>
          </div>
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>
    <div v-if="show === true">
      <showModulWindow></showModulWindow>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import showModulWindow from "./showModulWindow";
export default {
  props: ["select"],
  computed: {
    show() {
      return this.$store.getters.SHOWWAREHOUSESINGLE;
    }
  },
  data: () => ({
    showTable: false
  }),
  components: {
    showModulWindow
  },
  methods: {
    ...mapActions(["DELETE_AVAILABLE_WAREHOUSE"]),
    deleteItem() {
      this.DELETE_AVAILABLE_WAREHOUSE(this.select());
    }
  }
};
</script>>