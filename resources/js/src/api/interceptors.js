// import router from '../router/index.js'
import {Token} from "../store/tokenStorage";

export const request = (request, next) => {
    request.url = `${request.root}${request.url}`;
    const asdf= Token.getToken();
    debugger;
    asdf && request.headers.set('Authorization', `Bearer ${Token.getToken()}`);
    return next();
};

export const response = (request, next) => {
    next(response => {
        if (response.status == 403 || response.status == 401) {
            router.push('/login')
        }
    })
};
