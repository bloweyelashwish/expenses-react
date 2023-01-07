import React, { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm({ onSaveExpenseData, onCancel }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const handleTitleChange = ({ target }) => setEnteredTitle(target.value);
  const handleAmountChange = ({ target }) => setEnteredAmount(target.value);
  const handleDateChange = ({ target }) => setEnteredDate(target.value);
  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }

    onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    onCancel();
  }

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  // const titleChangeHandler = ({ target }) => setUserInput({ ...userInput, enteredTitle: target.value });
  // const amountChangeHandler = ({ target }) => setUserInput({ ...userInput, enteredAmount: target.value });
  // const dateChangeHandler = ({ target }) => setUserInput({ ...userInput, enteredDate: target.value });
  // const titleChangeHandler = ({ target }) => setUserInput((prevState) => {
  //   return {...prevState, enteredTitle: target.value }
  // });
  // const amountChangeHandler = ({ target }) => setUserInput((prevState) => {
  //   return {...prevState, enteredAmount: target.value }
  // });
  // const dateChangeHandler = ({ target }) => setUserInput((prevState) => {
  //   return {...prevState, enteredDate: target.value }
  // });

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={handleTitleChange} value={enteredTitle}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={handleAmountChange} value={enteredAmount}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={handleDateChange} value={enteredDate}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;