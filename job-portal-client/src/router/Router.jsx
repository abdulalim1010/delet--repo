import {
  createBrowserRouter,

} from "react-router";
import RootLayout from "../RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Home/Register";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component:Home
      },
      {path:'/header'

      },
      {
        path: '/register',
        Component:Register
      }

    ]
 
  },
]);

export default router;