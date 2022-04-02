import App from "../App";
import CustomFrom from "../pages/customForm";
import Demo from "../pages/Demo";

export const routerConfig = [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/customForm',
                component: CustomFrom
            },
            {
                path: '/demo',
                component: Demo
            }
        ]
    }
]