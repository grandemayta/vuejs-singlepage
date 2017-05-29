'use strict';

const home = {
    name: 'home',
    path: '/', 
    component: resolve => require(
            ['features/home/home.vue'], resolve
        )
}

export default home;