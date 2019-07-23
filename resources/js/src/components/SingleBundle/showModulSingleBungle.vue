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
                        v-model="moduleStock.brand_name"
                        placeholder="Brand name"
                        :list="simpleSuggestionList"
                        :filter-by-query="true">
                    </vue-simple-suggest>
                    <vs-input
                        name="partNum"
                        label-placeholder="Part Number"
                        v-model="moduleStock.part_number"
                        class="w-full mb-6" />
                    <vs-input
                        name="description"
                        label-placeholder="Description"
                        v-model="moduleStock.description_full"
                        class="w-full mb-6" />
                    <vs-input
                        name="descriptionFull"
                        label-placeholder="Description Full"
                        v-model="moduleStock.description_english"
                        class="w-full mb-6" />
                    <!--<ul class="demo-alignment">-->
                        <!--<li>-->
                            <!--<vs-checkbox v-model="moduleStock.stores" vs-value="ebay">Ebay</vs-checkbox>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<vs-checkbox v-model="moduleStock.stores" vs-value="amazon">Amazon</vs-checkbox>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<vs-checkbox v-model="moduleStock.stores" vs-value="magento">Magento</vs-checkbox>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<vs-checkbox v-model="moduleStock.stores" vs-value="other">Other</vs-checkbox>-->
                        <!--</li>-->
                    <!--</ul>-->

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
                        v-model="moduleStock.min_stock"
                        class="w-full mb-6" />
                    <!--<vs-input-->
                        <!--name="current"-->
                        <!--v-if="showTable === true"-->
                        <!--label-placeholder="Current"-->
                        <!--disabled="disabled"-->
                        <!--v-model="moduleStock.current"-->
                        <!--class="w-full mb-6" />-->
                    <!--<vs-input-->
                        <!--v-else-->
                        <!--name="current"-->
                        <!--label-placeholder="Current"-->
                        <!--v-model="moduleStock.current"-->
                        <!--class="w-full mb-6" />-->
                    <vs-input
                        name="listPrice"
                        label-placeholder="List Price"
                        v-model="moduleStock.price"
                        class="w-full mb-6" />
                    <vs-input
                        name="minPrice"
                        label-placeholder="Min Price"
                        v-model="moduleStock.min_price"
                        class="w-full mb-6" />
                    <vs-input
                        name="maxPrice"
                        label-placeholder="Max Price"
                        v-model="moduleStock.max_price"
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
                                v-model="tag"
                                class="mt-0"
                            />
                            <vs-button style="box-sizing: content-box" color="primary" @click="addChip" type="filled">Add</vs-button>
                        </div>
                        <vs-chip
                            :key="chip"
                            @click="removeChip(chip)"
                            v-for="chip in moduleStock.tags"
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
            tag: '',
            test: false,
            table_store:[],
            moduleStock: null,
        }),
        created(){
            this.moduleStock = Object.assign({}, this.$store.getters.STORE_EDIT);
            this.moduleStock.tags = JSON.parse(this.moduleStock.tags)
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
                this.fillTable = false;
            },
            clearFields() {
                this.fillTable = false;
                this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {module:false, showTable:false});
            },
            addChip(){
                !this.moduleStock.tags && (this.moduleStock.tags = []);
                this.moduleStock.tags.push(this.tag);
                this.tag = '';

            },
            removeChip(item) {
                this.moduleStock.tags.splice(this.moduleStock.tags.indexOf(item), 1)
            },
            create(){
                const module =  JSON.parse(JSON.stringify(this.moduleStock))
                if(this.moduleStock.action == 'update'){

                    module && delete module.brand;
                    module && delete module.action;
                    module && delete module.id;
                    module && delete module.unique_hash;

                    this.$store.dispatch("stockCaModule/UPDATE_DATA_STOCK", module)
                        .then(() => {
                            const current = this.$store.getters['stockCaModule/GET_STOCK_DATA'];
                            return this.$store.dispatch(
                                'stockCaModule/GET_DATA_STOCK_FROM_SERVER',
                                current ? current.current_page : 1
                            )
                        })
                        .then(() => this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {module:false, showTable:false}));
                } else {
                    module && (module.tags = JSON.stringify(module.tags));
                    this.$store.dispatch("stockCaModule/CREATE_DATA_STOCK", module)
                        .then(() => {
                            const current = this.$store.getters['stockCaModule/GET_STOCK_DATA'];
                            return this.$store.dispatch(
                                'stockCaModule/GET_DATA_STOCK_FROM_SERVER',
                                current ? current.current_page : 1
                            )
                        })
                        .then(() => this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {module:false, showTable:false}));
                }
            }
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
