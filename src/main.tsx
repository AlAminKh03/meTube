import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./redux/app/Store.ts";
import { Provider } from "react-redux";
import { router } from "./routes/Routes.tsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
