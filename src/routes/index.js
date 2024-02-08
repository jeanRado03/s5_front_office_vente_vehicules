import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import ChatRoutes from './ChatRoutes';
import AnnonceRoutes from './AnnonceRoutes';
import SearchRoutes from "./SearchRoutes";
import LandingRoutes from "./LandingRoutes";
import AuthRoutes from "./AuthRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, AuthenticationRoutes, ChatRoutes, AnnonceRoutes,SearchRoutes,LandingRoutes,AuthRoutes]);
}
