import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/soundsList',
            name: 'soundsList',
            component: () => import('../pages/sounds-list-page/SoundsListPage.vue')
        },
        {
            path: '/flashBang',
            name: 'flashBang',
            component: () => import('../pages/flash-bang-page/FlashBangPage.vue')
        },
        {
            path: '/sus',
            name: 'JohnHutcherson',
            component: () => import('/src/pages/john-hutcherson-page/JohnHuthersonPage.vue')
        }
    ]
});

export default router;