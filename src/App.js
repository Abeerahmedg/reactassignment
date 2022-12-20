import logo from './logo.svg';
import './App.css';
//import {Header} from './components/Header';
import PersonList from './components/PersonList'
import RemovePerson from './components/RemovePerson';


function App() {
  return (
  <div className="App">
<img src={logo} className="App-logo" alt="logo" />
 <PersonList/>
 <RemovePerson/>
  </div>
  //
    // 
    //   <header className="App-header">
        
        
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
        
    //     </a>
    //   </header>
    
  );
}

export default App;
