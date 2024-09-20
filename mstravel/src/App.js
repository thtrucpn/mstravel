// import { useEffect, useState } from 'react';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router> 
        <MainLayout> 
          <Routes>
            <Route exact path = "/" element = {<HomePage/>}/>

          </Routes>
        </MainLayout>
      </Router>
    </div>  
  );
}

export default App;
