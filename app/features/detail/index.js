'use strict';

const detail = {
    name: 'detail',
    path: '/detail',
    component: resolve => require(
            ['features/detail/detail.vue'], resolve
        )
}

export default detail;