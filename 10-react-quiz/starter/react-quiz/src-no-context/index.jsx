import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/App";
import "./index.css";
import BankAccount from "./components/BankAccount";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <BankAccount />
  </React.StrictMode>
);
