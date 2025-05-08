import React, {useContext, useState} from "react";
import {AuthContext} from "../ContexFile/Context";
import {useLocation, useNavigate} from "react-router";
import {Link} from "react-router";
import {FaGoogle} from "react-icons/fa";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");

  const [erMessage, setErMessage] = useState("");

  const {loginUser, googleLogin, forgotPass} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result);
        navigate(from, {replace: true});
      })
      .catch((error) => {
        console.error(error);
        setError(` Failed To Login, ${error.code}`);
      });
  };

  const handleLoginGoogle = (e) => {
    e.preventDefault();
    googleLogin().then(() => {
      navigate(from, {replace: true});
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

  const forgotpassord = () => {
    const email = document.getElementById("email").value;

    if (!email) {
      setError("Enter your email first.");
      return;
    }

    forgotPass(email)
      .then(() => {
        alert("Password reset email sent! Check your inbox.");
      })
      .catch((error) => setError(`Failed to send reset email: ${error.code}`));
  };

  return (
    <div className=" ">
      <h1 className="text-center  mt-20 font-bold md:text-5xl text-2xl">
        Login to get started!
      </h1>

      <form
        onSubmit={handleLogin}
        className="flex items-center flex-col gap-5 justify-center min-h-[calc(100vh-210px)]"
      >
        <h1 className="text-center  mt-20 font-bold md:text-5xl text-2xl">
          Login Now
        </h1>

        <input
          className="border-2 w-4/5 md:w-3/6 md:h-15  font-semibold p-2 h-12 rounded-full shadow-2xl"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          required
        />

        <input
          onChange={handleError}
          className="border-2  w-4/5 md:w-3/6 md:h-15 font-semibold p-2 h-12 rounded-full shadow-2xl"
          type="password"
          name="password"
          value={erMessage}
          placeholder="Enter your password"
          required
        />
        <button
          onClick={handleLoginGoogle}
          type="button"
          className="border-2 cursor-pointer flex flex-row justify-center gap-3 hover:bg-blue-300 transition-transform w-4/5 md:w-3/6 md:h-15 font-semibold p-2 h-12 rounded-full shadow-2xl"
        >
          {" "}
          <span className="my-auto">
            <FaGoogle className="my-auto w-8 h-7  " />
          </span>{" "}
          <span className="my-auto"> Login With Google </span>
        </button>

        <div>{error && <h1 className="text-red-600"> {error}</h1>}</div>
        <h1 onClick={forgotpassord}> Fotgot Password? </h1>
        <h1>
          Don't have a account?{" "}
          <Link to={"/registration"}>
            {" "}
            <span className="font-semibold text-blue-500"> Register </span>
          </Link>{" "}
        </h1>

        <button type="submit" className="btn btn-primary ">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
