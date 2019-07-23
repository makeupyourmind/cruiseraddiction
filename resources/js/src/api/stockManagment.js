

export class StockManagment{
    static getStockCA(index){
        return window.http.get(`api/stock-ca-parts?page=${index}`)
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
