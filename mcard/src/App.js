import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
