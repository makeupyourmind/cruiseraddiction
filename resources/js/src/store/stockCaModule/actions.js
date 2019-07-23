import {StockManagment} from "../../api/stockManagment";

const actions = {
    GET_DATA_STOCK_FROM_SERVER({ commit }, index) {
        return StockManagment.getStockCA(index).then(res => commit('SET_STOCK_DATA_IN_STORE', res.body))
    },
    UPDATE_DATA_STOCK({ commit, dispatch, state }, data) {
        return StockManagment.updatePart(data).then(() => state.current_page)
    },
    CREATE_DATA_STOCK({ commit, dispatch, state }, data) {
        return StockManagment.createPart(data).then(() => state.current_page)
    },
    DELETE_DATA_STOCK({ commit, dispatch, state }, data) {
        return StockManagment.deletePart(data).then(() => state.current_page)
    },
};

export default actions
