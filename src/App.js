
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
import AddressDetails from './Pages/AddressDetails/AddressDetails';
import AddItems from './Pages/AddItems/AddItems';
import Dashbord from './Pages/Dashbord/Dashbord';
import Blog from './Pages/Blog/Blog';
import MyReview from './Pages/MyReview/MyReview';
import MyOrders from './Pages/MyOrders/MyOrders';
import About from './Pages/About/About';
import Users from './Pages/Dashbord/Users';

function App() {
  return (
    <div className='max-w-7×1 mx-auto px-12'>
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
      <Route path='/addressdetails' element={
      <RequireAuth>
        <AddressDetails/>
      </RequireAuth>
      
      }/>
      <Route path='/additems' element={
      <RequireAuth>
        <AddItems/>
      </RequireAuth>
      }/>
      <Route path='/dashbord' element={
      <RequireAuth>
        <Dashbord/>
      </RequireAuth>
      }>
        <Route index element ={<MyOrders></MyOrders>}> </Route>
        <Route path="review" element ={<MyReview></MyReview>}> </Route>
        
        <Route path="users" element ={<Users/>}> </Route>
        </Route>
      
        <Route path='/login' element={<Login></Login> } ></Route>
        <Route path='/register' element={<Register/> } ></Route>
        <Route path='/blogs' element={<Blog/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
