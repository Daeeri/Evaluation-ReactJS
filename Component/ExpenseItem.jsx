
import React from 'react';

const ExpenseItem = ({ expense }) => {
  return (
    <li>
      Amount: {expense.amount}, Category: {expense.category}
    </li>
  );
};

export default ExpenseItem;
