import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
