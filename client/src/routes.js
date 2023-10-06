import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Quotes from "./components/Quotes";
import SignUp from "./components/SignUp";

export const routes = [
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/create',
        element:<Quotes />
    },
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'/signup',
        element:<SignUp />
    },
    {
        path:'/profile',
        element:<Profile />
    }
]