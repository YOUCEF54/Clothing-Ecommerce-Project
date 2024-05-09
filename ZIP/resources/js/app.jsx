import './bootstrap';
import '../css/app.css';
import Nav from "./Components/Nav";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from "./redux/store"
import { createInertiaApp,Link, usePage } from '@inertiajs/react';

import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import "./i18n.js"
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Provider store={store}>
                <Nav />
                <div className={'mt-[4rem]'}>
                    <App {...props} />
                </div>
            </Provider>
    );
    },
    progress: {
        color: '#4B5563',
    },
});
