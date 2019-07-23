

export class Orders{

    static getOrders(data){
        return window.http.get(`api/orders`)
    }

}
