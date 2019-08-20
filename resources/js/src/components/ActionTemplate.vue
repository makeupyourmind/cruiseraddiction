<template>
    <div class="detail">
        ...
    </div>
</template>

<script>
    import { DxButton } from 'devextreme-vue/data-grid';
    import more_horiz from "../../../assets/baseline-more_horiz-24px.svg";

    export default {
        components: { DxButton },
        props: {
            templateData: {
                type: Object,
                default: ()=>{}
            }
        },
        data() {
            return {
                user: this.templateData.data,
            };
        },
        methods: {
        }
    };
</script>

<style scoped>
    .total{
        padding: 10px;
        border-bottom: 1px solid lightgray;
    }
    .total:last-child{
        border: none;
    }
</style>
