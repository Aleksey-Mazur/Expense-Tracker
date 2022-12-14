import { useState } from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: 'e10',
    title: 'Visit to the Dentist',
    amount: 880,
    date: new Date(2022, 7, 9),
  },
  {
    id: 'e9',
    title: 'Flowers for Girlfriend',
    amount: 248.65,
    date: new Date(2022, 2, 8),
  },
  {
    id: 'e8',
    title: 'New Laptop',
    amount: 23999.99,
    date: new Date(2022, 0, 19),
  },
  {
    id: 'e7',
    title: 'New Jeans',
    amount: 850,
    date: new Date(2021, 11, 13),
  },
  {
    id: 'e6',
    title: 'New Desk (Wooden)',
    amount: 1150,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  { id: 'e4', title: 'New TV', amount: 10099.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Movie Tickets',
    amount: 294.12,
    date: new Date(2020, 11, 22),
  },
  {
    id: 'e2',
    title: 'New Bed',
    amount: 12998.25,
    date: new Date(2020, 11, 10),
  },
  {
    id: 'e1',
    title: 'New iPhone',
    amount: 26222.99,
    date: new Date(2020, 7, 14),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
