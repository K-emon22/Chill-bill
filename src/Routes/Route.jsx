import {createBrowserRouter} from "react-router";
import Root from "../Root/Root";
import Registration from "../Components/Authentication/Registration";
import HomePage from "../Components/HomePage/HomePage";
import Login from "../Components/Authentication/Login";
import BillsPage from "../Components/BillsPage/BillsPage";
import MyProfile from "../Components/MyProfile/MyProfile";
import UpdateInfo from "../Components/MyProfile/UpdateInfo";

import SingleBill from "../Components/BillsPage/SingleBill/SingleBill";
import Privaterroute from "../Components/Privaterroute/Privaterroute";

export const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("/organization.json"),
      },
      {path: "/registration", element: <Registration></Registration>},
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/bills",
        element: (
          <Privaterroute>
            <BillsPage></BillsPage>
          </Privaterroute>
        ),
        loader: () => fetch("/bill.json"),
      },
      {
        path: "/profile",
        element: (
          <Privaterroute>
            <MyProfile></MyProfile>
          </Privaterroute>
        ),
      },
      {
        path: "/updateinfo",
        element: <UpdateInfo></UpdateInfo>,
      },
      {
        path: "/BillDetails/:id",
        element: <SingleBill></SingleBill>,
        loader: () => fetch("/bill.json"),
      },
    ],
  },
]);
