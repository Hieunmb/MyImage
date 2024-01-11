import {useLocation, Route, Routes, Navigate } from 'react-router-dom';
import BreadCrumb from './components/layouts/breadcrumb';
import Error from './components/pages/404';
import About from './components/pages/about';
import Article from './components/pages/article';
import Blog from './components/pages/blog';
import Collection_list_view from './components/pages/collection-list-view';
import Collection from './components/pages/collection';
import Contact from './components/pages/contact';
import Index from './components/pages/index';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import ListCollection from './components/pages/list-collection';
import Login from './components/auth/login';
import Product from './components/pages/product';
import Register from './components/auth/register';
import ResetPassword from './components/auth/reset-password';
import Search from './components/pages/search';
import Searching from './components/pages/searching';
import Cart from './components/pages/cart';
import Menu from './components/pages/menu';
import Invoice from './components/pages/invoice';
import { useJwt } from 'react-jwt';
import Profile from'./components/pages/profile';
import CheckOut from './components/pages/checkout/checkout';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Orders from'./components/pages/orders';
import OrderDetail from'./components/pages/orderdetail';



function App() {
    const location = useLocation();
    const ProtectedRoute = ({ element }) => {
      const token = localStorage.getItem("accessToken");
      const { isExpired, isInvalid } = useJwt(token);
  
      if (!token || isExpired || isInvalid) {
        window.alert('You have to login first')
          localStorage.removeItem("accessToken");
          return <Navigate to="/login" />;
      }
  
      return element;
  };
  
  const ProtectedLoginRoute = ({ element }) => {
      const token = localStorage.getItem("accessToken");
      const { isExpired, isInvalid } = useJwt(token);
  
      if (token && !isExpired && !isInvalid) {
          return <Navigate to="/" />;
      }
  
      return element;
  };
  return (
    
    <div className="App">
      <div className="paira-container pages-container">
      <Header></Header>
      <BreadCrumb currentLocation={location.pathname} />
      <Routes>
        <Route path='/404' element={<Error/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/article' element={<Article/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/collection-list-view' element={<Collection_list_view/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/' element={<Index/>}/>
        <Route path='/list-collection' element={<ListCollection/>}/>
        <Route path='/login' element={<ProtectedLoginRoute element={<Login />} />} />
        <Route path='/product' element={<Product/>}/>
        <Route path='/register' element={<ProtectedLoginRoute element= {<Register/>}/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/checkout' element={<ProtectedRoute element= {<CheckOut/>}/>}/>
        <Route path='/invoice' element={<Invoice/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/orderdetail' element={<OrderDetail/>}/>
      </Routes>
      <Footer currentLocation={location.pathname}></Footer>
      </div>
      <Searching/>
        <Cart></Cart>
        <Menu/>
    </div>
  );
}

export default App;
