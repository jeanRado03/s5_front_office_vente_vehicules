import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import LandingLayout from "../layout/landingLayout";
const SearchRouting = Loadable(lazy(() => import('views/recherche/Recherche')));
const isAuthenticated = localStorage.getItem('simpleUserCarSell') !== null;

const SearchRoutes = {
  path: '/',
  element: isAuthenticated ? <MainLayout /> : <LandingLayout />,
  children: [
    {
      path: '/recherche',
      element: <SearchRouting />
    }
  ]
};
export default SearchRoutes;
