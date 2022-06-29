import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";

import Expenses from "./components/Expenses/Expenses";

let DUMY_EXPENSES = [];

const App = () => {
  const [expenses, setExpenses] = useState(DUMY_EXPENSES);

  //  fetch('http://localhost:8000/user').then(
  //     response => {
  //       return response.json();
  //     }
  //   ).then(
  //      data => {
  //       console.log(data)
  //       setExpenses(data);
  //      }
  //   );

  const addExpenseHandler = (expense) => {
    const updateExpense = [expense, ...expenses];

    setExpenses(updateExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
