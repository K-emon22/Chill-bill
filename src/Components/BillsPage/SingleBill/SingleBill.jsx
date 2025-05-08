import React, {useEffect, useState} from "react";
import {useLoaderData, useNavigate, useParams} from "react-router";
import {toast} from "react-toastify";
const SingleBill = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
  const navigate = useNavigate();
  const {id} = useParams();
  const parseid = parseInt(id);

  const bill = useLoaderData();

  const findedData = bill.find((sbill) => sbill.id === parseid);
  const [button, setButton] = useState(false);

  useEffect(() => {
    const paid = JSON.parse(localStorage.getItem("paid")) || [];
    if (paid.includes(parseid)) {
      setButton(true);
    }
  }, [parseid]);

  const handlePay = () => {
    const paid = JSON.parse(localStorage.getItem("paid")) || [];
    if (paid.includes(parseid)) {
      toast.warning("Already paid!");
      return;
    }

    toast.success("Payment done ");
    setTimeout(() => {
      navigate("/bills");
    }, 1000);
    setButton(true);
    const updatedPaid = [...paid, parseid];
    localStorage.setItem("paid", JSON.stringify(updatedPaid));

    const total = parseFloat(localStorage.getItem("totalPaid")) || 0;
    const newTotal = total + parseFloat(findedData.amount);
    localStorage.setItem("totalPaid", newTotal.toString());
  };

  return (
    <div className="min-h-[calc(100vh-449px)]">
      <div className="grid grid-cols-2 gap-2 sm:gap-5 shadow-2xl mt-20 ">
        <div className="justify-center items-center flex rounded-lg m-2 border relative">
          <div className="aspect-[2/1] h-full w-full mx-auto ">
            <img
              className=" m-auto h-full w-full rounded-lg p-2"
              src={findedData.image}
              alt=""
            />
          </div>
          <div>
            <img
              className=" sm:w-20 sm:h-20 w-10 h-10 absolute bottom-2 right-2"
              src={findedData.icon}
              alt=""
            />
          </div>
        </div>
        <div className=" p-2 flex flex-col  gap-2 justify-between h-full  ">
          <h1 className="text-start ">
            <span className=" font-semibold sm:font-bold text-black/60">
              Provider:{" "}
            </span>{" "}
            <span className="font-semibold sm:font-bold">
              {findedData.organization}
            </span>
          </h1>
          <h1 className="font-bold text-start ">{findedData.bill_type}</h1>
          <h1>
            <span className="font-semibold text-black/60">Amount: </span>{" "}
            <span className="font-bold">{findedData.amount}</span>{" "}
            <span className="font-semibold text-black"> Taka </span>
          </h1>
          <h1>
            <span className="font-semibold text-black/60">
              Due Date : <br className=" sm:hidden" />
            </span>{" "}
            {findedData.dueDate}
          </h1>
          <button
            onClick={handlePay}
            className={`btn btn-primary w-full border-black border-2 ${
              button && "cursor-not-allowed   bg-gray-400 border-2"
            }`}
          >
            Pay Bill{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBill;
