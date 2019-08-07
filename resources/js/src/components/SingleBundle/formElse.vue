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
                            @input="getData($event, 'brand_name', elem)"
                            :label-placeholder="obj_store.brand_name"
                            style=" margin-top: 0"/>
                    </vs-td>
                    <vs-td :data="data[elem].description_english">
                        <vs-input
                            v-model="data[elem].description_english"
                            :label-placeholder="obj_store.description_english"
                            style=" margin-top: 0"/>
                    </vs-td>
                    <vs-td :data="data[elem].part_number">
                        <vs-input
                            v-model="data[elem].part_number"
                            @input="getData($event, 'part_number', elem)"
                            :label-placeholder="obj_store.part_number"
                            style="margin-top: 0"/>
                    </vs-td>
                    <vs-td :data="data[elem].qty">
                        <vs-input
                            v-model="data[elem].qty"
                            :label-placeholder="obj_store.qty"
                            :style="Number(data[elem].qty) > Number(data[elem].stock_qty) && 'color: red'"
                            style="width:50px; margin-top: 0"/>
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
    import {StockManagment} from "../../api/stockManagment";

    export default {
        name: "formElse",
        data:() => ({
            obj_store:{
                "brand_name": "Paste desc to search",
                "description_english": "Paste desc to search",
                "part_number": "Paste desc to search",
                "qty": "Qty",
            }
        }),
        props:{
            table_store: Array
        },
        computed:{
            order(){
                return this.$store.getters['stockCaModule/GET_DATA_STOCK_ORDER']
            },
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
                    "id": this.table_store.length + 1,
                    "brand_name":'',
                    "description_english": '',
                    "part_number": '',
                    "qty": '',
                    "stock_qty": "0"
                });
            },
            getData(e, type, index){
                this.table_store[index][type] = e;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    if(!this.table_store[index].brand_name || !this.table_store[index].part_number){
                        return clearTimeout(this.timeout);
                    }
                    StockManagment.getStockCA({
                        page: 1,
                        searchBrand: this.table_store[index].brand_name,
                        searchNumber: this.table_store[index].part_number,
                        orderName: this.order.name,
                        orderBy: this.order.by
                    })
                        .then(res => {
                            this.table_store[index].description_english = res.body.data[0].description_english;
                            this.table_store[index].stock_qty = res.body.data[0].qty;
                            clearTimeout(this.timeout);
                        })
                }, 500)
            }
        }
    }
</script>

<style scoped>

</style>
