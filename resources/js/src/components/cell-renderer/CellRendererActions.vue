<template>
    <div :style="{'direction': $vs.rtl ? 'rtl' : 'ltr'}">
      <feather-icon icon="Edit3Icon"
                    svgClasses="h-5 w-5 mr-4 hover:text-primary cursor-pointer"
                    @click="editRecord" />
      <feather-icon icon="Trash2Icon"
                    svgClasses="h-5 w-5 hover:text-danger cursor-pointer"
                    @click="confirmDeleteRecord" />
    </div>
</template>

<script>
    export default {
        name: 'CellRendererActions',
        methods: {
          editRecord() {
              // debugger
            this.$router.push("/user-edit/" + this.params.data.id);
          },
          confirmDeleteRecord() {
            this.$vs.dialog({
              type: 'confirm',
              color: 'danger',
              title: `Confirm Delete`,
              text: `You are about to delete "${this.params.data.first_name}"`,
              accept: this.deleteRecord,
              acceptText: "Delete"
            })
          },
          deleteRecord() {
            this.$store.dispatch("userManagement/removeRecord", this.params.data.id)
              .then(()   => {
                this.selectUserData();
                this.showDeleteSuccess()
              })
          },
          showDeleteSuccess() {
            this.$vs.notify({
              color: 'success',
              title: 'User Deleted',
              text: 'The selected user was successfully deleted'
            })
          }

        }
    }
</script>
