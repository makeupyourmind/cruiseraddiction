<template>
  <vs-prompt @cancel="val=''" @accept="acceptAlert" @close="close" :active.sync="activePrompt">
    <div class="con-exemple-prompt">
      Enter your first and last name to
      <b>continue</b>.
      <vs-input placeholder="Name" v-model="valMultipe.value1" />
      <vs-input placeholder="Last Name" v-model="valMultipe.value2" />
    </div>
  </vs-prompt>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import "vue-simple-suggest/dist/styles.css";
export default {
  data: () => ({
    activePrompt: false,
    val: "",
    valMultipe: {
      value1: "",
      value2: ""
    },
    computed: {
      validName() {
        // return (
        //   this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0
        // );
        return "hello";
      }
    },

    fillTable: false,
    settings: {
      maxScrollbarLength: 60,
      wheelSpeed: 0.3
    },
    tag: "",
    test: false,
    table_store: [],
    moduleStock: null,
    timeout: null
  }),
  showWarehouseSingle: {
    set(val) {
      this.test = val;
    },
    get() {
      return this.$store.getters.SHOWWAREHOUSESINGLE;
    }
  },
  methods: {
    acceptAlert(color) {
      this.$vs.notify({
        color: "success",
        title: "Accept Selected",
        text: "Lorem ipsum dolor sit amet, consectetur"
      });
    },
    close() {
      this.$vs.notify({
        color: "danger",
        title: "Closed",
        text: "You close a dialog!"
      });
    }
  }
};
</script>

<style lang="scss">
@import "../../../../sass/vuesax/extraComponents/autocomplete";

body {
  .vs-component {
    .vs-dialog {
      max-width: 1000px !important;
    }
  }
}
.demo-alignment > * {
  margin-top: 0 !important;
}
/*.my_table{*/
/*    border: 1px solid;*/
/*}*/
/*.my_table_header{*/
/*    display: flex;*/
/*}*/

.custom-my .vs-table--content {
  overflow-y: scroll;
  max-height: 281px;
}
</style>
