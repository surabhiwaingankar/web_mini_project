import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './pages/Login'
import Signup from './pages/Sign-up'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Routes>
          <Route
          path= "/"
          element = {<Signup/>}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
