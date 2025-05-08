import React, {useContext} from "react";
import {AuthContext} from "../ContexFile/Context";
import {updateProfile} from "firebase/auth";
import {useNavigate} from "react-router";

const UpdateInfo = () => {
  const {user} = useContext(AuthContext);

  console.log(user);
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const profile = e.target.profile.value;

    console.log("emon");
    updateProfile(user, {
      displayName: name,
      photoURL: profile,
    });
    navigate("/profile");
  };

  return (
    <div className="min-h-[calc(100vh-480px)] mt-10">
      <form onSubmit={handleUpdate} className="">
        <h1 className="text-center font-bold text-xl sm:text-2xl">
          Edit Your Name & Profile Picture.{" "}
        </h1>
        <div className="flex flex-col gap-5 p-2 justify-center items-center">
          <input
            className="border-2  w-4/5 md:w-3/6 md:h-15 font-semibold p-2 h-12 rounded-full shadow-2xl"
            type="text"
            name="name"
            placeholder="Enter your name."
            required
          />
          <input
            className="border-2  w-4/5 md:w-3/6 md:h-15 font-semibold p-2 h-12 rounded-full shadow-2xl"
            type="text"
            name="profile"
            placeholder="Enter your photo url. (valid url)"
            required
          />
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateInfo;
