import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () =>
            import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
    },
    {
        path: '/dashboard',
        name: "dashboard",
        component: () =>
            import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
    },
    {
        path: '/dashboard/:page',
        name: "dashboard",
        component: () =>
            import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
    },
    {
        path: '/about',
        name: "about",
        component: () =>
            import(/* webpackChunkName: "Dashboard" */ "../views/About.vue"),
    },
    {
        path: '/fastcost',
        name: "fastсost",
        component: () =>
            import(/* webpackChunkName: "Dashboard" */ "../views/FastCost.vue"),
    },
    {
        path: '/add/payment/:category',
        name: "addPayment",
        component: () =>
            import(/* webpackChunkName: "Dashboard" */ "../components/AddPaymentForm.vue"),
    },
    {
        path: '/notfound',
        name: "notfound",
        component: () =>
            import(/* webpackChunkName: "Dashboard" */ "../views/NotFound.vue"),
    },
    {
        path: '*',
        component: () =>
            import(/* webpackChunkName: "Dashboard" */ "../views/NotFound.vue"),
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