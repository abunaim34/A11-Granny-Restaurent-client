import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import ErrorPage from "../Components/ErrorPage";
import SingleFood from "../Components/SingleFood";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import FoodPurchase from "../Components/FoodPurchase";
import MyAddedFoods from "../Pages/MyAddedFoods";
import AddAFoods from "../Pages/AddAFoods";
import MyOrdedFoods from "../Pages/MyOrdedFoods";
import PrivateRoutes from "./PrivateRoutes";
import UpdateFoods from "../Components/UpdateFoods";


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
                element: <PrivateRoutes><SingleFood></SingleFood></PrivateRoutes>,
            },
            {
                path: '/purchase/:id',
                element: <PrivateRoutes><FoodPurchase></FoodPurchase></PrivateRoutes>,
                // loader: ({params}) => fetch(`https://granny-resturant-server.vercel.app/foods/${params.name}`)
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>,
            },
            {
                path: '/myAddedFoods',
                element: <PrivateRoutes><MyAddedFoods></MyAddedFoods></PrivateRoutes>,
            },
            {
                path: '/updateFood/:id',
                element: <PrivateRoutes><UpdateFoods></UpdateFoods></PrivateRoutes>,
            },
            {
                path: '/addAFood',
                element: <PrivateRoutes><AddAFoods></AddAFoods></PrivateRoutes>,
            },
            {
                path: '/MyOrderedFood',
                element: <PrivateRoutes><MyOrdedFoods></MyOrdedFoods></PrivateRoutes>,
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
]);

export default router;