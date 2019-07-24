<template>
    <div>
        <div class="master-detail-caption">{{ detailInfo }}</div>
        <dx-data-grid
                :data-source="dataSource"
                :show-borders="true"
                :column-auto-width="true"
        >
            <dx-column data-field="brand_name"/>
            <dx-column
                    data-field="count"
                    data-type="date"
            />
            <dx-column
                    data-field="part_number"
                    data-type="date"
            />
            <dx-column data-field="warehouse"/>
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
