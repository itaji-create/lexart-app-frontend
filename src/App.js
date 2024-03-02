import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/produtos" element={ <Products /> } />
        <Route path="/registro" element={ <Register /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
