import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const getMonthlyTotal = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    return expenses
      .filter(e => {
        const date = new Date(e.date);
        return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
      })
      .reduce((total, e) => total + parseFloat(e.amount), 0);
  };

  return (
    <div className="container">
      <Header />
      <div className="app-card">
        <ExpenseForm addExpense={addExpense} />
        <h2 className="monthly-total">Monthly Total: ₹{getMonthlyTotal().toFixed(2)}</h2>
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
