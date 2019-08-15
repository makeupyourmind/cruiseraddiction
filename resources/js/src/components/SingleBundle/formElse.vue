<template>
    <div>
        <vs-button
            @click="saveChanges"
            color="success"
            type="relief"
            icon="icon-save"
            icon-pack="feather">Save Changes</vs-button>
        <vs-table :data="table_data" class="mt-5 mb-5">
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
                    <vs-td :data="data[elem].bundle_qty">
                        <vs-input
                            v-model="data[elem].bundle_qty"
                            :label-placeholder="obj_store.qty"
                            :style="Number(data[elem].bundle_qty) > Number(data[elem].qty) && 'color: red'"
                            style="width:50px; margin-top: 0"/>
                    </vs-td>
                    <vs-td :data="data[elem].qty" align="center">
                        <p>{{data[elem].qty}}</p>
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
            },
            table_data: []
        }),
        props:{
            table_store: Array
        },
        created(){
            this.table_data = JSON.parse(JSON.stringify(this.table_store)).map(item => {
                item.id = Math.random().toString(36).substr(2);
                return item;
            })
        },
        computed:{
            order(){
                return this.$store.getters['stockCaModule/GET_DATA_STOCK_ORDER']
            },
        },
        methods:{
            saveChanges(){
              this.$emit("saveChanges", this.table_data)
            },
            deleteRow(id){
                let indexM;
                this.table_data.find((item, index) => {
                    const bool = item.id === id;
                    bool && (indexM = index);
                    return bool;
                });
                typeof indexM == 'number' && this.table_data.splice(indexM, 1);

            },
            addRow(){
                this.table_data.push({
                    "id": Math.random().toString(36).substr(2),
                    "brand_name":'',
                    "description_english": '',
                    "part_number": '',
                    "qty": '',
                    "bundle_qty": "0"
                });
            },
            getData(e, type, index){
                this.table_data[index][type] = e;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    if(!this.table_data[index].brand_name || !this.table_data[index].part_number){
                        return clearTimeout(this.timeout);
                    }
                    StockManagment.getStockCA({
                        page: 1,
                        searchBrand: this.table_data[index].brand_name,
                        searchNumber: this.table_data[index].part_number,
                        orderName: this.order.name,
                        orderBy: this.order.by
                    })
                        .then(res => {
                            this.table_data[index].description_english = res.body.data[0].description_english;
                            this.table_data[index].qty = res.body.data[0].qty;
                            clearTimeout(this.timeout);
                        })
                }, 500)
            }
        }
    }
</script>

<style scoped>

</style>
