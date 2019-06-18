/*=========================================================================================
  File Name: getters.js
  Description: Vuex Store - getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


const getters = {
    SHOWDELETE: state => state.showDelete,
    SHOWBUNDLESINGLE: state => state.module,
    SHOWTABLE: state => state.showTable,
    STORE_EDIT: state => state.store_edit

    // COMPONENT
		// vx-autosuggest
	// starredPages: state => state.navbarSearchAndPinList.data.filter((page) => page.highlightAction),
}

export default getters
