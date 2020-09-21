import React from 'react';
import {
    NotFoundPage,
    LoginPage,
    LogoutPage,
    DashboardPage,
    ViewPage,
    SystemViewPage,
    SignupPage
} from './../../pages';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <LoginPage />
    },
    {
        path: '/Signup',
        exact: true,
        main: () => <SignupPage />
    },
    {
        path: '/logout',
        exact: false,
        main: ({ history }) => <LogoutPage history={history} />
    },
    {
        path: '/Dashboard',
        exact: false,
        main: () => <DashboardPage  />
    },
    {
        path: '/Views',
        exact: false,
        main: () => <ViewPage />
    },
    {
        path: '/SystemViews',
        exact: false,
        main: () => <SystemViewPage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    },
  
];

export default routes;