/*=========================================================================================
  File Name: getters.js
  Description: Vuex Store - getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


const getters = {
    prof: state => state.userId.show,
    name: state => state.userId._id
	// COMPONENT
		// vx-autosuggest
	// starredPages: state => state.navbarSearchAndPinList.data.filter((page) => page.highlightAction),
}

export default getters
