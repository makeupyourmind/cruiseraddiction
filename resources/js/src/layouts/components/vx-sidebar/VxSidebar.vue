<!-- =========================================================================================
    File Name: VxSidebar.vue
    Description: Sidebar Component
    Component Name: VxSidebar
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="parentx" style="z-index: 4000;">
        <!--<vs-button-->
            <!--v-if="!isSidebarActive"-->
            <!--@click="OPEN()"-->
            <!--color="success"-->
            <!--type="relief"-->
            <!--icon="icon-plus"-->
            <!--icon-pack="feather">-->
            <!--RELOAD-->
        <!--</vs-button>-->
        <div style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center">
            <feather-icon icon="DiscIcon" class="mr-0 cursor-pointer" svg-classes="stroke-current"
                          v-if="!isSidebarActive"
                          @click="OPEN()"
                          id="btnSidebarToggler"></feather-icon>
        </div>
        <vs-sidebar v-hammer:swipe.left="onSwipeLeft" ref="mainSidebar" :parent="parent"
                    :hiddenBackground="true" default-index="-1" :reduce="reduce"
                    :click-not-close="false"
                    :style="!isSidebarActive && 'z-index: -1'"
                    class="sidebarx main-menu-sidebar items-no-padding" :value="isSidebarActive"
>
            <!--   :reduce-not-rebound="reduceNotRebound"           -->
            <div >
                <!--@mouseenter="sidebarMouseEntered" @mouseleave="sidebarMouseLeave"-->
                <div class="header-sidebar flex items-end justify-between" slot="header">
                    <div class="logo flex items-center">
                        <img :src="logo" alt="logo" class="w-10 mr-4" v-if="logo">
                        <span class="logo-text" v-show="isMouseEnter" v-if="title">{{title}}</span>
                        <!-- || !reduce-->
                        {{isSidebarActive}}
                    </div>
                    <div>
                        <!--<template v-if="showCloseButton">qweqweqwe-->
                            <!--<feather-icon icon="XIcon" class="m-0 cursor-pointer"-->
                                          <!--@click="close()">-->

                            <!--</feather-icon>-->
                        <!--</template>-->
                        <!--<template v-else-if="!showCloseButton && !sidebarItemsMin">-->
                            <!--wrewer-->
                            <feather-icon icon="DiscIcon" class="mr-0 cursor-pointer" svg-classes="stroke-current"
                                          @click="close()"
                                          id="btnSidebarToggler"></feather-icon>
                            <!--v-show="!reduce" @click="toggleReduce(true)"<feather-icon icon="CircleIcon" class="mr-0 cursor-pointer" svg-classes="stroke-current"-->
                                          <!--v-show="reduce" @click="toggleReduce(false)"-->
                                          <!--id="btnSidebarToggler"></feather-icon>-->
                        <!--</template>-->
                    </div>
                </div>

                <div class="shadow-bottom" v-show="showShadowBottom"></div>

                <VuePerfectScrollbar ref="mainSidebarPs" class="scroll-area--main-sidebar pt-2" :settings="settings"
                                     @ps-scroll-y="psSectionScroll">
                    <template v-for="(sidebarItem, index) in sidebarItems">

                        <!-- GROUP ITEM HEADER -->
                        <span :key="`header-${index}`" v-if="sidebarItem.header && !sidebarItemsMin"
                              class="navigation-header truncate">{{ sidebarItem.header }}</span>
                        <template v-else-if="!sidebarItem.header">

                            <!-- IF IT'S SINGLE ITEM -->
                            <vx-sidebar-item ref="sidebarLink" :key="`sidebarItem-${index}`" v-if="!sidebarItem.submenu"
                                             :index="index" :to="sidebarItem.slug != 'external' ? sidebarItem.url : ''"
                                             :href="sidebarItem.slug == 'external' ? sidebarItem.url : ''"
                                             :icon="sidebarItem.icon" :target="sidebarItem.target"
                                             :isDisabled="sidebarItem.isDisabled">
                                <span v-show="!sidebarItemsMin" class="truncate">{{ sidebarItem.name }}</span>
                                <vs-chip class="ml-auto" :color="sidebarItem.tagColor"
                                         v-if="sidebarItem.tag && (isMouseEnter || !reduce)">{{ sidebarItem.tag }}
                                </vs-chip>
                            </vx-sidebar-item>

                            <!-- IF HAVE SUBMENU / DROPDOWN -->
                            <template v-else>
                                <vx-sidebar-group ref="sidebarGrp" :key="`group-${index}`" :openHover="openGroupHover"
                                                  :group="sidebarItem" :groupIndex="index"
                                                  :open="isGroupActive(sidebarItem)"></vx-sidebar-group>
                            </template>
                        </template>
                    </template>
                </VuePerfectScrollbar>
            </div>
        </vs-sidebar>
        <div v-hammer:swipe.right="onSwipeRightSidebarSwipeArea" v-if="isSidebarActive" class="sidebar-swipe-area"
             id="sidebar-swipe-area"></div>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import VxSidebarGroup from './VxSidebarGroup.vue'
    import VxSidebarItem from './VxSidebarItem.vue'

    export default {
        name: 'vx-sidebar',
        props: {
            sidebarItems: {
                type: Array,
                required: true,
            },
            title: {
                type: String,
            },
            logo: {
                type: String
            },
            parent: {
                type: String
            },
            openGroupHover: {
                type: Boolean,
                default: false
            },
            reduceNotRebound: {
                type: Boolean,
                default: true,
            }
        },
        data: () => ({
            clickNotClose: false, // disable close sidebar on outside click
            reduce: false, // determines if sidebar is reduce - component property
            active: true, // determines if sidebar is reduce - component property
            showCloseButton: false, // show close button in smaller devices
            isMouseEnter: false,
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: 1,
                swipeEasing: true
            },
            windowWidth: window.innerWidth, //width of windows
            showShadowBottom: false,
        }),
        computed: {
            isSidebarActive() {
               return this.$store.getters['IS_SIDEBAR_ACTIVE']
            },
            reduceSidebar() {
                return Boolean(this.reduce && this.reduceButton)
            },
            reduceButton: {
                get() {
                    return this.$store.state.reduceButton;
                },
                set(val) {
                    this.$store.commit('TOGGLE_REDUCE_BUTTON', val)
                }
            },
            sidebarItemsMin() {
                return this.$store.state.sidebarItemsMin;
            },
            isGroupActive() {
                return (sidebarItem) => {
                    const path = this.$route.fullPath;
                    let open = false;
                    let func = function (sidebarItem) {
                        if (sidebarItem.submenu) {
                            sidebarItem.submenu.forEach((item) => {
                                if (path == item.url) {
                                    open = true
                                } else if (item.submenu) {
                                    func(item)
                                }
                            })
                        }
                    }
                    func(sidebarItem)
                    return open
                }
            },
        },
        watch: {
            // reduce(val) {
            //
            //     if (val == true) {
            //         this.$store.dispatch('updateSidebarWidth', 'reduced');
            //     } else {
            //         this.$store.dispatch('updateSidebarWidth', 'default');
            //     }
            //
            //     setTimeout(function () {
            //         window.dispatchEvent(new Event('resize'));
            //     }, 100);
            // },
            reduceButton() {
                this.setSidebarWidth();
            },
            '$route'() {
                // if (this.isSidebarActive && this.showCloseButton) this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', false);
            },
        },
        methods: {
            // sidebarMouseEntered() {
            //     if (this.reduce) this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', false)
            //     this.isMouseEnter = true;
            // },
            // sidebarMouseLeave() {
            //     if (this.reduce) {
            //         this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', true);
            //     }
            //     this.isMouseEnter = false;
            // },
            toggleReduce(val) {
                this.reduceButton = val;
                this.setSidebarWidth();
            },
            // handleWindowResize(event) {
            //     this.windowWidth = event.currentTarget.innerWidth;
            //     this.setSidebarWidth();
            // },
            setSidebarWidth() {
                // if (this.windowWidth < 1200) {
                //     if (this.windowWidth < 992) this.$store.commit('UPDATE_WINDOW_BREAKPOINT', 'md')
                //     else this.$store.commit('UPDATE_WINDOW_BREAKPOINT', 'lg')
                //
                //     this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', false)
                //     if (this.reduceButton) this.reduce = false;
                //     // this.reduceButton = false;
                //     this.showCloseButton = true;
                //     this.clickNotClose = false;
                //     this.$store.dispatch('updateSidebarWidth', 'no-sidebar')
                //     this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', false)
                // } else {
                //     this.$store.commit('UPDATE_WINDOW_BREAKPOINT', 'xl')
                //     if (this.reduceButton) this.reduce = true;
                //     else this.reduce = false;
                //
                //     this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true)
                //     if (this.reduceButton && !this.isMouseEnter) this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', true)
                //     else this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', false)
                //
                //     this.clickNotClose = true;
                //     this.showCloseButton = false;
                //     if (this.reduceSidebar)
                //         this.$store.dispatch('updateSidebarWidth', 'reduced')
                //     else
                //         this.$store.dispatch('updateSidebarWidth', 'default')
                // }
            },
            psSectionScroll() {
                if (this.$refs.mainSidebarPs.$el.scrollTop > 0) this.showShadowBottom = true;
                else this.showShadowBottom = false;
            },
            onSwipeLeft() {
                if (this.isSidebarActive && this.showCloseButton) this.isSidebarActive = false
            },
            onSwipeRightSidebarSwipeArea() {
                if (!this.isSidebarActive && this.showCloseButton) this.isSidebarActive = true
            },
            close(){
                // debugger
                this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', false)
                this.$store.commit('UPDATE_SIDEBAR_WIDTH', 100);
                this.$store.dispatch('updateSidebarWidth', 'reduced');
                this.isMouseEnter = false;
                this.active = false
            },
            OPEN(){
                this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true)
                this.$store.commit('UPDATE_SIDEBAR_WIDTH', 100);
                this.$store.dispatch('updateSidebarWidth', 'default');
                this.isMouseEnter = true;
                this.active = true
            }
        },
        components: {
            VxSidebarGroup,
            VxSidebarItem,
            VuePerfectScrollbar,
        },
        mounted() {
            // this.$nextTick(() => {
            //     window.addEventListener('resize', this.handleWindowResize);
            // });
            this.setSidebarWidth();
        },
        beforeDestroy() {
            // window.removeEventListener('resize', this.handleWindowResize);
        },
    }
</script>

<style lang="scss">
    @import "@sass/vuesax/components/vxSidebar.scss";
</style>
