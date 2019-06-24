<template>
    <vs-prompt
        :vs-title="showTable === true ? 'Create Bundle' : 'Create Single'"
        vs-accept-text= "Create"
        @vs-cancel="clearFields"
        @vs-accept="create"
        @vs-close="clearFields"
        :vs-active.sync="showBundleSingle">
        <VuePerfectScrollbar class="scroll-area p-4" style="max-height: 75vh;"  :settings="settings">
            <div v-if="fillTable === false">
                <form @submit.prevent class="display: flex; flex-direction: column">
                    <vue-simple-suggest
                        v-model="moduleStock.brand"
                        placeholder="Part Number"
                        :list="simpleSuggestionList"
                        :filter-by-query="true">
                    </vue-simple-suggest>
                    <vs-input
                        name="partNum"
                        label-placeholder="Part Number"
                        v-model="moduleStock.partNum"
                        class="w-full mb-6" />
                    <vs-input
                        name="description"
                        label-placeholder="Description"
                        v-model="moduleStock.description"
                        class="w-full mb-6" />
                    <vs-input
                        name="descriptionFull"
                        label-placeholder="Description Full"
                        v-model="moduleStock.descriptionFull"
                        class="w-full mb-6" />
                    <ul class="demo-alignment">
                        <li>
                            <vs-checkbox v-model="moduleStock.stores" vs-value="ebay">Ebay</vs-checkbox>
                        </li>
                        <li>
                            <vs-checkbox v-model="moduleStock.stores" vs-value="amazon">Amazon</vs-checkbox>
                        </li>
                        <li>
                            <vs-checkbox v-model="moduleStock.stores" vs-value="magento">Magento</vs-checkbox>
                        </li>
                        <li>
                            <vs-checkbox v-model="moduleStock.stores" vs-value="other">Other</vs-checkbox>
                        </li>
                    </ul>

                    <div class="w-full mb-6 mt-6" v-if="showTable === true">
                        <vs-button
                            color="success"
                            @click="fillTable = true"
                            icon="icon-plus"
                            icon-pack="feather"
                            type="relief">Edit bundle Item</vs-button>
                    </div>
                    <vs-input
                        name="minStock"
                        label-placeholder="Min Stock"
                        v-model="moduleStock.minStock"
                        class="w-full mb-6" />
                    <vs-input
                        name="current"
                        v-if="showTable === true"
                        label-placeholder="Current"
                        disabled="disabled"
                        v-model="moduleStock.current"
                        class="w-full mb-6" />
                    <vs-input
                        v-else
                        name="current"
                        label-placeholder="Current"
                        v-model="moduleStock.current"
                        class="w-full mb-6" />
                    <vs-input
                        name="listPrice"
                        label-placeholder="List Price"
                        v-model="moduleStock.listPrice"
                        class="w-full mb-6" />
                    <vs-input
                        name="minPrice"
                        label-placeholder="Min Price"
                        v-model="moduleStock.minPrice"
                        class="w-full mb-6" />
                    <vs-input
                        name="maxPrice"
                        label-placeholder="Max Price"
                        v-model="moduleStock.maxPrice"
                        class="w-full mb-6" />
                    <vs-input
                        name="location"
                        label-placeholder="Location"
                        v-model="moduleStock.location"
                        class="w-full mb-6" />
                    <vs-input
                        name="categories"
                        label-placeholder="Categories"
                        v-model="moduleStock.categories"
                        class="w-full mb-6"
                        style="width:100%!important"
                    />
                    <div class="w-full mb-6">
                        <div style="display: flex; justify-content: space-between; align-items: center">
                            <vs-input
                                name="chips"
                                label-placeholder="Find & add tags"
                                v-model="moduleStock.chip"
                                class="mt-0"
                            />
                            <vs-button style="box-sizing: content-box" color="primary" @click="addChip" type="filled">Add</vs-button>
                        </div>
                        <vs-chip
                            :key="chip"
                            @click="removeChip(chip)"
                            v-for="chip in moduleStock.chips"
                            color="primary"
                            closable
                            style="margin: 15px 5px">
                            {{ chip }}
                        </vs-chip>
                    </div>
                </form>
            </div>
            <div v-else>
                <vs-button
                    @click="fillTable = false"
                    type="line" color="dark"
                    class="mr-5"
                    style="float: left">Cancel</vs-button>
                <form-else :table_store="table_store" @saveChanges="saveChanges"></form-else>
            </div>
        </VuePerfectScrollbar>
        {{moduleStock}}
    </vs-prompt>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import VueSimpleSuggest from 'vue-simple-suggest'
    import 'vue-simple-suggest/dist/styles.css'
    import vSelect from 'vue-select'
    import formElse from "./formElse"
    import { mapGetters } from 'vuex';
    export default {
        name: "showModulSingleBungle",
        components:{
            VueSimpleSuggest,
            VuePerfectScrollbar,
            'v-select': vSelect,
            "form-else":formElse
        },
        data:() =>({
            fillTable: false,
            //scroll
            settings: {
                maxScrollbarLength: 60,
                wheelSpeed: 0.30,
            },
            test: false,
            table_store:[],
            moduleStock: null,
        }),
        created(){
            this.moduleStock = Object.assign({}, this.$store.getters.STORE_EDIT)
        },
        computed:{
            ...mapGetters({
                showTable: 'SHOWTABLE',
            }),
            showBundleSingle:{
                set (val) {
                    this.test = val
                },
                get() {
                    return this.$store.getters.SHOWBUNDLESINGLE
                }
            }
        },
        methods:{
            simpleSuggestionList() {
                return [
                    'TOYOTA',
                    'RENAULT',
                    'PEUGEUT'
                ]
            },
            saveChanges(val){
                this.table_store = val;
                console.log(this.table_store)
                this.fillTable = false
            },
            clearFields() {
                this.fillTable = false;
                this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {module:false, showTable:false});
            },
            addChip(){
                this.moduleStock.chips.push(this.moduleStock.chip);
                this.chip = ''
            },
            removeChip(item) {
                this.moduleStock.chips.splice(this.moduleStock.chips.indexOf(item), 1)
            },
            create() {
                this.clearFields();

                // return this.$validator.validateAll()
                //     .then(result => {
                //         if(result){
                //             console.log("send")
                //         }
                //     })
            },
        }
    }
</script>

<style lang="scss">
    @import "../../../../sass/vuesax/extraComponents/autocomplete";

    body{
        .vs-component{
            .vs-dialog{
                max-width: 650px!important;
            }
        }
    }
    .demo-alignment > *{
        margin-top: 0!important;
    }
    /*.my_table{*/
    /*    border: 1px solid;*/
    /*}*/
    /*.my_table_header{*/
    /*    display: flex;*/
    /*}*/

</style>
