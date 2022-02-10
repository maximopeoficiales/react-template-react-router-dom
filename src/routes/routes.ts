import { lazy, LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";
type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: JSXComponent | LazyExoticComponent<JSXComponent>;
    name: string;
}
const Lazy1 = lazy(() => import("../lazyload/pages/LazyPage1"));
const Lazy2 = lazy(() => import("../lazyload/pages/LazyPage2"));
const Lazy3 = lazy(() => import("../lazyload/pages/LazyPage3"));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: "Lazy1"
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: "Lazy2"
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: "Lazy3"
    },
]