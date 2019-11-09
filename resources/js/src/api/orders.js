

export class Orders{

    static getOrders(part, email, country, page){
        return window.http.get(`api/orders?page=${page}&part=${part}&email=${email}&country=${country}`)
    }

}
