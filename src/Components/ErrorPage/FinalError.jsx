import React, {useContext} from "react";
import NavBAr from "../NavBAr/NavBAr";
import {Link} from "react-router";
import {AuthContext} from "../ContexFile/Context";
import Loding from "../Loding/Loding";

const FinalError = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  const {loding} = useContext(AuthContext);

  if (loding) {
    return <Loding></Loding>;
  }

  return (
    <div className="">
      <NavBAr></NavBAr>
      <div className="h-screen px-[5%]">
        <div className="text-center mt-10 ">
          <img
            className=" w-full rounded-lg  m-auto aspect-[3/1]"
            src="https://i.ibb.co.com/RG3KXT58/error-page.webp"
            alt=""
          />
        </div>
        <h1 className="text-2xl text-center mt-5 sm:text-5xl font-bold">
          ❌ PAGE NOT FOUND
        </h1>

        <div className="text-center  mt-5 sm:mt-10 ">
          <Link to={"/"} className="">
            <button className="btn  bg-green-600 text-white font-bold  border-black border-2 rounded-lg hover:scale-110 transition-transform">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinalError;
