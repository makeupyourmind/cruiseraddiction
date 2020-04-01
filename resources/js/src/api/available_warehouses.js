import { Token } from '../store/tokenStorage'

export class AvailableWarehouses {
    static receive() {
        return  window.http.get(`api/admin/available/warehouses`)
    }

    static deleteWarehouse(payload) {
        debugger
        payload = [payload]
        return  window.http.delete(`api/admin/available/warehouses`,{body:{payload}})
    }

    static createWarehouse(payload) {
        payload.isAvailable = payload.isAvailable ? 1 : 0;
        return  window.http.post(`api/admin/available/warehouses`, payload)
    }

    static updateWarehouse(payload) {
        payload.isAvailable = payload.isAvailable ? 1 : 0;
        return  window.http.put(`api/admin/available/warehouses/${payload.id}`, payload)
    }
}
