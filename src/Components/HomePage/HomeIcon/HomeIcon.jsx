import {useContext} from "react";
import {Link, useLoaderData} from "react-router";
import {AuthContext} from "../../ContexFile/Context";


const HomeIcon = () => {
  const {user} = useContext(AuthContext);

  const organization = useLoaderData();
  const {loding} = useContext(AuthContext);

  return (
    <div>
      <h1 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 mx-10 sm:mx-0 ">
        Trusted Utility Service Brands
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  mx-10 sm:mx-0">
        {organization.map((org) => (
          <div key={org.id} className="border flex  flex-col gap-1 sm:gap-2 rounded-lg ">
            <div className="">
              {loding ? (
                <div className="w-full aspect-[4/2] border-b mx-auto h-fit px-2 py-1 flex justify-center items-center">
                  <span className="loading loading-spinner loading-xl"></span>
                </div>
              ) : (
                <img
                  className="w-full aspect-[4/2] border-b mx-auto h-fit px-2 py-1"
                  src={org.img}
                  alt=""
                />
              )}
            </div>
            <h1 className="text-center text-2xl font-bold md:text-3xl ">
              {org.name}
            </h1>
            <h1 className="text-center font-bold">{org.payment}</h1>
            <p className="px-2  text-justify ">
              {" "}
              <span className="font-semibold">Description : </span>
              {org.description}
            </p>
            <div className="text-center pb-2">
              <button className="btn btn-primary ">
                {user ? (
                  <Link to={"/bills"}> Pay Now</Link>
                ) : (
                  <Link to={"/login"}>Pay Now</Link>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeIcon;
