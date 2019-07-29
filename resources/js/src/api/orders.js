

export class Orders{

    static getOrders(part, email, country){
        return window.http.get(`api/orders?part=${part}&email=${email}&country=${country}`)
    }

}
