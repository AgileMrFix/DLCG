import {createBrowserRouter, Navigate} from "react-router-dom";
import Categories from "./pages/Categories";
import App from "./App.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path:'/',
                element: <Navigate to={'/categories'}/>
            },
            {
                path:'/categories',
                element: <Categories/>
            }
        ]
    }
]);

export default router;
