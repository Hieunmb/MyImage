import {useLocation, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <div class="paira-container pages-container">
      <Header></Header>
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
        <Route path='/product' element={<Product/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      <Footer></Footer>
      </div>
      <div class="modal fade paira-search-popup search-pops" id="paira-search" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true"><i class="fa fa-times"></i></span></button>
                <div class="row">
                    <div class="col-md-12 paira-margin-top-1">
                        <form class="popup-search-form">
                            <input type="text" class="form-control padding-clear text-capitalize pop-light" name="q" value="" placeholder="Search here..."/>
                            <button class="search"><i class="fa fa-search fa-2x"></i></button>
                            <button class="btn btn-success btn-lg text-uppercase pull-right margin-top-15">go</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  );
}

export default App;
