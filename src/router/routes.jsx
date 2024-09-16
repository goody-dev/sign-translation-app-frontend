import { useAuth } from "../provider/authProvider"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import UserRoute from "./user-route"
import Home from "../Pages/Home"
import ContributeText from "../Pages/ContributeText"
import ContributeVideo from "../Pages/ContributeVideo"
import TranslateText from "../Pages/TranslateText"
import TranslateVideo from "../Pages/TranslateVideo"
import SignUp from "../Pages/SignUp"
import SignIn from "../Pages/SignIn"
import About from "../Pages/About"
import Header from "../Components/Header"
import Layout from "./layout"
import ValidateEntry from "../Pages/ValidateEntry"
import AdminRoute from "./admin-route"
import Report from "../Dashboard/Report"
import Library from "../Dashboard/Library"
import TextAnalytics from "../Dashboard/TextAnalytics"

const routesForAuthenticatedUsers = [
    {
        element: <UserRoute/>,
        path:"/user",
        children: [
            {
                element: <TranslateText/>,
                path: "/user"
            },
            {
                element: <ValidateEntry />,
                path: "/user/validate-entry"
            },
            {
                element: <ContributeText />,
                path: "/user/contribute-text"
            },
            {
                element: <ContributeVideo />,
                path: "/user/contribute-video"
            },
            {
                element: <TranslateText/>,
                path: "/user/translate-text"
            },
            {
                element: <TranslateVideo/>,
                path: "/user/translate-video"
            }
        ]
    },
    {
        element: <AdminRoute/>,
        path: "/admin-dashboard",
        children: [
            {
                element: <Report />,
                path: "/admin-dashboard/"
            },
            {
                element: <Report />,
                path: "/admin-dashboard/reports"
            },
            {
                element: <Library />,
                path: "/admin-dashboard/library"
            },
            {
                element: <TextAnalytics />,
                path: "/admin-dashboard/text-analytics"
            },
        ]
    }
]

const routesForPublic = [
    {
        element: <Home />,
        path: "/",
    },
    {
        element: <About />,
        path: "/about",
    }
]

const routesForNotAuthenticatedUsers = [
    {
        element: <SignUp />,
        path: "/signup",
    },
    {
        element:<SignIn />,
        path: "/signin"
    }
]

const layoutProvider = [
    {element: <Layout/> , path:"/", children: [        
        ...routesForPublic,
        ...routesForAuthenticatedUsers,
        ...routesForNotAuthenticatedUsers,
    ]}
]

const Routes = () => {
    const { token } = useAuth();

    const router = createBrowserRouter([
        ...layoutProvider
    ])
    
    return (
        <RouterProvider router={router}>
            <Header/>
        </RouterProvider>
    )
}



export default Routes