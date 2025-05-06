import React from "react";
import {Outlet} from "react-router";
import NavBAr from "../Components/NavBAr/NavBAr";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="">
      <NavBAr></NavBAr>

      <div className="mx-[5%]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
