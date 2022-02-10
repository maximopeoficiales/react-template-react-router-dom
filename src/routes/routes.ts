import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";
export interface Route {
    to: string;
    path: string;
    component: () => JSX.Element;
    name: string;
}
export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        component: LazyPage1,
        name: "Lazy1"
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        component: LazyPage2,
        name: "Lazy2"
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        component: LazyPage3,
        name: "Lazy3"
    },
]