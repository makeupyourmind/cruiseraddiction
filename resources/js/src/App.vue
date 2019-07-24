<!-- =========================================================================================
	File Name: App.vue
	Description: Main vue file - APP
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<div id="app">
		<div v-if="isNoActive" class="loading">
			LOADING... {{time}}
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import themeConfig from '@/../themeConfig.js'
import {Token} from "./store/tokenStorage";

export default {
    watch: {
        '$route'(to, from){
            const block_route = to.path;
            if(Token.getToken()){
                switch(block_route){
                    case '/pages/login': this.$router.replace('/')
                }
            }else{
                switch(block_route){
                    case '/': this.$router.replace('/pages/login')
                }
            }
            // debugger
        },
		isNoActive(val){
        	console.log(val)
			val ? this.interval = setInterval(() => this.time = this.time + 1, 1000) : (clearInterval(this.interval), this.time = 0)
		},
        '$store.state.theme'(val) {
            this.toggleClassInBody(val);
        }
    },

	computed:{
		isNoActive(){
			return this.$store.getters['isNoActive']
		}
	},

	data(){
    	return {
    		time: 0,
			interval: null
		}
	},

    methods: {
        toggleClassInBody(className) {
            if (className == 'dark') {
                if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
                document.body.classList.add('theme-dark');
            } else if (className == 'semi-dark') {
                if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
                document.body.classList.add('theme-semi-dark');
            } else {
                if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
                if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
            }
        }
    },
    mounted() {
        this.toggleClassInBody(themeConfig.theme)
    },
}
</script>
<style lang="scss">
    .material-icons{
        font-size: 16px!important;
    }
	.loading{
		width: 100%;
		height: 100%;
		position: fixed;
		background: #3f51b5;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 40px;
		z-index: 100000;
	}
</style>
