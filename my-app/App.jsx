import React from 'react';
import ExpenseForm from './component/ExpenseForm';
import ExpenseList from './component/ExpenseList';
import TotalExpenses from './component/TotalExpenses';
import { ExpenseProvider } from './my-app/ExpenseContext';

const App = () => {
  return (
    <ExpenseProvider>
      <div>
        <h1>Expense Tracker</h1>
        <ExpenseForm />
        <ExpenseList />
        <TotalExpenses />
      </div>
    </ExpenseProvider>
  );
};

export default App;
