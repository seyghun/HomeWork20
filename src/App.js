import './App.css';
import Login from './components/login/login';
import SignUp from './components/signup/signup'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/HomeWork20' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;