import React, {useContext} from "react";
import {Link, useLoaderData} from "react-router";
import {AuthContext} from "../ContexFile/Context";

const BillsPage = () => {
  const allBill = useLoaderData();
  const {loding} = useContext(AuthContext);

  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div className="mt-10">
      <h1 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 mx-10 sm:mx-0">
        Billing Dashboard
      </h1>
      {allBill.map((bill) => (
        <div
          key={bill.id}
          className="flex flex-row gap-10 shadow-2xl rounded-lg mb-10 "
        >
          <div className="flex flex-col sm:flex-row w-full gap-5 sm:gap-10 p-5  rounded-lg">
            {loding ? (
              <div className=" flex items-center justify-center my-auto  sm:w-30">
                <span className="loading loading-spinner loading-xl "></span>
              </div>
            ) : (
              <div className="  my-auto flex justify-center h-full w-full items-center sm:w-30">
                <img
                  className="aspect-[4/2] h-full w-full rounded-lg sm:aspect-auto  flex justify-center items-center  sm:w-30"
                  src={bill.image}
                  alt=""
                />
              </div>
            )}

            <div className="flex flex-col justify-center w-full items-center sm:items-start my-auto gap-3">
              <div className=" flex flex-col gap-2 ">
                <h1 className="font-bold text-center sm:text-start">
                  {" "}
                  {bill.bill_type}
                </h1>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-10">
                  <h1>
                    <span className="font-semibold text-black/60">
                      Amount:{" "}
                    </span>{" "}
                    <span className="font-bold">{bill.amount}</span>{" "}
                    <span className="font-semibold text-black"> Taka </span>
                  </h1>

                  <h1 className="text-center sm:text-start">
                    <span className="font-semibold text-black/60">
                      Provider:{" "}
                    </span>{" "}
                    <span className="font-bold">{bill.organization}</span>
                  </h1>
                </div>
              </div>
              <h1>
                {" "}
                <span className="font-semibold text-black/60">
                  Due Date :
                </span>{" "}
                {bill.dueDate}
              </h1>

              <Link
                to={`/BillDetails/${bill.id}`}
                className="btn btn-primary w-fit px-20"
              >
                Pay Bill{" "}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BillsPage;
