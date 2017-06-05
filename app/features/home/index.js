'use strict';

import { header }                       from "commons";


const home = {
    name: 'home',
    path: '/', 
    components: {
        default: resolve => require([
            './components/default/home-default-component.vue'
        ], resolve),
        header: header
    }
};

export default home;