import './App.css';
import EmployeeCard from './components/EmployeeList';
import Forms from './components/Forms';
import Header from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='forms-row'>
      <Forms />
      <Forms />
      <Forms />
      </div>
      <EmployeeCard />
    </div>
  );
}

export default App;
