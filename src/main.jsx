import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./App.css";
import "./index.css";

import {Route} from "./Routes/Route";
import {RouterProvider} from "react-router";
import {AuthProvider} from "./Components/ContexFile/Context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Route}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
