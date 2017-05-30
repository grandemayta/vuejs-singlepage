'use strict';

import Vue                                from "vue";
import VueRouter                          from "vue-router";
import VueResource                        from "vue-resource";
import router                             from "configs/router";
import transitions                        from "configs/transitions";


Vue.use(VueRouter);
Vue.use(VueResource);

new Vue({
  router
}).$mount('#app');