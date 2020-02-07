<template>
    <div class="detail" :style="{background: typeof templateData.data.guest === 'object' ? 'rgba(142, 17, 30, 0.16)': 'rgba(0, 142, 109, 0.16)'}">
        <div class="master-detail-caption">Order Info</div>
        <br>
        <div class="container-info">
            <div class="info">
                <h3>Shipping</h3>
                <div>
                    <div>Service name:</div>
                    <div>{{(shipping.shipping && shipping.shipping.service_name) || '-----'}}</div>
                </div>
                <div>
                    <div>Service code:</div>
                    <div>{{(shipping.shipping && shipping.shipping.service_code ) || '-----'}}</div>
                </div>
                <div>
                    <div>Min day:</div>
                    <div>{{(shipping.shipping && shipping.shipping.max_delivery_date)  || '-----'}}</div>
                </div>
                <div>
                    <div>Max day:</div>
                    <div>{{(shipping.shipping && shipping.shipping.min_delivery_date ) || '-----'}}</div>
                </div>
                <div>
                    <div>Currency:</div>
                    <div>{{(shipping.shipping && shipping.shipping.currency) || '-----'}}</div>
                </div>
                <div>
                    <div>value:</div>
                    <div>{{(shipping.shipping && shipping.shipping.value) || '-----'}}</div>
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
                    <div>{{(user.phone && phone(user.phone))|| '-----'}}</div>
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
            <dx-column
                    caption="client_column_two"
                    data-field="client_column_two"/>
            <dx-column
                    caption="Action"
                    cell-template="Action"
            />
            <div slot="Action" slot-scope="{ data }">
                    <div v-html="setData(data)"></div>
            </div>
        </dx-data-grid>
        <br>
        <div class="master-detail-caption" style="font-weight: bold; color: blue;">Total info</div>
        <div class="total">
            Order notes : {{user.order_notes}}
        </div>
        <div class="total">
            Subtotal : {{getSubtotal}} {{user.currency}}
        </div>
        <div class="total">
            Shipping : {{(shipping.shipping && shipping.shipping.value) || 0}}
        </div>
        <div class="total">
            Taxes : {{( shipping.taxes && shipping.taxes.total_price) || 0}}
        </div>
        <div class="total">
            <span style="font-weight: bold">Total : {{
                (Number(getSubtotal) + (
                    shipping.shipping && shipping.shipping.value ? Number(shipping.shipping.value) : 0
                ) + (shipping.taxes ? Number(shipping.taxes.total_price) : 0))
                .toFixed(2)
                }}
            </span>
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
                user: this.templateData.data[`${typeof this.templateData.data.guest === 'object' ? 'guest' : 'user'}`],
                shipping: this.templateData.data[`${typeof this.templateData.data.guest === 'object' ? 'guest' : 'user'}`].shipping || {}
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
                    item.price = (Number(item.price)).toFixed(2);
                    item.order = this.templateData.data.id;
                    return item;
                })
            },

            phone(phone){
                try{
                    const parse = JSON.parse(phone);
                    return parse.formattedNumber
                } catch(e){
                    return false;
                }
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

            setData(data){
                const att = this.templateData.data.attachments[data.rowIndex];
                return att ? att.status : ''
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
    .d{
        color: rgba(142, 17, 30, 0.43)
    }
</style>
