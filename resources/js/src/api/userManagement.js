
export class UserManagement{

    static getUser(userId){
        return window.http.get(`api/superadmin/${userId}`)
    }
    static delectUser(userId){
        return window.http.delete(`api/superadmin/${userId}`)
    }

}
