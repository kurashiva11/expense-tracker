import React, { useState } from "react";

import "./ExpensesForm.css";

function ExpensesForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("0.01");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitClickHandler = (e) => {
    e.preventDefault();
    props.onExpensesDataGet({
      id: Math.random(),
      title: title,
      amount: Number(amount),
      date: new Date(date),
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <lable>Title</lable>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <lable>Amount</lable>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <lable>Date</lable>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitClickHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpensesForm;
