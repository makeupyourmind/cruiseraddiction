import router from '../router'
import {Token} from "../store/tokenStorage";

export const request = (request, next) => {
    request.url = `${request.root}${request.url}`;
    // debugger
    const asdf= Token.getToken();
    asdf && request.headers.set('Authorization', `Bearer ${Token.getToken()}`);
    return next();
};

export const response = (request, next) => {
    next(response => {
        if (response.status == 403 || response.status == 401) {

            console.log("figidsyfigsdifsyidgfoys")
            // router.push('/pages/no-authorized')
        }
    })
};
