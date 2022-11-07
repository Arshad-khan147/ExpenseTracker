// import ExpenseItem from "./component/ExpenseItem";
import React, { useState } from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpenses from "./component/NewExpenses/NewExpenses";
const dummyData = [
  { id: 1, title: "Toilet paper", amount: 220, date: new Date(2020, 7, 14) },
  { id: 2, title: "Ice Cream", amount: 10, date: new Date(2022, 9, 2022) },
  { id: 3, title: "bufallo", amount: 50, date: new Date(2022, 7, 5) },
  { id: 4, title: "yellow color", amount: 5, date: new Date(2022, 8, 5) },
];
const App = () => {
  const [expenses, setExpenses] = useState(dummyData);
  const addExpensehandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpenses onAddExpense={addExpensehandler} />
      <Expenses items={expenses} />
    </div>
  );
};
export default App;
