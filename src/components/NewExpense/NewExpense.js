import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense({ onAddExpense }) {
  const [isActive, setIsActive] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() }
    onAddExpense(expenseData)
  }
  const newExpenseHandler = () => setIsActive((prevState) => !prevState);

  return (
    <div className="new-expense">
      {isActive && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={newExpenseHandler}/>}
      {!isActive && <button onClick={newExpenseHandler}>Add New Expense</button>}
    </div>
  );
}

export default NewExpense;