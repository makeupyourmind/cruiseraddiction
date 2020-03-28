/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import Vue from "vue";
import { AvailableWarehouses } from "../api/available_warehouses";
const actions = {

    // ////////////////////////////////////////////
    // SIDEBAR & UI UX
    // ////////////////////////////////////////////

    updateSidebarWidth({ commit }, width) {
      commit('UPDATE_SIDEBAR_WIDTH', width);
    },
    updateI18nLocale({ commit }, locale) {
      commit('UPDATE_I18N_LOCALE', locale);
    },
    toggleContentOverlay({ commit }) {
      commit('TOGGLE_CONTENT_OVERLAY');
    },
    updateTheme({ commit }, val) {
      commit('UPDATE_THEME', val);
    },
    updateUserRole({ commit }, val) {
      commit('UPDATE_USER_ROLE', val);
    },
    updateWindowWidth({ commit }, width) {
      commit('UPDATE_WINDOW_WIDTH', width);
    },


    // ////////////////////////////////////////////
    // COMPONENT
    // ////////////////////////////////////////////

    // VxAutoSuggest
    updateStarredPage({ commit }, payload) {
      commit('UPDATE_STARRED_PAGE', payload)
    },

    //  The Navbar
    arrangeStarredPagesLimited({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_LIMITED', list)
    },
    arrangeStarredPagesMore({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_MORE', list)
    },

    // ////////////////////////////////////////////
    // FORM
    // ////////////////////////////////////////////
    SIGN_UP({commit}, payload) {
        return Vue.http
            .post(`api/register`, payload)
            .then(() => true)
            .catch(error =>{
                if(error.status === 404){
                    return error.status
                }else{
                    return false
                }
            })
    },
    SIGN_IN({commit}, payload){
        return Vue.http.post(`api/login`, payload)
            .then(response =>{
                commit("SET_SIGN_IN", response);
                return true;
            })
            .catch(() => false )
    },
    GET_DELETE_MODULE({commit}, payload){
        commit("SET_DELETE_MODULE", payload)
    },
    GET_SHOW_BUNDLE_SINGLE({commit}, payload){
        commit("SET_SHOW_BUNDLE_SINGLE", payload)
    },
    GET_SHOW_WAREHOUSE_SINGLE({commit}, payload){
      commit("SET_SHOW_WAREHOUSE_SINGLE", payload)
    },
    GET_EDIT_STORE({commit}, payload){
        commit("SET_EDIT_STORE", payload)
    },
    async GET_ALL_AVAILABLE_WAREHOUSES({commit}){
      const response = await AvailableWarehouses.receive();
      const json = await response.json();
      commit('GET_AVAILABLE_WAREHOUSES', json)
    },
    async DELETE_AVAILABLE_WAREHOUSE({dispatch, commit}, payload){
      await AvailableWarehouses.deleteWarehouse(payload)
      dispatch('GET_ALL_AVAILABLE_WAREHOUSES')
      // commit("DELETE_AVAILABLE_WAREHOUSE", payload)
    }
}

export default actions
