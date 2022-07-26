
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    { title: 'Toilet Paper', amount: 173.87, date: new Date(2021, 1, 20) },
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'New desk(wooden)', amount: 444.39, date: new Date(2021, 2, 1) },
  ];
  return (
    <div>
    <NewExpense />
    <Expenses item = {expenses}/>
    </div>
  );
};

export default App;
