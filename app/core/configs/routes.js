'use strict';

import Vue                                from "vue";
import VueRouter                          from "vue-router";
import features                           from "features";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: features
});

export default router;