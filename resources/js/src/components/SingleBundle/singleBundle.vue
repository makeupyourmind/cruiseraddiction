<template>
    <div>
        <vs-dropdown class="ml-auto md:block hidden cursor-pointer" style="margin-left:15px!important "vs-trigger-click>
            <vs-button radius icon="icon-edit" icon-pack="feather"></vs-button>
            <vs-dropdown-menu class="w-32">
                <vs-dropdown-item>
                    <div @click="createBundle" class="flex items-center">
                        <span>Creatge bundle</span>
                    </div>
<!--                <singleBungleForm :activePrompt="activePrompt"></singleBungleForm>-->
                </vs-dropdown-item>

                <vs-dropdown-item>
                    <div @click="createSingle" class="flex items-center">
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
        methods:{
            createBundle(){
                this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {module: true, showTable: true});
            },
            createSingle(){
                this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE",  {module: true, showTable: false});
            },
            deleteItem(){
                this.$store.dispatch("GET_DELETE_MODULE", true);
            }
        }
    }
</script>

<style lang="scss"  >
</style>
