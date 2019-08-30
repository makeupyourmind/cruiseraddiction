import Vue  from 'vue'
export class Feedback {
    static get(){
        return  window.http.get('api/reviews')
    }
}
