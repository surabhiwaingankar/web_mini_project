import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React,{useState} from 'react';
import Login from './pages/Login'
import Signup from './pages/Sign-up'

function App() {
  const [currentForm, setCurrentForm]=useState('login');
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Routes>
          <Route
          path= "/"
          element = {<Login/> }
         
          />
          <Route 
          path="/signup" 
          element={<Signup/>}
          />
          
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
