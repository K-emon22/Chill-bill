import React, {useContext, useState} from "react";
import {AuthContext} from "../ContexFile/Context";
import {Link, useNavigate} from "react-router";
import {updateProfile} from "firebase/auth";
import {FaGoogle} from "react-icons/fa";
const Registration = () => {
  const [error, setError] = useState("");

  const [erMessage, setErMessage] = useState("");

  const {createuser, googleLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    console.log(photo);

    createuser(email, password)
      .then((result) => {
        const user = result.user;

        console.log(result);

        updateProfile(user, {photoURL: photo, displayName: name});

        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setError(` Failed To Register, ${error.code}`);
      });
  };
  const handleLoginGoogle = (e) => {
    e.preventDefault();
    googleLogin().then(() => {
      navigate("/");
    });
  };

  const handleError = (e) => {
    const value = e.target.value;
    setErMessage(value);
    if (value.length < 6) {
      setError("Password length must be atleast 6 character.");
      return;
    } else if (!/[a-z]/.test(value)) {
      setError("Password must have an Lowercase letter.");
      return;
    } else if (!/[A-Z]/.test(value)) {
      setError("Password must have an Uppercase letter.");

      return;
    }
    setError("");
  };

  return (
    <div className=" ">
      <h1 className="text-center  mt-10 font-bold md:text-5xl text-2xl">
        Sign up to get started!
      </h1>

      <form
        onSubmit={handleSignup}
        className="flex items-center flex-col gap-4  min-h-[calc(100vh-410px)]"
      >
        <h1 className="text-center  mt-10 font-bold text-2xl">Register Now</h1>

        <input
          className="border-2  w-4/5 md:w-3/6 md:h-13 font-semibold p-2 h-10  shadow-2xl rounded-full"
          type="name"
          name="name"
          placeholder="Enter your name"
          required
        />

        <input
          className="border-2  w-4/5 md:w-3/6 md:h-13 font-semibold p-2 h-10  shadow-2xl rounded-full"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <input
          onChange={handleError}
          className="border-2  w-4/5 md:w-3/6 md:h-13 font-semibold p-2 h-10  shadow-2xl rounded-full"
          type="password"
          name="password"
          value={erMessage}
          placeholder="Enter your password"
          required
        />
        <input
          className="border-2  w-4/5 md:w-3/6 md:h-13 font-semibold p-2 h-10 rounded-xl shadow-2xl"
          type="text"
          name="photo"
          placeholder="Enter your Photo url "
          required
        />
        <button
          onClick={handleLoginGoogle}
          type="button"
          className="border-2 cursor-pointer flex flex-row justify-center gap-3 hover:bg-blue-300 transition-transform w-4/5 md:w-3/6 md:h-13 font-semibold p-2 h-12 rounded-full shadow-2xl"
        >
          {" "}
          <span className="my-auto">
            <FaGoogle className="my-auto w-8 h-7  " />
          </span>{" "}
          <span className="my-auto"> Login With Google </span>
        </button>
        <div>{error && <h1 className="text-red-600"> {error}</h1>}</div>
        <h1>
          {" "}
          Already have a account?{" "}
          <Link to={"/login"}>
            {" "}
            <span className="font-semibold text-blue-500"> Login </span>
          </Link>{" "}
        </h1>

        <button type="submit" className="btn btn-primary ">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Registration;
