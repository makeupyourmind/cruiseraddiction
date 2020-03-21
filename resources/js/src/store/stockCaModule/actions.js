import {StockManagment} from "../../api/stockManagment";

const actions = {
    GET_DATA_STOCK_FROM_SERVER({ commit }, data) {
        return StockManagment.getStockCA(data).then(res => commit('SET_STOCK_DATA_IN_STORE', res.body))
    },
    UPDATE_DATA_STOCK({ commit, dispatch, state }, data) {
        return StockManagment.updatePart(data).then(() => state.current_page)
    },
    CREATE_DATA_STOCK({ commit, dispatch, state }, data) {
        return StockManagment.createPart(data).then(() => state.current_page)
    },
    CREATE_DATA_STOCK_BUNDLE({ commit, dispatch, state }, data) {
        return StockManagment.createBundle(data).then(() => state.current_page)
    },
    DELETE_DATA_STOCK({ commit, dispatch, state }, data) {
        return StockManagment.deletePart(data).then(() => state.current_page)
    },
    GET_DATA: ({commit},data) => {
        return StockManagment.getQtyZero(data).then(res => commit('SET_STOCK_DATA_IN_STORE', res.data))
        .catch(error => commit('SET_ERROR', error))
    },
    GET_DATA_ABOVE: ({commit},data) => {
        return StockManagment.getQtyAbove(data).then(res => commit('SET_STOCK_DATA_IN_STORE', res.data))
    },
    GET_DATA_BELLOW: ({commit},data) => {
        return StockManagment.getQtyBellow().then(res => commit('SET_STOCK_DATA_IN_STORE', res.data))
    },
    GET_DATA_BUNDELS: ({commit},data) => {
        return StockManagment.getBundelsOnly().then(res => commit('SET_STOCK_DATA_IN_STORE', res.data))
    },
    // GET_DATA_FILTER: ({commit},data) => {
    //     return StockManagment.getQtyFilter(data).then(res => commit('SET_STOCK_DATA_IN_STORE', res.data))
    // },
};

export default actions
