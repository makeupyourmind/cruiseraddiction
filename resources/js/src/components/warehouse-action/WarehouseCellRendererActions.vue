<template>
    <div :style="{'direction': $vs.rtl ? 'rtl' : 'ltr'}">
      <feather-icon icon="Edit3Icon"
                    svgClasses="h-5 w-5 mr-4 hover:text-primary cursor-pointer"
                    @click="editRecord" />
      <feather-icon icon="Trash2Icon"
                    svgClasses="h-5 w-5 hover:text-danger cursor-pointer"
                    @click="confirmDeleteRecord" />
        <vs-prompt

                color="danger"
                @cancel="valueWarehouse={}"
                @vs-accept="acceptAlert"
                @close="modal = false"
                :vs-is-valid="validName"
                :vs-active.sync="modal">
            <div class="con-exemple-prompt" style="width: 200px;">
                <vs-checkbox v-model="valueWarehouse.isAvailable">Available</vs-checkbox><br>
                <vs-input style="width: 100%" placeholder="warehouse" v-model="valueWarehouse.warehouse"/><br>
                <div v-if="!validName" color="danger"
                     style="color: #f54758;box-shadow: 0 0 25px 0 rgba(233,76,94,0.15);background: rgba(233,76,94,0.15); padding: 10px; width: 100%"
                     icon="new_releases" >
                    Fields can not be empty please enter the data
                </div>
            </div>
        </vs-prompt>
    </div>
</template>

<script>
    import {AvailableWarehouses} from "../../api/available_warehouses";

    export default {
        name: 'WarehouseCellRendererActions',
        data(){
            return {
                modal:false,
                valueWarehouse:{}
            }
        },
        created(){
            this.valueWarehouse = {...this.params.data}
        },
        computed:{
            validName(){
                return !!(this.valueWarehouse && this.valueWarehouse.warehouse)
            }
        },
        methods: {
          editRecord() {
              this.modal = true;
              this.valueWarehouse = {...this.params.data}
          },
            acceptAlert(){
                this.$store.commit('isNoActive', true);
                AvailableWarehouses.updateWarehouse(this.valueWarehouse)
                    .then(()   => this.$store.dispatch("GET_ALL_AVAILABLE_WAREHOUSES"))
                    .then(() => {
                        this.$vs.notify({
                            color: 'success',
                            title: 'successfully warehouse updated',
                            text: 'The warehouse user was successfully updated'
                        })
                        this.modal = false;
                        this.valueWarehouse = {}
                        this.$store.commit('isNoActive', false);
                    })
                    .catch(() => {
                        this.$vs.notify({
                            color: 'error',
                            title: 'Error warehouse update',
                            text: 'The warehouse user was wrong update'
                        })
                        this.$store.commit('isNoActive', false);
                    })

            },
          confirmDeleteRecord() {
            this.$vs.dialog({
              type: 'confirm',
              color: 'danger',
              title: `Confirm Delete`,
              text: `You are about to delete "${this.params.data.warehouse}"`,
              accept: this.deleteRecord,
              acceptText: "Delete"
            })
          },

          deleteRecord() {
              this.$store.commit('isNoActive', true);
              AvailableWarehouses.deleteWarehouse(this.params.data.id)
                  .then(()   => this.$store.dispatch("GET_ALL_AVAILABLE_WAREHOUSES"))
                  .then(() => {
                  this.$store.commit('isNoActive', false);
                this.showDeleteSuccess()
              })
              .catch(() => {
                  this.$vs.notify({
                      color: 'error',
                      title: 'Error warehouse Deleted',
                      text: 'The warehouse user was wrong deleted'
                  })
                  this.$store.commit('isNoActive', false);
              })
          },
          showDeleteSuccess() {
            this.$vs.notify({
              color: 'success',
              title: 'warehouse Deleted',
              text: 'The selected warehouse was successfully deleted'
            })
          }

        }
    }
</script>
<style lang="scss">
    .vs-dialog{
        width: 300px!important;
    }
    .con-exemple-prompt{
        width: 100%!important;
        padding:10px;
        padding-bottom: 0px;
        .vs-input{
            width: 100%;
        }
    }
</style>
