import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, Router } from 'react-router-dom';
import Home from './Pages/Home/Home/Home'
import Header from './Shaered/Header/Header';
import Footer from './Shaered/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} >  </Route>
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
