import React from "react";
import { useLocation } from 'react-router-dom';

function Header() {
     // Get the current location
  const location = useLocation();
  
  // Check if the current path is '/'
  const isHomePage = location.pathname === '/';

    return(
    <header>
        <section className="header-top">
            <div className="container-fluid padding-fix">
                <div className="row">
                    <div className="pull-left logo col-md-3 col-sm-3 col-xs-4">
                        <a href="index.html"><img src="assets/images/logo.png" alt="" className="pull-left"/></a>
                    </div>
                    <div className="text-center col-md-6 col-sm-6 col-xs-4">
                        <a href="#" className="menu-pops"><img src="assets/images/menu-plus.png" alt="" className="margin-right-10 img-hover"/><img src="assets/images/menu-plus-hover.png" alt="" className="margin-right-10 img-hovers"/><span className="text-uppercase">MENU</span></a>
                    </div>
                    <div className="pull-right col-md-3 col-sm-3 col-xs-4">
                        <div className="account-ajax-cart pull-right">
                            <ul className="list-inline pull-right">
                                <li>
                                    <a href="#" className="search-popup"><img src="assets/images/search.png" alt="" className=""/></a>
                                </li>
                                <li><a href="#" className="login-popup"><img src="assets/images/corg.png" alt="" className=""/></a></li>
                                <li className="dropdown cart-menu-body">
                                    <a href="#"><img src="assets/images/shopping-bag.png" alt="" className="position-r"/><span className="span">2</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={`header-middle paira-margin-bottom-2 ${isHomePage ? 'show' : 'hide'}`}>
            <div class="main-slider paira-animation-container">
                <div id="Carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="item active">
                            <img alt="First slide" src="../assets/images/slider/slider-1.jpg"/>
                            <div class="container">
                                <div class="carousel-caption carousel-caption1">
                                    <h1 class="text-capitalize margin-bottom-20 paira-animation" data-paira-animation="fadeInLeft" data-paira-animation-delay="0.2s">Unique Art</h1>
                                    <h1 class="text-capitalize margin-bottom-20 margin-top-0 paira-animation" data-paira-animation="fadeInLeft" data-paira-animation-delay="0.5s">& Paint For Sale</h1>
                                    <a href="product.html" class="btn btn-primary btn-lg paira-animation" data-paira-animation="fadeInUp" data-paira-animation-delay="0.8s">Show Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <img alt="Second slide" src="../assets/images/slider/slider-2.jpg"/>
                            <div class="container">
                                <div class="carousel-caption carousel-caption3">
                                    <h1 class="text-capitalize margin-bottom-20 paira-animation" data-paira-animation="fadeInRight" data-paira-animation-delay="0.2s">Unique Art</h1>
                                    <h1 class="text-capitalize margin-bottom-20 margin-top-0 paira-animation" data-paira-animation="fadeInRight" data-paira-animation-delay="0.5s">& Paint For Sale</h1>
                                    <a href="product.html" class="btn btn-primary btn-lg paira-animation" data-paira-animation="fadeInUp" data-paira-animation-delay="0.8s">Show Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <img alt="Third slide" src="../assets/images/slider/slider-3.jpg"/>
                            <div class="container">
                                <div class="carousel-caption carousel-caption2">
                                    <h1 class="text-capitalize margin-bottom-20 paira-animation"
                                        data-paira-animation="fadeInRight" data-paira-animation-delay="0.2s">Unique Art
                                    </h1>
                                    <h1 class="text-capitalize margin-bottom-20 margin-top-0 paira-animation"
                                        data-paira-animation="fadeInRight" data-paira-animation-delay="0.5s">& Paint For Sale
                                    </h1>
                                    <a href="product.html" class="btn btn-primary btn-lg paira-animation" data-paira-animation="fadeInUp" data-paira-animation-delay="0.8s">Show Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="left carousel-control paira-animation" href="#Carousel" data-slide="prev" data-paira-animation="fadeIn" data-paira-animation-delay="0.0ms"><span>PR<br/>EV</span></a>
                    <a class="right carousel-control paira-animation" href="#Carousel" data-slide="next" data-paira-animation="fadeIn" data-paira-animation-delay="0.10ms"><span>NE<br/>XT</span></a>
                    <ol class="carousel-indicators">
                        <li data-target="#Carousel" data-slide-to="0" class="active">01</li>
                        <li data-target="#Carousel" data-slide-to="1">02</li>
                        <li data-target="#Carousel" data-slide-to="2">03</li>
                    </ol>
                    <span class="carousel-indicators-total"></span>
                </div>
            </div>
        </section>
    </header>
)}

export default Header;