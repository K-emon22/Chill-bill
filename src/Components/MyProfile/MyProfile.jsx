import React, {useContext} from "react";
import {AuthContext} from "../ContexFile/Context";
import {MdOutlineEdit} from "react-icons/md";
import {Link} from "react-router";
const MyProfile = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  const {user} = useContext(AuthContext);
  console.log(user);
  console.log(user?.displayName);
  const photo = user?.photoURL;
  console.log(user?.photoURL);

  return (
    <div className="flex justify-center mb-50 ">
      <div className="flex flex-col mt-10 relative">
        <div className="  border-4 border-green-500 h-[228px] w-[228px] flex justify-center items-center rounded-full">
          <img
            className="w-45 rounded-full"
            src={photo}
            alt=""
            referrerPolicy="no-referrer"
          />
        </div>
        <h1 className="text-center font-semibold mt-2">{user?.email}</h1>
        <h1 className=" font-bold text-2xl mt-5 text-center">
          {user?.displayName}
        </h1>
        <div className="absolute top-40 left-43  h-12 w-12 bg-white border-2 rounded-full">
          <span className="flex justify-center h-full w-full items-center">
            <Link to={"/updateinfo"}>
              {" "}
              <MdOutlineEdit className="h-7 w-7" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
