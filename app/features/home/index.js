'use strict';

import { header }                       from "commons";


const home = {
    name: 'home',
    path: '/', 
    components: {
        default: resolve => require(['features/home/home.vue'], resolve),
        header: header
    }
};

export default home;