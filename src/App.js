import {useLocation, Route, Routes } from 'react-router-dom';
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

function App() {
    const location = useLocation();
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
        <Route path='/login' element={<Login/>}/>
        <Route path='/product:id' element={<Product/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/search' element={<Search/>}/>
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
