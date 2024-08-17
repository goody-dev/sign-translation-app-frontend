import { useAuth } from "../provider/authProvider"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
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

const routesForAuthenticatedUsers = [
    {
        element: <ProtectedRoute/>,
        path:"/user",
        children: [
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