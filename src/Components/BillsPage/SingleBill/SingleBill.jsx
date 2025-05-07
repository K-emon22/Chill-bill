import React from "react";
import {useLoaderData, useParams} from "react-router";

const SingleBill = () => {
  const {id} = useParams();
  const parseid = parseInt(id);

  const bill = useLoaderData();

  const findedData = bill.find((sbill) => sbill.id === parseid);

  console.log(findedData);

  return <div>{parseid}</div>;
};

export default SingleBill;
