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
        <vs-prompt
            :vs-title="showTable === true ? 'Create Bundle' : 'Create Single'"
            vs-accept-text= "Send"
            @vs-cancel="clearFields"
            @vs-accept="sendMail"
            @vs-close="clearFields"
            :vs-is-valid="validateForm"
            :vs-active.sync="activePrompt">
            <VuePerfectScrollbar class="scroll-area p-4" :settings="settings">
                <form @submit.prevent>
                    <v-select label-placeholder="Subject" :options="['TOYOTA']"></v-select>
<!--                    <vs-input v-validate="'required|email'" name="mailTo" label-placeholder="To" v-model="mailTo" class="w-full mb-6" :danger="!validateForm && mailTo != ''" val-icon-danger="clear" :success="validateForm" val-icon-success="done" :color="validateForm ? 'success' : 'danger'" />-->
                    <vs-input label-placeholder="Part Number" v-model="partNum" class="w-full mb-6" />
                    <vs-input label-placeholder="Description" v-model="description" class="w-full mb-6" />
                    <vs-input label-placeholder="Description Full" v-model="descriptionFull" class="w-full mb-6" />
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

                    <div v-if="showTable === true">
                        <h1>here will be table</h1>
                    </div>
                    <vs-input label-placeholder="Min Stock" v-model="minStock" class="w-full mb-6" />
                    <vs-input v-if="showTable === true" label-placeholder="Current" disabled="disabled" v-model="current" class="w-full mb-6" />
                    <vs-input v-else label-placeholder="Current"  v-model="current" class="w-full mb-6" />
                    <vs-input label-placeholder="Min Price" v-model="minPrice" class="w-full mb-6" />
                    <vs-input label-placeholder="Location" v-model="location" class="w-full mb-6" />
                    <p>here will be input chip</p>
                    <vs-input label-placeholder="Categories" v-model="categories" class="w-full mb-6" />

                </form>
            </VuePerfectScrollbar>
        </vs-prompt>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import vSelect from 'vue-select'
    export default {
        components:{
            VuePerfectScrollbar,
            'v-select': vSelect,

        },
        data:()=>({
            showTable: false,
            checkBox1: [],
            activePrompt: false,
            partNum:"",
            description:"",
            descriptionFull:"",
            minStock:"",
            current:"",
            minPrice:"",
            location:"",
            categories:"",
            settings: {
                maxScrollbarLength: 60,
                wheelSpeed: 0.30,
            },
        }),
        computed:{
            validateForm() {
                return !this.errors.any() && this.mailTo != '';
            },
        },
        methods:{
            clearFields() {
                this.mailTo = '';
                this.mailSubject = '';
                this.mailCC = '';
                this.mailBCC = '';
                this.mailMessage = '';
            },
            sendMail() {
                console.log("send")
            },

            createBundle(){
                this.activePrompt = true;
                this.showTable = true
                console.log("create Bundle")
            },
            createSingle(){
                this.activePrompt = true;
                this.showTable = false
                console.log("create Single")
            },
            deleteItem(){
                console.log("delete item")
            }
        }
    }
</script>

<style scoped>

</style>
