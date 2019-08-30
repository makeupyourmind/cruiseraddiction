

const mutations = {
    SET_STOCK_DATA_IN_STORE(state, payload){
        state.data = payload
    },
    SET_VARIABLE(state, payload){
        state[payload.name] = payload.value;
    }
};


export default mutations
