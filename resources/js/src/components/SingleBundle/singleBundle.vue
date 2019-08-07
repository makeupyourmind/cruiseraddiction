<template>
    <div>
        <vs-dropdown class="ml-auto md:block hidden cursor-pointer" style="margin-left:15px!important "vs-trigger-click>
            <vs-button radius icon="icon-edit" icon-pack="feather"></vs-button>
            <vs-dropdown-menu class="w-32">
                <vs-dropdown-item>
                    <div @click="createSingle(true)" class="flex items-center">
                        <span>Create bundle</span>
                    </div>
<!--                <singleBungleForm :activePrompt="activePrompt"></singleBungleForm>-->
                </vs-dropdown-item>

                <vs-dropdown-item>
                    <div @click="createSingle(false)" class="flex items-center">
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

        <deleteConfirm></deleteConfirm>
        <div v-if="show === true">
            <showModulSingleBungle></showModulSingleBungle>
        </div>
    </div>
</template>

<script>

    import deleteConfirm from './deleteConfirm'
    import showModulSingleBungle from './showModulSingleBungle'

    export default {
        components:{
            deleteConfirm,
            showModulSingleBungle
        },
        data:()=>({
            showTable: false,
        }),
        computed:{
          show(){
              return this.$store.getters.SHOWBUNDLESINGLE
          }
        },
        props: [
            'select'
        ],
        methods:{
            createSingle(type){
                const data = {
                    is_stock_ca: 1,
                    warehouse: "canada",
                    action: 'create',
                    is_bundle: Number(type)
                };
                type && (data.bundle_parts = []);
                [
                    'brand_name',
                    'categories',
                    'description_english',
                    'description_full',
                    'tags',
                    'price',
                    'weight_physical',
                    'weight_volumetric'
                ].forEach(item => data[item] = '');
                ['color', 'image', 'part_fits' ].forEach(item => data[item] = null);
                ['qty','subst_for' ].forEach(item => data[item] = 0);
                this.$store.dispatch("GET_EDIT_STORE", data);
                this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE",  {module: true, showTable: false});
            },
            deleteItem(){
                this.$store.dispatch("GET_DELETE_MODULE", true);
                this.$store.commit("stockCaModule/SET_VARIABLE", {name:'deletedData', value: this.select()});
            }
        }
    }
</script>

<style lang="scss"  >
</style>
