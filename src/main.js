
import Vue from 'vue'
import store from './store';
import router from './router'
import { sync } from 'vuex-router-sync'
import App from './App';
import VbComponents from 'vb';
sync(store, router);

Vue.use(VbComponents);
new Vue({
    router,
    store,
    ...App // Object spread copying everything from App.vue
}).$mount('app');
