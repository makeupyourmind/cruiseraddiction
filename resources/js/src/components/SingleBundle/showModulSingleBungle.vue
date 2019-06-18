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
                        v-model="brand"
                        placeholder="Part Number"
                        :list="simpleSuggestionList"
                        :filter-by-query="true">
                    </vue-simple-suggest>
                    <vs-input
                        name="partNum"
                        label-placeholder="Part Number"
                        v-model="partNum"
                        class="w-full mb-6" />
                    <vs-input
                        name="description"
                        label-placeholder="Description"
                        v-model="description"
                        class="w-full mb-6" />
                    <vs-input
                        name="descriptionFull"
                        label-placeholder="Description Full"
                        v-model="descriptionFull"
                        class="w-full mb-6" />
                    <ul class="demo-alignment">
                        <li>
                            <vs-checkbox v-model="checkBox1" vs-value="ebay">Ebay</vs-checkbox>
                        </li>
                        <li>
                            <vs-checkbox v-model="checkBox1" vs-value="amazon">Amazon</vs-checkbox>
                        </li>
                        <li>
                            <vs-checkbox v-model="checkBox1" vs-value="magento">Magento</vs-checkbox>
                        </li>
                        <li>
                            <vs-checkbox v-model="checkBox1" vs-value="other">Other</vs-checkbox>
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
                        v-model="minStock"
                        class="w-full mb-6" />
                    <vs-input
                        name="current"
                        v-if="showTable === true"
                        label-placeholder="Current"
                        disabled="disabled"
                        v-model="current"
                        class="w-full mb-6" />
                    <vs-input
                        v-else
                        name="current"
                        label-placeholder="Current"
                        v-model="current"
                        class="w-full mb-6" />
                    <vs-input
                        name="minPrice"
                        label-placeholder="Min Price"
                        v-model="minPrice"
                        class="w-full mb-6" />
                    <vs-input
                        name="location"
                        label-placeholder="Location"
                        v-model="location"
                        class="w-full mb-6" />
                    <vs-input
                        name="categories"
                        label-placeholder="Categories"
                        v-model="categories"
                        class="w-full mb-6"
                        style="width:100%!important"
                    />
                    <div class="w-full mb-6">
                        <div style="display: flex; justify-content: space-between; align-items: center">
                            <vs-input
                                name="chips"
                                label-placeholder="Find & add tags"
                                v-model="chip"
                                class="mt-0"
                            />
                            <vs-button style="box-sizing: content-box" color="primary" @click="addChip" type="filled">Add</vs-button>
                        </div>
                        <vs-chip
                            :key="chip"
                            @click="removeChip(chip)"
                            v-for="chip in chips"
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

            brand:"",
            partNum:"",
            description:"",
            descriptionFull:"",
            minStock:"",
            current:"",
            minPrice:"",
            location:"",
            categories:"",
            chips: [],
            chip: "",
            checkBox1: [],
            fillTable: false,
            //scroll
            settings: {
                maxScrollbarLength: 60,
                wheelSpeed: 0.30,
            },
            test: false,
            table_store:[]

        }),
        computed:{
            ...mapGetters({
                showTable: 'SHOWTABLE',
                edit_store: 'STORE_EDIT'
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
                this.fillTable = false
            },
            clearFields() {
                this.table_store.splice(0, this.table_store.length);
                this.checkBox1.splice(0, this.checkBox1.length);
                this.fillTable = false;
                this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", false);
                this.partNum = "";
                this.description = "";
                this.descriptionFull = "";
                this.minStock = "";
                this.current = "";
                this.minPrice = "";
                this.location = "";
                this.categories = "";
            },
            addChip(){
                this.chips.push(this.chip);
                this.chip = ''
            },
            removeChip(item) {
                this.chips.splice(this.chips.indexOf(item), 1)
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
