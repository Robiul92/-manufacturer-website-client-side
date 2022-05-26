
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home'
import Header from './Shaered/Header/Header';
import Footer from './Shaered/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import SingleTool from './Pages/SingleTool/SingleTool';
import RequireAuth from './Shaered/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      
        <Route path="/" element={<Home></Home>} >  </Route>
        <Route path= '/tools/:categoryId' element={
        
        <ItemDetails/>
      
      }></Route>
      <Route path='/singletool/:id' element={
      <RequireAuth>
        <SingleTool/>
      </RequireAuth>
      
      }/>
        <Route path='/login' element={<Login></Login> } ></Route>
        <Route path='/register' element={<Register/> } ></Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
