import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import Proprietario from './Proprietario.vue';
import Cliente from './Cliente.vue';
import App from './App.vue'
import Login from './Login.vue';

const routes = [
    { path: '/', component: Login },
    { path: '/proprietario', component: Proprietario },
    { path: '/cliente', component: Cliente },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

Vue.createApp(App).use(router).mount('#app');