import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from '../views/Dashboard.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';
import FastCost from '../views/FastCost.vue';
import AddPayment from '../components/AddPaymentForm.vue';


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Dashboard,
    },
    {
        path: '/dashboard',
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: '/dashboard/:page',
        name: "dashboard",
        component: Dashboard
    },
    {
        path: '/about',
        name: "about",
        component: About
    },
    {
        path: '/fastcost',
        name: "fastсost",
        component: FastCost,
    },
    {
        path: '/add/payment/:category',
        name: "addPayment",
        component: AddPayment,
    },
    {
        path: '/notfound',
        name: "notfound",
        component: NotFound
    },
    {
        path: '*',
        component: NotFound
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
})

const userAuth = true;

router.beforeEach((to, from, next) => {
    if (to.name !== "notfound" && !userAuth) {
        next({
            name: "notfound"
        });
    } else {
        next();
    }
})

const getTitleByRoutes = routeName => {
    return {
        'dashboard': "Есть страница трат!",
        'about': "Страница о сервисе",
        'fastсost': "Быстрая запись",
        'addPayment': "Добавление записи",
        'notfound': "Страница не найдена",
    }[routeName];
}

router.afterEach((to) => {
    document.title = getTitleByRoutes(to.name);
});

export default router