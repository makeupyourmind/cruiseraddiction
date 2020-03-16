

export class UserEditTabAccount{

    static selectRoles(){
        return window.http.get(`api/superadmin/roles`)
    }

    static update(id, data){
        return window.http.put(`api/superadmin/${id}`, data);
    }

}
