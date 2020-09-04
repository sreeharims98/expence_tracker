import React, { useContext } from "react";
import "../App.css";
import { GlobalContext } from "../Context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  //add array of amount from transactions
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((accumulated, item) => (accumulated += item), 0);

  let sign = "";

  if (total < 0) {
    sign = "-";
  } else if (total > 0) {
    sign = "+";
  }

  return (
    <>
      <h4>My Balance</h4>
      <h1>
        {sign}₹{Math.abs(total)}
      </h1>
    </>
  );
};

export default Balance;
