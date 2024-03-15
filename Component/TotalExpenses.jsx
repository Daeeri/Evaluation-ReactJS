import React from 'react';
import { useExpense } from 'my-app/ExpenseContext';

const TotalExpenses = () => {
  const { state } = useExpense();

  const totalExpenses = state.expenses.reduce((total, expense) => {
    return total + parseInt(expense.amount);
  }, 0);

  return <div>Total Expenses: {totalExpenses}</div>;
};

export default TotalExpenses;
