import Vue from "vue";
import VueRouter from "vue-router";
import { ROUTES } from "@/const";
import Home from "@/pages/Home";
import Clocks from "@/pages/Clocks";
import DigitalClocks from "@/pages/DigitalClocks";
import FingerprintScanner from "@/pages/FingerprintScanner";

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
    {
        path: ROUTES.digitalClocks,
        component: DigitalClocks,
    },
    {
        path: ROUTES.fingerprintScanner,
        component: FingerprintScanner,
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
