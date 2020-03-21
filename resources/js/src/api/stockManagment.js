

export class StockManagment{

    static getStockCA(data){
        return window.http.get(`api/stock-ca-parts?page=${data.page}&part_number=${data.searchNumber}&brand_name=${data.searchBrand}&order_name=${data.orderName}&order_by=${data.orderBy}`)
    }

    static updatePart(data){
        return window.http.put(`api/update-parts`, data)
    }

    static createPart(data){
        return window.http.post(`api/add-parts`, data)
    }

    static createBundle(data){
        return window.http.post(`api/bundles`, data)
    }

    static deletePart(data){
        const result = {...data};
        result.array = btoa(JSON.stringify(result.array));
        result.password = btoa(result.password);
        return window.http.delete(`api/delete-parts?array=${result.array}&password=${result.password}`)
    }

    static reload () {
        return window.http.get(`api/stock-ca`)
    }
    static getImage () {
        return window.http.get(`api/parts/images`)
    }
    static getQtyZero (data) {
        return window.http.get(`api/stock-ca-parts?qty=${data}`)
    }
    static getQtyAbove () {
        return window.http.get(`api/stock-ca-parts?qty_above=10`)
    }
    static getQtyBollow () {
        return window.http.get(`api/stock-ca-parts?qty_bello_min_stock=1`)
    }
    static getBundelsOnly () {
        return window.http.get(`api/stock-ca-parts?bundels_only=1`)
    }
    static getQtyFilter (params) {
        return window.http.get(`api/stock-ca-parts?qty_above=${params.qty_above}&qty_bello_min_stock${params.qty_bello_min_stock}&bundels_only=${params.bundels_only}`)
    }

}
