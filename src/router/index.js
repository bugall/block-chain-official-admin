import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Salon from '@/components/salon/Index';
import Talent from '@/components/talent/Index';
import Areas from '@/components/areas/Index';
import Technological from '@/components/technological/Index';
import News from '@/components/news/Index';
import About from '@/components/about/Index';

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/index',
        name: 'Index',
        component: Index
    }, {
        path: '/salon',
        name: 'Salon',
        component: Salon
    }, {
        path: '/salon/detail/:id',
        name: 'Salon',
        component: Salon
    }, {
        path: '/talent',
        name: 'talent',
        component: Talent
    }, {
        path: '/talent/detail/:id',
        name: 'talent',
        component: Talent
    }, {
        path: '/areas',
        name: 'areas',
        component: Areas
    }, {
        path: '/technological',
        name: 'technological',
        component: Technological
    }, {
        path: '/technological/detail/:id',
        name: 'technological_detail',
        component: Technological
    }, {
        path: '/news',
        name: 'news',
        component: News
    }, {
        path: '/news/detail/:id',
        name: 'news',
        component: News
    }, {
        path: '/about',
        name: 'about',
        component: About
    }]
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;
