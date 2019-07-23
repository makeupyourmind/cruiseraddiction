

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

    static deletePart(data){
        const result = {...data};
        result.array = btoa(JSON.stringify(result.array));
        result.password = btoa(result.password);
        return window.http.delete(`api/delete-parts?array=${result.array}&password=${result.password}`)
    }
}
