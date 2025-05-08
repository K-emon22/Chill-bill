import React, {useContext} from "react";
import {AuthContext} from "../ContexFile/Context";
import {Navigate, useLocation} from "react-router";
import Loding from "../Loding/Loding";

const Privaterroute = ({children}) => {
  const {user, loding} = useContext(AuthContext);
  const location = useLocation();

  if (loding) {
    return <Loding></Loding>;
  } else if (!user) {
    return <Navigate to="/login" state={{from: location}} replace />;
  }
  return children;
};

export default Privaterroute;
