'use strict';

const Home = resolve => require(['features/home/home.js'], m => resolve(m.default));

const home = {
    path: '/', 
    component: Home
}

export default home;