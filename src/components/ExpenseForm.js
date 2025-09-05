import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ addExpense }) => {
  const [formData, setFormData] = useState({ title: '', amount: '', date: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.amount || !formData.date) return;
    addExpense(formData);
    setFormData({ title: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <input type="number" name="amount" placeholder="Amount (₹)" value={formData.amount} onChange={handleChange} required />
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
