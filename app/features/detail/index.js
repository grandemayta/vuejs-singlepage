'use strict';

import { header }                          from "commons";


const detail = {
    name: 'detail',
    path: '/detail',
    components: {
        default: resolve => require([
            './components/default/detail-default-component.vue'
        ], resolve),
    },
    header: header
};

export default detail;