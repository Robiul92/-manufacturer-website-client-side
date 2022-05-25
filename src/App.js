
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home'
import Header from './Shaered/Header/Header';
import Footer from './Shaered/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} >  </Route>
        <Route path='/login' element={<Login></Login> } ></Route>
        <Route path='/register' element={<Register/> } ></Route>
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
