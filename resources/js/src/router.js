/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import Auth from './middleware/authenticated'
import middlewarePipeline from './middleware/middlewarePipeline'
import store from './store/store'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/',
                    name: 'Stock_management',
                    component: () => import('./views/stockManagement.vue'),
                    meta: {
                        pageTitle: "Stock Management",
                        // middleware: [Auth]
                    }
                },

                {
                    path: '/orders',
                    name: 'orders',
                    component: () => import('./views/orders.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Stock Management', url: '/' },
                            { title: 'orders', active: true },
                        ],
                        pageTitle: 'orders',
                    },
                },
                {
                    path: '/reviews',
                    name: 'reviews',
                    component: () => import('./views/reviews.vue'),
                    meta: {
                        pageTitle: 'reviews',
                    },
                },
                {
                    path: '/available-warehouses',
                    name: 'available-warehouses',
                    component: () => import('./views/available-warehouses.vue'),
                    meta: {
                        pageTitle: 'available-warehouses',
                    }
                },{
                    path: '/called-users',
                    name: 'called-users',
                    component: () => import('./views/calledUsers.vue'),
                    meta: {
                        pageTitle: 'called-users',
                    },
                },
                {
                    path: '/user-edit/:userId',
                    name: 'app-user-edit',
                    component: () => import('./views/userEdit.vue'),
                    meta: {
                        pageTitle: 'User Edit',
                    },
                },
            ],
        },
        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '/full',
            component: () => import('./layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/',
                    name: 'Stock management',
                    component: () => import('./views/stockManagement.vue'),
                    meta: {
                        pageTitle: "Stock Management"
                    }
                },


                // {
                //     path: '/page2',
                //     name: 'page2',
                //     component: () => import('./views/Page2.vue'),
                //     meta: {
                //         breadcrumb: [
                //             {title: 'Stock Management', url: '/'},
                //             {title: 'page2', active: true},
                //         ],
                //         pageTitle: 'page2',
                //     },
                // },
                {
                    path: '/orders',
                    name: 'orders',
                    component: () => import('./views/orders.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Stock Management', url: '/' },
                            { title: 'orders', active: true },
                        ],
                        pageTitle: 'orders',
                    },
                },
                {
                    path: '/called-users',
                    name: 'called-users',
                    component: () => import('./views/calledUsers.vue'),
                    meta: {
                        breadcrumb: [
                            {title: 'called-userst', url: '/'},
                            {title: 'called-users', active: true},
                        ],
                        pageTitle: 'called-users',
                    },
                },
            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/pages/login',
                    name: 'pageLogin',
                    component: () => import('@/views/pages/Login.vue')
                },
                {
                    path: '/pages/error-404',
                    name: 'pageError404',
                    component: () => import('@/views/pages/Error404.vue')
                },
                {
                    path: '/pages/register',
                    name: 'pageRegister',
                    component: () => import('@/views/pages/Register.vue'),
                    meta: {
                        rule: 'editor'
                    },
                },
                {
                    path: '/pages/forgot-password',
                    name: 'pageForgotPassword',
                    component: () => import('@/views/pages/ForgotPassword.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/reset-password',
                    name: 'pageResetPassword',
                    component: () => import('@/views/pages/ResetPassword.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/no-authorized',
                    name: 'NotAuthorized',
                    component: () => import('@/views/pages/NotAuthorized.vue')
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware
    const context = {
        to,
        from,
        next,
        store,
        router
    }
    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })
})

export default router
