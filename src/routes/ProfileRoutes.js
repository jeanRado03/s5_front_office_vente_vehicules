import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import {Navigate} from "react-router-dom";

// chat routing
const ProfileRouting = Loadable(lazy(() => import('views/profile/ProfileContent')));


const isAuthenticated = localStorage.getItem('simpleUserCarSell') !== null;

const ProfileRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/profile',
            element: isAuthenticated?<ProfileRouting />:<Navigate to="/annonce" replace={true} />
        }
    ]
};

export default ProfileRoutes;
