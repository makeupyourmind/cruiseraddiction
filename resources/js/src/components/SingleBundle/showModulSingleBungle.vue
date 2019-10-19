<template>
    <vs-prompt
        vs-title="Create Single"
        :vs-accept-text="moduleStock.action != 'update'? 'Create' : 'Save'"
        @vs-cancel="clearFields"
        @vs-accept="create"
        @vs-close="clearFields"
        style="min-width: 60vw"
        :vs-active.sync="showBundleSingle">
        <!--showTable === true ? 'Create Bundle' : 'Create Single'-->
        <VuePerfectScrollbar class="scroll-area p-4" style="max-height: 75vh;"  :settings="settings">
            <div v-if="fillTable === false">
                <form @submit.prevent class="display: flex; flex-direction: column">
                    <vue-simple-suggest
                        v-model="moduleStock.brand_name"
                        placeholder="Brand name"
                        :list="simpleSuggestionList"
                        :style="!moduleStock.brand_name && 'border: 1px solid red'"
                        :filter-by-query="true">
                    </vue-simple-suggest>
                    <vs-input
                        name="partNum"
                        label-placeholder="Part Number"
                        v-model="moduleStock.part_number"
                        :style="!moduleStock.part_number && 'border: 1px solid red'"
                        class="w-full mb-6" />
                    <vs-input
                        name="description"
                        label-placeholder="Description"
                        :style="!moduleStock.part_number && 'border: 1px solid red'"
                        v-model="moduleStock.description_full"
                        class="w-full mb-6" />
                    <vs-input
                        name="descriptionFull"
                        label-placeholder="Description Full"
                        :style="!moduleStock.description_english && 'border: 1px solid red'"
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

                    <vs-table v-if="moduleStock.is_bundle && moduleStock.bundle_parts"
                              :data="moduleStock.bundle_parts"
                              class="mt-5 mb-5 custom-my">
                        <template slot="thead">
                            <vs-th>Brand Name</vs-th>
                            <vs-th>Description</vs-th>
                            <vs-th>Parts Number</vs-th>
                            <vs-th>Qty</vs-th>
                            <vs-th>Stock Qty</vs-th>
                        </template>

                        <template slot-scope="{data}">
                            <vs-tr :key="elem" v-for="(tr, elem) in data">
                                <vs-td :data="data[elem].brand_name">
                                    <p>{{data[elem].brand_name}}</p>
                                </vs-td>
                                <vs-td :data="data[elem].description_english">
                                    <p>{{data[elem].description_english}}</p>
                                </vs-td>
                                <vs-td :data="data[elem].part_number">
                                    <p>{{data[elem].part_number}}</p>
                                </vs-td>
                                <vs-td :data="data[elem].bundle_qty">
                                    <p :style="Number(data[elem].bundle_qty) > Number(data[elem].qty) && 'color: red'">
                                        {{data[elem].bundle_qty}}
                                    </p>
                                </vs-td>
                                <vs-td :data="data[elem].qty" align="center">
                                    <p>{{data[elem].qty}}</p>
                                </vs-td>
                            </vs-tr>
                        </template>
                    </vs-table>
                    <div class="w-full mb-6 mt-6" v-if="moduleStock.is_bundle">
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
                        :style="!moduleStock.min_stock && 'border: 1px solid red'"
                        v-model="moduleStock.min_stock"
                        class="w-full mb-6" />
                    <vs-input
                        name="current Stock"
                        label-placeholder="Current"
                        disabled="true"

                        :style="Number(moduleStock.min_stock) > Number(moduleStock.qty) && 'color: red'"
                        v-model="moduleStock.qty"
                        class="w-full mb-6" />
                    <!--<vs-input-->
                        <!--v-else-->
                        <!--name="current"-->
                        <!--label-placeholder="Current"-->
                        <!--v-model="moduleStock.current"-->
                        <!--class="w-full mb-6" />-->
                    <vs-input
                        name="listPrice"
                        label-placeholder="List Price"
                        :style="!moduleStock.price && 'border: 1px solid red'"
                        v-model="moduleStock.price"
                        class="w-full mb-6" />
                    <vs-input
                        name="minPrice"
                        :style="!moduleStock.min_price && 'border: 1px solid red'"
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
                <form-else :table_store="this.moduleStock.bundle_parts" @saveChanges="saveChanges"></form-else>
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
            this.moduleStock = JSON.parse(JSON.stringify(this.$store.getters.STORE_EDIT));

            this.moduleStock.bundle_parts = this.moduleStock.bundle_pivot ? this.moduleStock.bundle_pivot.map((item) => {
                const bundle_parts = item.bundle_parts[0];
                const bundle_part_data = bundle_parts.bundle_part_data;
                return {
                    bundle_qty: bundle_part_data ? bundle_part_data.qty : 0,
                    description_english: bundle_part_data ? bundle_part_data.description : '',
                    brand_name:  bundle_parts.brand_name,
                    part_number: bundle_parts.part_number,
                    qty:  bundle_parts.qty
                };
            }) : [];
            delete this.moduleStock.bundle_pivot;
            let arr = [];
            this.moduleStock.bundle_parts = this.moduleStock.bundle_parts.map(item => {
                arr.push(Math.floor(parseInt(item.qty) / parseInt(item.bundle_qty)));
                return item
            });
            arr = arr.filter(i => i > -1);
            this.moduleStock.qty = Math.min(...arr);
            this.moduleStock.tags = !this.moduleStock.tags ? [] : JSON.parse(this.moduleStock.tags)
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

                let arr = [];
                this.moduleStock.bundle_parts = val.map(item => {
                    arr.push(Math.floor(parseInt(item.qty) / parseInt(item.bundle_qty)));
                    return item
                });
                arr = arr.filter(i => i > -1);
                this.moduleStock.qty = Math.min(...arr);
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
                const module =  JSON.parse(JSON.stringify(this.moduleStock));
                this.$store.commit('isNoActive', true);
                module.part_number ? module.part_number_without_too_much =  module.part_number.replace(/[- )(]/g,'') :null;
                const current = this.$store.getters['stockCaModule/GET_STOCK_DATA'];
                const order = this.$store.getters['stockCaModule/GET_DATA_STOCK_ORDER'];

                if(this.moduleStock.is_bundle) {
                    module.bundle_parts = module.bundle_parts.map(item => {
                        item.stock_qty = item.qty;
                        item.qty = item.bundle_qty;
                        item.bundle_qty && delete item.bundle_qty;
                        return item;
                    });
                }

                if(this.moduleStock.action == 'update'){
                    if(!module.is_bundle) {
                        module && delete module.bundle_parts;
                        module && delete module.bundle_pivot;
                    }
                    module && delete module.brand;
                    module && delete module.action;
                    module && delete module.id;
                    module && delete module.unique_hash;
                    module && (module.tags = JSON.stringify(module.tags));

                    this.$store.dispatch("stockCaModule/UPDATE_DATA_STOCK", module)
                        .then(() => {
                            return this.$store.dispatch('stockCaModule/GET_DATA_STOCK_FROM_SERVER', {
                                page: current ? current.current_page : 1,
                                searchBrand:order.searchBrand,
                                searchNumber:order.searchNumber,
                                orderName: order.name,
                                orderBy: order.by,
                            });
                        })
                        .then(() => {
                            this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {module:false, showTable:false})
                            this.$store.commit('isNoActive', false)
                        })
                        .catch( () =>  this.$store.commit('isNoActive', false));

                } else {

                    module && (module.tags = JSON.stringify(module.tags));

                    this.$store.dispatch(`stockCaModule/${ !this.moduleStock.is_bundle ? 'CREATE_DATA_STOCK' : 'CREATE_DATA_STOCK_BUNDLE'}`, module)
                        .then(() => {
                            return this.$store.dispatch('stockCaModule/GET_DATA_STOCK_FROM_SERVER', {
                                page: current ? current.current_page : 1,
                                searchBrand:order.searchBrand,
                                searchNumber:order.searchNumber,
                                orderName: order.name,
                                orderBy: order.by,
                            });
                        })
                        .then(() => {
                            this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {module:false, showTable:false});
                            this.$store.commit('isNoActive', false)
                        })
                        .catch( () =>  this.$store.commit('isNoActive', false));
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
                max-width: 1000px!important;
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

    .custom-my .vs-table--content{
        overflow-y: scroll;
        max-height: 281px;
    }
</style>
