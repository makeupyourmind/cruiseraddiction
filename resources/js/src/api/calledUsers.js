

export class CalledUsers{

    static getUser(data){
        return window.http.get(`api/superadmin`)
    }

}
