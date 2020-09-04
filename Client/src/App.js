import React from "react";
import "./App.css";
import Heading from "./Components/Heading";
import Balance from "./Components/Balance";
import IncomeExpences from "./Components/IncomeExpences";
import TransactionList from "./Components/TransactionList";
import AddTransaction from "./Components/AddTransaction";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Heading />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
