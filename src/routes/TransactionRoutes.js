import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import {Navigate} from "react-router-dom";

// chat routing
const TransactionRouting = Loadable(lazy(() => import('views/profile/Transaction')));


// ==============================|| MAIN ROUTING ||============================== //
const isAuthenticated = localStorage.getItem('simpleUserCarSell') !== null;

const TransactionRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/transaction',
            element:isAuthenticated? <TransactionRouting />:<Navigate to="/annonce" replace={true} />
        }
    ]
};

export default TransactionRoutes;
