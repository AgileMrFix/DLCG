import {createBrowserRouter, Navigate} from "react-router-dom";
import Categories from "./pages/Categories";
import App from "./App.jsx";
import {ProductForm} from "./pages/ProductForm.jsx";

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
            },
            {
                path:'/products/new',
                element: <ProductForm key='new' />
            }
        ]
    }
]);

export default router;
