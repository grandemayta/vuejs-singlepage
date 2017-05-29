'use strict';

import Vue                                from "vue";
import VueRouter                          from "vue-router";
import features                           from "features";


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: features
})

new Vue({
  router,
  template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app');