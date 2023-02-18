import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
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
                path: '/singUp',
                element: <SingUp></SingUp>
            }
        ]
    }
])

export default router;