import { useState } from 'react';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses({ list }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredList = list.filter((item) => item.date.getFullYear().toString() === filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChangeHandler} initialValue={filteredYear} />
      <ExpensesChart expenses={filteredList}/>
      <ExpensesList list={filteredList}/>
    </Card>
  )
}

export default Expenses