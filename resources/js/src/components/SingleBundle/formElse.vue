<template>
    <div>
        <vs-button
            @click="saveChanges"
            color="success"
            type="relief"
            icon="icon-save"
            icon-pack="feather">Save Changes</vs-button>
        <vs-table :data="table_store" class="mt-5 mb-5">
            <template slot="thead">
                <vs-th>Brand Name</vs-th>
                <vs-th>Description</vs-th>
                <vs-th>Parts Number</vs-th>
                <vs-th>Qty</vs-th>
                <vs-th>Stock Qty</vs-th>
                <vs-th>Delete</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :key="elem" v-for="(tr, elem) in data">
                    <vs-td :data="data[elem].brand_name">
                        <vs-input
                            v-model="data[elem].brand_name"
                            :label-placeholder="obj_store.brand_name"
                            style="width:117px; margin-top: 0"/>
                    </vs-td>
                    <vs-td :data="data[elem].description">
                        <vs-input
                            v-model="data[elem].description"
                            :label-placeholder="obj_store.description"
                            style="width:117px; margin-top: 0"/>
                    </vs-td>
                    <vs-td :data="data[elem].parts_number">
                        <vs-input
                            v-model="data[elem].parts_number"
                            :label-placeholder="obj_store.parts_number"
                            style="width:117px; margin-top: 0"/>
                    </vs-td>
                    <vs-td :data="data[elem].qty">
                        <vs-input
                            v-model="data[elem].qty"
                            :label-placeholder="obj_store.qty"
                            style="width:40px; margin-top: 0"/>
                    </vs-td>
                    <vs-td :data="data[elem].stock_qty" align="center">
                        <p>{{data[elem].stock_qty}}</p>
                    </vs-td>
                    <vs-td>
                        <vs-button
                            @click="deleteRow(data[elem].id)"
                            color="danger"
                            radius icon="icon-trash"
                            icon-pack="feather"/>
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
        <vs-button
            @click="addRow"
            color="success"
            type="relief"
            icon="icon-plus"
            icon-pack="feather">Add row</vs-button>
    </div>
</template>
<script>
    export default {
        name: "formElse",
        data:() => ({
            obj_store:{
                "brand_name": "Paste desc to search",
                "description": "Paste desc to search",
                "parts_number": "Paste desc to search",
                "qty": "Qty",
            }
        }),
        props:{
            table_store: Array
        },
        methods:{
            saveChanges(){
              this.$emit("saveChanges", this.table_store)
            },
            deleteRow(id){
                this.table_store.splice(id, 1);
                for(let i = 0; i < this.table_store.length; i++){
                    this.table_store[i].id = i
                }
            },
            addRow(){
                this.table_store.push({
                    "id": null,
                    "brand_name":'',
                    "description": '',
                    "parts_number": '',
                    "qty": '',
                    "stock_qty": "0"

                });
                for(let i = 0; i < this.table_store.length; i++){
                    this.table_store[i].id = i
                }
            },
        }
    }
</script>

<style scoped>

</style>
