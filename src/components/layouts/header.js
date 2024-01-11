import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
    const [customerName, setCustomerName] = useState("");
    const { isExpired, isInvalid } = useJwt();

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        try {
            const decodedToken = JSON.parse(atob(token.split(".")[1]));

            // Get the info student from token
            const customerName = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];

            setCustomerName(customerName);
        } catch (error) {

        }
    }, [isExpired, isInvalid]);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        setCustomerName("");
    };
    const accessTokenExists = !!localStorage.getItem("accessToken");
     // Get the current location
  const location = useLocation();
  
  // Check if the current path is '/'
  const isHomePage = location.pathname === '/';
    return(
    <header>
        <section className="header-top">
            <div className="container-fluid padding-fix" >
                <div className="row">
                    <div className="pull-left logo col-md-3 col-sm-3 col-xs-4">
                        <a href="/"><img src="assets/images/logo.png" alt="" className="pull-left"/></a>
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
                                <li className="dropdown cart-menu-body">
                                    <a href="#"><img src="assets/images/shopping-bag.png" alt="" className="position-r"/><span className="span">{JSON.parse(localStorage.getItem('cartCount')) || 0}</span></a>
                                </li>
                                <li><a href="#" data-toggle="dropdown" className="login-popup" style={{verticalAlign:"initial"}}>
                                <img style={{width:"35px"}} src="assets/images/blog/article-user.png" alt="" className=""/>
                                <span style={{ marginLeft: '5px' }}>{decodeURIComponent(escape(customerName))}</span>
                                </a>
                                <ul className="dropdown-menu" style={{marginLeft:'250px',backgroundColor:"#c2a476"}}>
                                {accessTokenExists ? (
                    <>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/login" onClick={handleLogout}><i className="fa fa-arrow-right"></i>Log Out</Link>
                        </li>
                    </>
                ) : (
                    <li>
                        <Link to="/login"><i className="fa fa-arrow-right"></i>Log In</Link>
                    </li>
                )}
                                </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={`header-middle paira-margin-bottom-2 ${isHomePage ? 'show' : 'hide'}`}>
            <div className="main-slider paira-animation-container">
                <div id="Carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="item active">
                            <img alt="First slide" src="../assets/images/slider/slider-1.jpg"/>
                            <div className="container">
                                <div className="carousel-caption carousel-caption1">
                                    <h1 className="text-capitalize margin-bottom-20 paira-animation" data-paira-animation="fadeInLeft" data-paira-animation-delay="0.2s">Start</h1>
                                    <h1 className="text-capitalize margin-bottom-20 margin-top-0 paira-animation" data-paira-animation="fadeInLeft" data-paira-animation-delay="0.5s">your collection</h1>
                                    <a href="/product" className="btn btn-primary btn-lg paira-animation" data-paira-animation="fadeInUp" data-paira-animation-delay="0.8s">Try Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img alt="Second slide" src="../assets/images/slider/slider-2.jpg"/>
                            <div className="container">
                                <div className="carousel-caption carousel-caption3">
                                    <h1 className="text-capitalize margin-bottom-20 paira-animation" data-paira-animation="fadeInRight" data-paira-animation-delay="0.2s">Posters</h1>
                                    <h1 className="text-capitalize margin-bottom-20 margin-top-0 paira-animation" data-paira-animation="fadeInRight" data-paira-animation-delay="0.5s">& Prints</h1>
                                    <a href="/product" className="btn btn-primary btn-lg paira-animation" data-paira-animation="fadeInUp" data-paira-animation-delay="0.8s">Try Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img alt="Third slide" src="../assets/images/slider/slider-3.jpg"/>
                            <div className="container">
                                <div className="carousel-caption carousel-caption2">
                                    <h1 className="text-capitalize margin-bottom-20 paira-animation"
                                        data-paira-animation="fadeInRight" data-paira-animation-delay="0.2s">The
                                    </h1>
                                    <h1 className="text-capitalize margin-bottom-20 margin-top-0 paira-animation"
                                        data-paira-animation="fadeInRight" data-paira-animation-delay="0.5s">Perfect Present
                                    </h1>
                                    <a href="/product" className="btn btn-primary btn-lg paira-animation" data-paira-animation="fadeInUp" data-paira-animation-delay="0.8s">Try Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="left carousel-control paira-animation" href="#Carousel" data-slide="prev" data-paira-animation="fadeIn" data-paira-animation-delay="0.0ms"><span>PR<br/>EV</span></a>
                    <a className="right carousel-control paira-animation" href="#Carousel" data-slide="next" data-paira-animation="fadeIn" data-paira-animation-delay="0.10ms"><span>NE<br/>XT</span></a>
                    <ol className="carousel-indicators">
                        <li data-target="#Carousel" data-slide-to="0" className="active">01</li>
                        <li data-target="#Carousel" data-slide-to="1">02</li>
                        <li data-target="#Carousel" data-slide-to="2">03</li>
                    </ol>
                    <span className="carousel-indicators-total"></span>
                </div>
            </div>
        </section>
    </header>
)}

export default Header;