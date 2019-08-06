<template>
    <div class="detail">
        <div class="master-detail-caption">Order Info</div>
        <br>
        <div class="container-info">
            <div class="info">
                <h3>Shipping</h3>
                <div>
                    <div>Service name:</div>
                    <div>{{shipping.service_name || '-----'}}</div>
                </div>
                <div>
                    <div>Service code:</div>
                    <div>{{shipping.service_code || '-----'}}</div>
                </div>
                <div>
                    <div>Min day:</div>
                    <div>{{shipping.max_delivery_date || '-----'}}</div>
                </div>
                <div>
                    <div>Max day:</div>
                    <div>{{shipping.min_delivery_date || '-----'}}</div>
                </div>
                <div>
                    <div>Currency:</div>
                    <div>{{shipping.currency || '-----'}}</div>
                </div>
                <div>
                    <div>value:</div>
                    <div>{{shipping.value || '-----'}}</div>
                </div>
            </div>
            <div class="info">
                <h3>User</h3>
                <div>
                    <div>User:</div>
                    <div>{{(user.first_name + ' ' + user.last_name )|| '-----'}}</div>
                </div>
                <div>
                    <div>City:</div>
                    <div> {{(user.city)|| '-----'}}</div>
                </div>
                <div>
                    <div>Country:</div>
                    <div>{{(user.country)|| '-----'}}</div>
                </div>
                <div>
                    <div>Phone:</div>
                    <div>{{(user.phone)|| '-----'}}</div>
                </div>
                <div>
                    <div>Post code:</div>
                    <div>{{(user.postal_code)|| '-----'}}</div>
                </div>
                <div>
                    <div>email:</div>
                    <div> {{(user.email)|| '-----'}}</div>
                </div>
            </div>
            <div class="info">
                <h3>Payment</h3>
                <div>Paypal</div>
            </div>
        </div>
        <br>
        <dx-data-grid
                :data-source="dataSource"
                :show-borders="true"
                @rowPrepared="prepered"
                :column-auto-width="true"
        >
            <dx-column
                    caption="Brand Name"
                    data-field="brand_name"/>
            <dx-column
                    caption="Part Number"
                    data-field="part_number"
            />
            <dx-column
                    caption="Description"
                    data-field="description_english"/>
            <dx-column
                    caption="QTY"
                    data-field="count"
            />
            <dx-column
                    caption="Price"
                    data-field="price"/>
            <dx-column
                    caption="Total"
                    data-field="total"
            />
            <dx-column
                    caption="Warehouse"
                    data-field="warehouse"/>
            <dx-column
                    caption="Order"
                    data-field="order"/>

        </dx-data-grid>
        <br>
        <div class="master-detail-caption" style="font-weight: bold; color: blue;">Total info</div>
        <div class="total">
            Subtotal : {{getSubtotal}}
        </div>
        <div class="total">
            Shipping : {{shipping.value || 0}}
        </div>
        <div class="total">
            <span style="font-weight: bold">Total : {{getSubtotal + (shipping.value ? Number(shipping.value) : 0)}}</span>
        </div>
    </div>
</template>

<script>
    import {DxDataGrid, DxColumn} from 'devextreme-vue/data-grid';

    import ArrayStore from 'devextreme/data/array_store';
    import DataSource from 'devextreme/data/data_source';

    export default {
        components: {DxDataGrid, DxColumn},
        props: {
            templateData: {
                type: Object,
                default: () => {
                }
            }
        },
        data() {
            return {
                dataSource: this.getSource(),
                detailInfo: `Orders`,
                user: this.templateData.data.user,
                shipping: this.templateData.data.user.shipping || {}
            };
        },
        computed: {
            getSubtotal() {
                return this.dataSource.length > 1 ? [...this.dataSource]
                    .map(item => Number(item.total))
                    .reduce((a, b) => a + b)
                    .toFixed(2) : Number(this.dataSource[0].total)
            }
        },
        methods: {
            getSource() {
                return [...this.templateData.data.data].map(item => {
                    item.total = (item.count * Number(item.price)).toFixed(2);
                    item.order = this.templateData.data.id;
                    return item;
                })
            },
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
            },
            prepered(row) {
                // if(row.rowIndex == 0) return;
                // if (row.rowIndex%2) row.rowElement.style['background'] = 'lightgrey!important';
                // else row.rowElement.style['background'] = 'white!important';
            }
        }
    };
</script>

<style scoped>
    .total {
        padding: 10px;
        border-bottom: 1px solid lightgray;
    }

    .total:last-child {
        border: none;
    }

    .container-info {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .info h3 {
        color: #3f51b5;
    }

    .info div {
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
    }

    .info > div {
        border-bottom: 1px solid lightgray;
    }

    .info > div:last-child {
        border: none;
    }

    .info div div {
        width: 100px;
    }
</style>
