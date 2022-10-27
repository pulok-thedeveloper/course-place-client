import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Pages/404/NotFound";
import Blogs from "../Pages/Blogs/Blogs";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/FAQ/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Premium from "../Pages/Premium/Premium";
import Register from "../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async ()=> fetch('http://localhost:5000/courses'),
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: async ()=> fetch('http://localhost:5000/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                loader: ({params})=> fetch(`http://localhost:5000/courses/${params.id}`),
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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/premium',
                element: <Premium></Premium>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
])