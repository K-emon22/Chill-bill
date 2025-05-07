import React, {useContext} from "react";
import {Outlet, useNavigation} from "react-router";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBAr from "../Components/NavBAr/NavBAr";
import Footer from "../Components/Footer/Footer";
import {AuthContext} from "../Components/ContexFile/Context";
import Loding from "../Components/Loding/Loding";

const Root = () => {
  const {loding} = useContext(AuthContext);
  const navigation = useNavigation();
  const isRouteChanging = navigation.state === "loading";
  const isLoading = loding || isRouteChanging;
  return (
    <div className="">
      <NavBAr></NavBAr>

      <div className="mx-[5%]">
        {isLoading ? <Loding> </Loding> : <Outlet></Outlet>}
      </div>

      <Footer></Footer>
      <ToastContainer
        style={{top: "70px", width: "85%"}}
        position="top-right"
        autoClose={1000}
      />
    </div>
  );
};

export default Root;
