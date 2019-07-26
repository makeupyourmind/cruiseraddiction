<template>
    <div>
        <div class="master-detail-caption">{{ detailInfo }}</div>
        <dx-data-grid
                :data-source="dataSource"
                :show-borders="true"
                :column-auto-width="true"
        >
            <dx-column
                    caption="Brand Name"
                    data-field="brand_name"/>
            <dx-column
                caption="Part Number"
                data-field="part_number"
                data-type="date"
        />
            <dx-column
                    caption="Description"
                    data-field="description_english"/>
            <dx-column
                    caption="QTY"
                    data-field="count"
            />

            <dx-column
                    caption="Warehouse"
                    data-field="warehouse"/>
            <dx-column
                    caption="Price"
                    data-field="price"/>
        </dx-data-grid>
    </div>
</template>

<script>
    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';

    import ArrayStore from 'devextreme/data/array_store';
    import DataSource from 'devextreme/data/data_source';
    export default {
        components: { DxDataGrid, DxColumn },
        props: {
            templateData: {
                type: Object,
                default: ()=>{}
            }
        },
        data() {
            return {
                dataSource: this.templateData.data.data,
                detailInfo: `Orders`
            };
        },
        methods: {
            completedValue(rowData) {
                return true;
            },
            getTasks(data) {

                return new DataSource({
                    store: new ArrayStore({
                        data: data,
                        key: 'unique_hash'
                    }),
                });
            }
        }
    };
</script>

<style scoped>

</style>
