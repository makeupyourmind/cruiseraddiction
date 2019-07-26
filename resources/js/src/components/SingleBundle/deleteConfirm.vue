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
            async deleteThis(){

                await this.$store.dispatch("stockCaModule/DELETE_DATA_STOCK", {
                    array: this.$store.getters["stockCaModule/GET_STOCK_DATA_DELETE"],
                    password: this.password
                });
                const order = this.$store.getters['stockCaModule/GET_DATA_STOCK_ORDER'];
                const current = this.$store.getters['stockCaModule/GET_STOCK_DATA'];

                await this.$store.dispatch('stockCaModule/GET_DATA_STOCK_FROM_SERVER', {
                    page: current ? current.current_page : 1,
                    searchBrand:order.searchBrand,
                    searchNumber:order.searchNumber,
                    orderName: order.name,
                    orderBy: order.by,
                });

                this.$store.dispatch("GET_DELETE_MODULE", false)
            },
            clearDelete(){
                this.$store.dispatch("GET_DELETE_MODULE", false);
                this.password = "";
                this.confirm_password = ""
            },
        }
    }
</script>

<style scoped>
    .l{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow-x: hidden;
    }
</style>
