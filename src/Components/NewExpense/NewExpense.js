
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  // Assings a new ID to each new expense
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,    // all inputs after submitting
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const startAddingNewExpense = () => {
    setShowForm(true);
  };
  
  const cancelAddExpense = () => {  
    setShowForm(false);
  };

  return ( 
    <div className="new-expense">
      {!showForm && <button onClick={startAddingNewExpense}>Add Expense</button>}
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelAddExpense}/>}
    </div>
  )
};
 
export default NewExpense;