import React from 'react';
import Home from './Home.jsx';
import Description from './Description.jsx';
import Crew from './Crew.jsx';
import Technology from './Technology.jsx';
import Nav from './Nav.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return(    
    <Router>
      <div className="container">
  <Nav />
  <Routes >
    <Route path='/' element={ <Home/>} />
    <Route path='/destination' element={ <Description />} />
    <Route path='/crew' element={ <Crew />} />
    <Route path='/technology' element={ <Technology />} />
  </Routes>
</div>
    </Router>
  );
}

export default App
