import {createBrowserRouter} from "react-router";
import Root from "../Root/Root";
import Registration from "../Components/Authentication/Registration";
import HomePage from "../Components/HomePage/HomePage";
import Login from "../Components/Authentication/Login";
import BillsPage from "../Components/BillsPage/BillsPage";
import MyProfile from "../Components/MyProfile/MyProfile";

export const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {path: "/registration", element: <Registration></Registration>},
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/bills",
        element: <BillsPage></BillsPage>,
      },
      {
        path: "/profile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
  {},
]);
