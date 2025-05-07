import React, {useContext, useState} from "react";
import {Link, useLoaderData} from "react-router";
import {AuthContext} from "../ContexFile/Context";

const BillsPage = () => {
  const allBill = useLoaderData();
  const {loding} = useContext(AuthContext);
  const [select, setSelect] = useState("All Bill");
  const [bills, setBill] = useState(allBill);
  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  const handleSort = (type) => {
    setSelect(type);
    if (type === "All Bill") {
      setBill(allBill);
    } else {
      const alllBils = allBill.filter((bill) => bill.bill_type === type);
      setBill(alllBils);
    }
  };

  console.log(bills);

  return (
    <div className="mt-5">
      <div className=" flex flex-col gap-5 sm:gap-0 sm:flex-row w-full sm:justify-between mb-10">
        <h1 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl  my-auto sm:mx-0">
          Billing Dashboard
        </h1>

        <div className="flex justify-center ">
          <div className="dropdown dropdown-bottom dropdown-center">
            <div tabIndex={0} role="button" className="m-1 font-bold border-2 p-2 flex justify-center  rounded-lg w-[214px]">
             Sort By : {select}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm font-semibold"
            >
              <li onClick={() => handleSort("All Bill")}> All Bill </li>
              <li onClick={() => handleSort("Credit Card Bill")}>
                {" "}
                Credit Card Bill{" "}
              </li>

              <li onClick={() => handleSort("Electricity Bill")}>
                {" "}
                Electricity Bill{" "}
              </li>
              <li onClick={() => handleSort("Gas Bill")}> Gas Bill </li>
              <li onClick={() => handleSort("Internet Bill")}>
                {" "}
                Internet Bill{" "}
              </li>
              <li onClick={() => handleSort("Water Bill")}> </li>
            </ul>
          </div>
        </div>
      </div>

      {bills.map((bill) => (
        <div
          key={bill.id}
          className="flex  flex-row gap-10 shadow-2xl rounded-lg mb-10 "
        >
          <div className="flex flex-col sm:flex-row w-full gap-5 sm:gap-10 p-5  rounded-lg">
            {loding ? (
              <div className=" flex items-center justify-center my-auto  sm:w-30">
                <span className="loading loading-spinner loading-xl "></span>
              </div>
            ) : (
              <div className="  my-auto flex justify-center h-full w-full items-center sm:w-30">
                <img
                  className="aspect-[4/2]   h-full w-full rounded-lg   flex justify-center items-center  sm:w-30"
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

                <div className="flex flex-col  gap-3 ">
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
                className="btn btn-primary w-full px-20"
              >
                Pay Bill
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BillsPage;
