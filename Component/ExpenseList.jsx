import React from 'react';
import ExpenseItem from './ExpenseItem';
import { useExpense } from 'my-app/ExpenseContext';

const ExpenseList = () => {
  const { state } = useExpense();

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {state.expenses.map((expense, index) => (
          <ExpenseItem key={index} expense={expense} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
