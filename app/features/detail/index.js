'use strict';

import { header }                          from "commons";

const detail = {
    name: 'detail',
    path: '/detail',
    components: {
        default: resolve => require(['features/detail/detail.vue'], resolve),
        header: header
    }
}

export default detail;