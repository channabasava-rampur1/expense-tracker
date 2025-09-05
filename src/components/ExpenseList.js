import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  if (expenses.length === 0) return <p className="empty">No expenses yet.</p>;

  return (
    <ul className="expense-list">
      {expenses.map((expense, index) => (
        <li key={index} className="expense-item">
          <span>{expense.title}</span>
          <span>₹{expense.amount}</span>
          <span>{new Date(expense.date).toLocaleDateString()}</span>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
