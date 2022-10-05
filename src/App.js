import Expenses from './Components/Expenses/Expenses';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'New iPhone',
    amount: 26222.99,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New Bed',
    amount: 12998.25,
    date: new Date(2020, 11, 10),
  },
  {
    id: 'e3',
    title: 'Movie Tickets',
    amount: 294.12,
    date: new Date(2020, 11, 22),
  },
  { id: 'e4', title: 'New TV', amount: 10099.49, date: new Date(2021, 2, 12) },
  {
    id: 'e5',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e6',
    title: 'New Desk (Wooden)',
    amount: 1150,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e7',
    title: 'New Jeans',
    amount: 850,
    date: new Date(2021, 11, 13),
  },
  {
    id: 'e8',
    title: 'New Laptop',
    amount: 23999.99,
    date: new Date(2022, 0, 19),
  },
  {
    id: 'e9',
    title: 'Flowers for Girlfriend',
    amount: 248.65,
    date: new Date(2022, 2, 8),
  },
  {
    id: 'e10',
    title: 'Visit to the Dentist',
    amount: 880,
    date: new Date(2022, 7, 9),
  },
];

const App = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Expense Tracker</h2>
      <Expenses items={INITIAL_EXPENSES} />
    </div>
  );
};

export default App;
