import ExpenseItem from "./components/ExpenseItem.js";

function App() {
  let expenses = [
    {
      id: "e1",
      title: "School Fee",
      amount: "300",
      date: new Date(2022, 7, 20),
    },
    {
      id: "e2",
      title: "Books",
      amount: "250",
      date: new Date(2022, 6, 10),
    },
    {
      id: "e3",
      title: "House Rent",
      amount: "500",
      date: new Date(2022, 5, 15),
    },
    {
      id: "e4",
      title: "Food",
      amount: "350",
      date: new Date(2022, 4, 5),
    },
  ];
  return (
    <div>
      <h2>Lets Get's Started</h2>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
         date={expenses[1].date}
         title={expenses[1].title}
         amount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
         date={expenses[2].date}
         title={expenses[2].title}
         amount={expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
         date={expenses[3].date}
         title={expenses[3].title}
         amount={expenses[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
