import React,{useState,createContext,useContext} from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PrivateRoutes from './components/private_routes/PrivateRoutes';
import './index.css';
import LocalStorageService from './services/localStorageService';
import Login from './components/pages/Login'


const App = () => {
  const [role , setRole] = useState(LocalStorageService.getRole)

  return (
  <Router>
    <PrivateRoutes role="guest" setRole={setRole}/> {/* ส่ง setRole ไปให้ private_routes*/}    
  </Router>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
