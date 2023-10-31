import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/SignUp/Register";
import CheckOut from "../Pages/Check out/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const MainRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/checkOut/:id',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/bookings',
                element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ],
    }
])

export default MainRoute;