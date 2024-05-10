import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import ErrorPage from "../Components/ErrorPage";
import SingleFood from "../Components/SingleFood";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/allFoods',
                element: <AllFoods></AllFoods>,
            },
            {
                path: '/singleFood/:name',
                element: <SingleFood></SingleFood>,
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>,
            },
        ]
    },
]);

export default router;