
import Vue from 'vue'
import store from './store';
import router from './router'
import { sync } from 'vuex-router-sync'
import App from './App';

sync(store, router);

const app = new Vue(Vue.util.extend({
    router,
    store
}, App));

export {app}
