import Vue from "vue";
import VueRouter from "vue-router";
import { ROUTES } from "@/const";
import Home from "@/pages/Home";
import Clocks from "@/pages/Clocks";

Vue.use(VueRouter);

const routes = [
    {
        path: ROUTES.home,
        component: Home,
    },
    {
        path: ROUTES.clocks,
        component: Clocks,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
