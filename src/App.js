import './App.css';
import {PersonList} from './components/PersonList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import AddPerson from './components/AddPerson';
import PersonDetails from './components/PersonDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<PersonList/>}/>
          <Route path='/Create' element={<AddPerson/>}/>
          <Route path='/PersonDetails/:id' element={<PersonDetails/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
