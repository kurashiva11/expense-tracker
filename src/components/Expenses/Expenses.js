import React, { useState } from "react";

import ExpensesItem from "./ExpensesItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart"

import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const changeYearHandler = (selected_year) => {
    setSelectedYear(selected_year);
  };

  const filteredExpenses = props.data.filter(
    (expense) => expense.date.getFullYear() === Number(selectedYear)
  );

  let expenseContent = <p>No expenses in this year</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => {
      return (
        <ExpensesItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      );
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYear}
          onYearSelected={changeYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {expenseContent}
      </Card>
    </div>
  );
}

export default Expenses;
