import {createBrowserRouter} from "react-router";
import Root from "../Root/Root";
import Registration from "../Components/Authentication/Registration";
import HomePage from "../Components/HomePage/HomePage";
import Login from "../Components/Authentication/Login";
import BillsPage from "../Components/BillsPage/BillsPage";
import MyProfile from "../Components/MyProfile/MyProfile";
import UpdateInfo from "../Components/MyProfile/UpdateInfo";
import Loding from "../Components/Loding/Loding";
import SingleBill from "../Components/BillsPage/SingleBill/SingleBill";

export const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("/organization.json"),
        hydrateFallbackElement: <Loding></Loding>,
      },
      {path: "/registration", element: <Registration></Registration>},
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/bills",
        element: <BillsPage></BillsPage>,
        loader: () => fetch("/bill.json"),
        hydrateFallbackElement: <Loding></Loding>,
      },
      {
        path: "/profile",
        element: <MyProfile></MyProfile>,
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
  {},
]);
