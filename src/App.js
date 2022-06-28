import React,{useState} from "react";

import NewExpense from "./components/NewExpense/NewExpense";

import Expenses from "./components/Expenses/Expenses";


let DUMY_EXPENSES = []; 

const  App = () => {

   const [expenses,setExpenses] = useState(DUMY_EXPENSES);

   let data = fetch("http://localhost:3000/user")
   console.log(data,"hiii")
   console.log("asdfasdfasd")

  const  addExpenseHandler = (expense) => {
    const updateExpense = [expense, ...expenses];
     

    // fetch('http://localhost:3000/user').then(
    //   response => {
    //     return response.json();
    //   }
    // ).then(
    //    data => {
    //     setExpenses(data);
    //    },
    //    console.log(data)
    // );

    setExpenses(updateExpense);
  
 }

  return (
    <div>
      <NewExpense  onAddExpense={addExpenseHandler} />
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
