
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((exp) => {
    return exp.date.getFullYear().toString() === filterYear;
  });
 
  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} filterYear={filterYear}/>
      <ExpensesChart expense={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  )
};
 
export default Expenses;