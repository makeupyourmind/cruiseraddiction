import Vue  from 'vue'
export class Feedback {
    static get(page){
        return  window.http.get(`api/reviews?page=${page}`)
    }
}
