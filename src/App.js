
import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const EXAMPLE_EXPENSES = [
  {
    id: 'e1',
    title: 'New Phone',
    amount: 655,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'Car Repair', 
    amount: 565.90, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Groceries',
    amount: 194.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 425.60,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(EXAMPLE_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
