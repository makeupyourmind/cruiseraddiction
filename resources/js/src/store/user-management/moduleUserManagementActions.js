/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from "axios"
import {baseURL} from "../../main";

export default {
  // addItem({ commit }, item) {
  //   return new Promise((resolve, reject) => {
  //     axios.post("/api/data-list/products/", {item: item})
  //       .then((response) => {
  //         commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  fetchUsers({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/user-management/users")
        .then((response) => {
          commit('SET_USERS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchUser(context, userId) {
     return new Promise((resolve, reject) => {
        var token = localStorage.getItem('token');
        axios({
          method: 'get', // Or GET
          url: `${http.options.root}api/superadmin/${userId}`,
          headers: { 'Authorization': 'Bearer ' + token } // Cookies.get('Token')
        })
        .then(response => { 
          resolve(response.data)
        })
        .catch((error) => { reject(error) });
      })  
  },
  removeRecord({ commit }, userId) {

    // return new Promise((resolve, reject) => {
    //   axios.delete(`/api/user-management/users/${userId}`)
    //     .then((response) => {
    //       commit('REMOVE_RECORD', userId)
    //       resolve(response)
    //     })
    //     .catch((error) => { reject(error) })
    // })

    return new Promise((resolve, reject) => {
        var token = localStorage.getItem('token');
        axios({
          method: 'delete', // Or GET
          url: `${http.options.root}api/superadmin/${userId}`,
          headers: { 'Authorization': 'Bearer ' + token } // Cookies.get('Token')
        })
        .then(response => { 
          commit('REMOVE_RECORD', userId)
          resolve(response)
        })
        .catch((error) => { reject(error) });
      })  


  }
}
