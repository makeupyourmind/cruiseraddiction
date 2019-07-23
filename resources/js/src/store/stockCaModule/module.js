import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import state from "./state";

const stockCaModule = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};
export default stockCaModule;
