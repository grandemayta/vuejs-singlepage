'use strict';

import VueRouter                          from "vue-router";
import features                           from "features";


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: features
});

export default router;