import logo from './logo.svg';
import './App.css';
//import {Header} from './components/Header';
import {PersonList} from './components/PersonList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePerson from './components/CreatePerson';
import {PersonDetails}  from './components/PersonDetails';


function App() {
  return (
    <Router>
  <div className="App">
<img src={logo} className="App-logo" alt="logo" />
<Routes>
  <Route path="/"  element={<PersonList/>}/>
  <Route path='/CreatePerson' element={<CreatePerson/>} />
  <Route path='/PersonDetails/.id' element={<PersonDetails/>}/>
</Routes>

  </div>
  </Router>
  
  );
}

export default App;
