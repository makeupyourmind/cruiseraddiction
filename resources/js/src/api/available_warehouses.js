import { Token } from '../store/tokenStorage'

export class AvailableWarehouses {
    static receive() {
        return fetch(`api/admin/available/warehouses`, {
            headers: {
                "Authorization": `Bearer ${Token.getToken()}`
            }
        })
    }

    static deleteWarehouse(payload) {
        return fetch(`api/admin/available/warehouses`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${Token.getToken()}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                payload
            })
        })
    }
}