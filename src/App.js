import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import CreateProduct from './pages/CreateProduct';
import UpdateProduct from './pages/UpdateProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/produtos" element={ <Products /> } />
        <Route path="/registro" element={ <Register /> } />
        <Route path="/product/create" element={ <CreateProduct /> } />
        <Route path="/produto/:id" element={ <UpdateProduct /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
