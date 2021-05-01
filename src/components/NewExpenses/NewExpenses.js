import React from "react";
import "./NewExpenses.css";

import ExpensesForm from "./ExpensesForm";

function NewExpenses(props) {
  const expenseDataGetHandler = expenseData => {
    props.onGetExpenseData(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpensesForm onExpensesDataGet={expenseDataGetHandler}/>
    </div>
  );
}

export default NewExpenses;
