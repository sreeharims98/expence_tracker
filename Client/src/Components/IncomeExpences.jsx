import React, { useContext } from "react";
import "../App.css";
import { GlobalContext } from "../Context/GlobalState";

const IncomeExpences = () => {
  const { transactions } = useContext(GlobalContext);

  //income and expence calculations
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expence =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">₹{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">₹{expence}</p>
      </div>
    </div>
  );
};

export default IncomeExpences;
