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

function App() {
    const location = useLocation();
  return (
    <div className="App">
      <div class="paira-container pages-container">
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
<div class="modal fade paira-cart-popup" id="paira-ajax-cart" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fa fa-times"></i></span></button>
                <div class="row margin-top-40">
                    <div class="col-md-7 col-sm-7 col-xs-12 cart-table margin-top-40">
                        <h3 class="margin-top-0">Shopping Cart</h3>
                        <div class="cart-table-inner">
                            <div class="column full-width overflow">
                                <div class="row-1">
                                    <a href="#" class="pull-left"><img class="" src="assets/images/product/product-10.jpg" alt=""/></a>
                                </div>
                                <div class="row-2">
                                    <a href="product.html" class="cart-menu-line-title">Butterfly eyes women</a>
                                    <div class="quentity margin-bottom-15 pull-left">
                                        <div class="product_quantity_group product-quantity-fix">
                                            <input type="text" class="form-control text-center pull-left font-size-16 margin-left-15" value="2"/>
                                            <div class="up-down text-center pull-left overflow">
                                                <span class="up" data-direction="up"><i class="fa fa-angle-up"></i></span>
                                                <span class="down" data-direction="down"><i class="fa fa-angle-down"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn-group full-width dropdown-category margin-bottom-15">
                                        <button type="button" class="btn btn-success dropdown-toggle text-uppercase" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">1024 x 1024 px<i class="fa fa-angle-down dropdown-icon"></i></button>
                                        <ul class="dropdown-menu text-uppercase">
                                            <li><a href="#">Bed Room</a></li>
                                            <li><a href="#">Showcase</a></li>
                                            <li><a href="#">Dining Room</a></li>
                                            <li><a href="#">Living Room</a></li>
                                            <li><a href="#">Drowing Room</a></li>
                                        </ul>
                                    </div>
                                    <h2 class="margin-clear cart-product-price">$180</h2>
                                </div>
                                <div class="row-3"><p><a href="#" class="remove margin-top-20"><i class="fa fa-trash fa-2x"></i></a></p></div>
                            </div>
                            <hr/>
                            <div class="column full-width overflow">
                                <div class="row-1">
                                    <a href="#" class="pull-left"><img class="" src="assets/images/product/product-9.jpg" alt=""/></a>
                                </div>
                                <div class="row-2">
                                    <a href="product.html" class="cart-menu-line-title">Butterfly eyes women</a>
                                    <div class="quentity margin-bottom-15 pull-left">
                                        <div class="product_quantity_group product-quantity-fix">
                                            <input type="text" class="form-control text-center pull-left font-size-16 margin-left-15" value="2"/>
                                            <div class="up-down text-center pull-left overflow">
                                                <span class="up" data-direction="up"><i class="fa fa-angle-up"></i></span>
                                                <span class="down" data-direction="down"><i class="fa fa-angle-down"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn-group full-width dropdown-category margin-bottom-15">
                                        <button type="button" class="btn btn-success dropdown-toggle text-uppercase" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">1024 x 1024 px<i class="fa fa-angle-down dropdown-icon"></i></button>
                                        <ul class="dropdown-menu text-uppercase">
                                            <li><a href="#">Bed Room</a></li>
                                            <li><a href="#">Showcase</a></li>
                                            <li><a href="#">Dining Room</a></li>
                                            <li><a href="#">Living Room</a></li>
                                            <li><a href="#">Drowing Room</a></li>
                                        </ul>
                                    </div>
                                    <h2 class="margin-clear cart-product-price">$180</h2>
                                </div>
                                <div class="row-3"><p><a href="#" class="remove margin-top-20"><i class="fa fa-trash fa-2x"></i></a></p></div>
                            </div>
                            <hr/>
                        </div>
                        <div class="cart-menu-buttons text-right">
                            <a href="#" class="btn btn-success pull-left">Continue Shopping</a>
                            <a href="#" class="btn btn-success pull-right">Update Cart</a>
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-5 col-xs-12 cart-table margin-top-40">
                        <div class="margin-bottom-30">
                            <h3 class="margin-clear margin-bottom-15">Sub Total</h3>
                            <div class="cart-sub-total">
                                <textarea id="note" name="note" class=" margin-bottom-15 form-control" placeholder="Special instruction for seller"></textarea>
                                <h1 class="margin-bottom-15 text-center"><span class="money">$510.00</span></h1>
                                <input type="submit" id="checkout" class="btn btn-success btn-lg btn-block" name="checkout" value="Proceed To Checkout"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade paira-menu-popup" id="paira-menu" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg text-center">
        <div class="modal-content">
            <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fa fa-times"></i></span></button>
                <div class="row">
                    <div class="col-md-12 margin-top-15">
                        <div class="menus">
                            <h3>MAIN MENU</h3>
                            <ul class="list-unstyled margin-top-20">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="product.html">Shop</a></li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle plus" data-toggle="dropdown" href="#">Collection<i class="fa fa-plus margin-left-5"></i><i class="fa fa-minus minus-fa"></i></a>
                                    <ul class="dropdown-menu sub">
                                        <li><a href="list-collections.html">List Collection</a></li>
                                        <li><a href="collection.html">Collection</a></li>
                                        <li><a href="collection-list-view.html">Collection List View</a></li>
                                    </ul>
                                </li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle plus" data-toggle="dropdown" href="#">Pages<i class="fa fa-plus margin-left-5"></i><i class="fa fa-minus minus-fa"></i></a>
                                    <ul class="dropdown-menu sub">
                                        <li><a href="article.html">article</a></li>
                                        <li><a href="login.html">login</a></li>
                                        <li><a href="register.html">register</a></li>
                                        <li><a href="reset-password.html">reset-password</a></li>
                                        <li><a href="search.html">search</a></li>
                                        <li><a href="404.html">404</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <hr/>
                            <ul class="social-links list-inline">
                                <li><a href="https://www.facebook.com/themetidy" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="https://plus.google.com/+Themetidy-Official-Page" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="https://twitter.com/themetidy" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/themetidy" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.pinterest.com/themetidy/" target="_blank"><i class="fa fa-pinterest"></i></a></li>
                                <li><a href="https://www.behance.net/themetidy" target="_blank"><i class="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
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
