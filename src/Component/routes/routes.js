import { createBrowserRouter } from "react-router-dom";
import About from "../pages/about/about";
import Home from "../pages/Home/Home";
import Login from "../pages/User/Login";
import SingUp from "../pages/User/SingUp";
import Main from "../Root/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: '/singUp',
                element: <SingUp></SingUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;