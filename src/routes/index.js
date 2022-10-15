import routes from '`/config/routes';

//layout

import HeaderOnly from '`/layout/HeaderOnly';

//pages

import Home from '`/pages/Home';
import Following from '`/pages/Following';
import Profile from '`/pages/Profile';
import Upload from '`/pages/Upload';
import Serch from '`/pages/Serch';

//puplic routes
const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.following, component: Following },
    { path: routes.profile, component: Profile },
    { path: routes.upload, component: Upload, layout: HeaderOnly },
    { path: routes.serch, component: Serch, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
