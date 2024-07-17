import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Users } from "./pages/users";
import Contact from "./pages/contact";

export const route = createBrowserRouter ([
    {
        path: "/",
        element: <Home/>,
      },
    {
        path: "/users",
        element: <Users/>,
      },
    {
        path: "/contact",
        element: <Contact/>,
      },
])