import logo from './logo.svg';
import './App.css';
import NewTaskBtn from './components/header/newTask';
import SideBar from './components/sidebar/sidebar';
import Cards from './components/cards/cards';
import Pagin from './components/pagination/pagin';

function App() {
  return (
    <div className="App">
      <header>
      <NewTaskBtn/>
      </header>
    <main>
      <div className='container'>
      <SideBar/>
      <div className="left">
      <div className='card-side'><Cards/></div>
      <Pagin/>
      </div>
      </div>
    </main>
    
    </div>  
  );
}

export default App;
