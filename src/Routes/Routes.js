import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Pages/404/NotFound";
import Blogs from "../Pages/Blogs/Blogs";
import Checkout from "../Pages/CheckOut/Checkout";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/FAQ/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async ()=> fetch('https://course-place-server-pulok-thedeveloper.vercel.app/courses'),
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: async ()=> fetch('https://course-place-server-pulok-thedeveloper.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                loader: ({params})=> fetch(`https://course-place-server-pulok-thedeveloper.vercel.app/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/checkout/:id',
                loader: ({params})=> fetch(`https://course-place-server-pulok-thedeveloper.vercel.app/courses/${params.id}`),
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])