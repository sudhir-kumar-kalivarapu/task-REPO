import React from 'react';
import './App.css';
import Card from './Card';
import Navbar from './Header';
import { BrowserRouter as Router ,Routes, Route,} from 'react-router-dom';


function App() {
  return (
    <div className="App" style={{backgroundImage:"url(/images/background.jpg)"}}>
       <Router>
        <Routes>
        <Route path='/card' element={ <Card />}></Route>
         <Route path='/header' element={ <Navbar />}></Route>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
