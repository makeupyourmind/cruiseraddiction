<template>
    <vs-prompt
        vs-title="Confirm password"
        vs-accept-text= "Delete"
        @vs-cancel="clearDelete"
        @vs-accept="deleteThis"
        @vs-close="clearDelete"
        :vs-active.sync="showConfirmDelete"
    >
        <vs-input
            v-validate="'required|min:6|max:10'"
            ref="password"
            type="password"
            data-vv-validate-on="blur"
            name="password"
            label-placeholder="Password"
            v-model="password"
            class="w-full mt-6" />
        <span class="text-danger text-sm">{{ errors.first('password') }}</span>
        <vs-input
            v-validate="'min:6|max:10|confirmed:password'"
            type="password"
            data-vv-validate-on="blur"
            data-vv-as="password"
            name="confirm_password"
            label-placeholder="Confirm Password"
            v-model="confirm_password"
            class="w-full mt-6" />
        <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>

    </vs-prompt>
</template>

<script>
    export default {
        name: "deleteConfirm",
        data:()=>({
            password: "",
            confirm_password:"",
            test: false
        }),
        computed:{
            showConfirmDelete:{
                set (val) {
                    this.test = val
                },
                get() {
                    return this.$store.getters.SHOWDELETE

                }
            }
        },
        methods:{
            deleteThis(){
                this.$store.dispatch("GET_DELETE_MODULE", false)

                // this.$validator.validateAll().then(result => {
                //     console.log(result)
                // })
            },
            clearDelete(){
                this.$store.dispatch("GET_DELETE_MODULE", false)
                this.password = "";
                this.confirm_password = ""
            },
        }
    }
</script>

<style scoped>

</style>
