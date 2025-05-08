import {useContext, useEffect, useState} from "react";
import {HiMenuAlt3} from "react-icons/hi";
import {HiOutlineX} from "react-icons/hi";
import {Link, NavLink} from "react-router";
import {AuthContext} from "../ContexFile/Context";

const NavBAr = () => {
  const [opMenu, setOpmenu] = useState(true);
  const {user, loding, logout} = useContext(AuthContext);
  const [taka, setTaka] = useState(10000);

  useEffect(() => {
    const totalBill = parseFloat(localStorage.getItem("totalPaid")) || 0;
    setTaka(10000 - totalBill);
  }, [localStorage.getItem("totalPaid")]);

  const photo = user?.photoURL;

  return (
    <div className="sticky top-0 z-50 bg-white mx-[5%]">
      <nav className=" justify-between flex flex-row h-[71px]  ">
        <div className="flex flex-row gap-2">
          {loding ? (
            <div className="w-[60px] my-auto">
              <span className="loading loading-xl my-auto  loading-spinner "></span>
            </div>
          ) : (
            <div className="my-auto">
              <img
                className="w-[60Px] my-auto rounded-lg shadow-2xl"
                src={"https://i.ibb.co.com/3yt4wYsW/image-7-2.jpg"}
                alt=""
              />
            </div>
          )}

          <h1
            className={`font-bold ${
              user ? "" : "text-[15px]"
            } font-mono my-auto text-2xl sm:text-3xl font`}
          >
            ChillBill
          </h1>
        </div>
        <div className="hidden md:block m-auto">
          <div className="my-auto flex flex-row gap-2 font-semibold mx-auto ">
            <NavLink
              className={({isActive}) =>
                `p-1  lg:px-2 ${
                  isActive ? "bg-[rgb(238,102,102)] rounded-lg text-white" : ""
                }`
              }
              to={"/"}
            >
              <h1>Home</h1>
            </NavLink>

            <NavLink
              className={({isActive}) =>
                `p-1 lg:px-2 ${
                  isActive ? "bg-[rgb(238,102,102)] rounded-lg text-white" : ""
                }`
              }
              to={"/bills"}
            >
              {" "}
              <h1> Bills Page</h1>
            </NavLink>

            <NavLink
              className={({isActive}) =>
                `p-1 lg:px-2 ${
                  isActive ? "bg-[rgb(238,102,102)] rounded-lg text-white" : ""
                }`
              }
              to={"/profile"}
            >
              <h1>My Profile</h1>
            </NavLink>
          </div>
        </div>

        <div className="  my-auto flex flex-row">
          <div className={`ml-auto my-auto md:block`}>
            {loding ? (
              <div className="flex justify-end">
                <span className="loading loading-spinner loading-xl"></span>
              </div>
            ) : user ? (
              <div className="flex flex-row gap-3  justify-end">
                <div className="dropdown dropdown-end ">
                  <div tabIndex={0} role="button" className=" m-1">
                    <div className=" ">
                      <img
                        className=" md:w-[60px] w-[40px] rounded-full   "
                        src={photo}
                        alt=""
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm border-2 bg-white"
                  >
                    <li className="flex flex-row ">
                      <h1>
                        <span className="font-semibold">Balance: </span>
                        <span className="font-bold">{taka}</span>Taka
                      </h1>
                    </li>
                    <li className="">
                      <Link to={"/"}>
                        <button
                          onClick={logout}
                          className=" btn   btn-primary my-auto "
                        >
                          Logout{" "}
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex justify-end">
                <div>
                  <Link to={"/login"}>
                    <button className="btn btn-sm ">Login </button>
                  </Link>
                  <Link to={"/registration"}>
                    {" "}
                    <button className="btn btn-sm  ">Register </button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div
            onClick={() => setOpmenu(!opMenu)}
            className="dropdown dropdown-end flex justify-end my-auto  md:hidden relative"
          >
            <div tabIndex={0} role="button" className=" m-1">
              {opMenu ? (
                <HiMenuAlt3 className="h-7 w-7 " />
              ) : (
                <HiOutlineX className="h-7 w-7 " />
              )}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 top-10 border-2 absolute rounded-box z-1 w-52 font-semibold p-2 shadow-sm"
            >
              <NavLink
                className={({isActive}) =>
                  `p-1  lg:px-2 ${
                    isActive
                      ? "bg-[rgb(238,102,102)] rounded-lg text-white"
                      : ""
                  }`
                }
                to={"/"}
              >
                <h1>Home</h1>
              </NavLink>

              <NavLink
                className={({isActive}) =>
                  `p-1 lg:px-2 ${
                    isActive
                      ? "bg-[rgb(238,102,102)] rounded-lg text-white"
                      : ""
                  }`
                }
                to={"/bills"}
              >
                {" "}
                <h1> Bills Page</h1>
              </NavLink>

              <NavLink
                className={({isActive}) =>
                  `p-1 lg:px-2 ${
                    isActive
                      ? "bg-[rgb(238,102,102)] rounded-lg text-white"
                      : ""
                  }`
                }
                to={"/profile"}
              >
                <h1>My Profile</h1>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBAr;
