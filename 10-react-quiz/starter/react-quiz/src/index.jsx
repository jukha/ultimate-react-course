import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { QuizProvider } from "./contexts/QuizContext";
// import BankAccount from "./components/BankAccount";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
      {/* <BankAccount /> */}
    </QuizProvider>
  </React.StrictMode>
);
