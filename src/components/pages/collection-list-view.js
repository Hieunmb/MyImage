function Collection_list_view() {
    return (
        <section>
            <head>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Dye - Multipurpose Creative Shop Art & Photography HTML Template"/>
                <meta name="author" content="ThemeTidy"/>
                <link rel="shortcut icon" href="assets/images/favicon.png" type="image/png" />
                <title>Collection List View - Dye - Multipurpose Creative Shop Art & Photography HTML Template</title>
                <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" media="all"/>
                <link href="assets/css/animate.min.css" rel="stylesheet" type="text/css" media="all"/>
                <link href="assets/css/paira.css" rel="stylesheet" type="text/css" media="all"/>
                <link href="assets/css/paira-color-font.css" rel="stylesheet" type="text/css" media="all"/>
                <link href="assets/css/paira-responsive.css" rel="stylesheet" type="text/css" media="all"/>
                <link href="assets/css/font-awesome.min.css" rel="stylesheet" type="text/css" media="all"/>
                <script src="assets/js/html5shiv.min.js" type="text/javascript"></script>
                <script src="assets/js/respond.min.js" type="text/javascript"></script>
                <link href="https://fonts.googleapis.com/css?family=Poppins:400,600" rel="stylesheet"/>
            </head>
            <body>
            <div className="paira-container pages-container">
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
                </header>
                <main className="collection-page">
                    <section className="breadcrumb-container paira-margin-bottom-3">
                        <div className="breadcrumb">
                            <div className="container-fluid padding-fix">
                                <ul className="list-inline">
                                    <li><a href="#">Home <i className="fa fa-angle-right"></i></a></li>
                                    <li>Collection</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="latest-picture paira-margin-bottom-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 heading-title">
                                    <h2 className="text-capitalize margin-clear text-center"><span>Collection</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-xs-12 col-sm-12 margin-bottom-40 margin-top-30">
                                    <div className="showing-item text-center">
                                        <p className="margin-clear">Showing <strong>8 items</strong> 30 items</p>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-4 padding-clear">
                                        <div className="short-by">
                                            <div className="btn-group">
                                                <button type="button" className="btn dropdown-toggle pull-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                    Short by <i className="fa fa-plus"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Bed Room</a></li>
                                                    <li><a href="#">Showcase</a></li>
                                                    <li><a href="#">Dining Room</a></li>
                                                    <li><a href="#">Living Room</a></li>
                                                    <li><a href="#">Drowing Room</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-4 padding-clear">
                                        <div className="show-category">
                                            <div className="btn-group">
                                                <button type="button" className="btn dropdown-toggle pull-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                    Category <i className="fa fa-plus"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Bed Room</a></li>
                                                    <li><a href="#">Showcase</a></li>
                                                    <li><a href="#">Dining Room</a></li>
                                                    <li><a href="#">Living Room</a></li>
                                                    <li><a href="#">Drowing Room</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-4 padding-clear">
                                        <div className="views">
                                            <div className="btn-group">
                                                <button type="button" className="btn dropdown-toggle pull-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                    Grid view <i className="fa fa-plus"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Bed Room</a></li>
                                                    <li><a href="#">Showcase</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-view">
                            <div className="margin-bottom-30">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-4 col-md-4 col-xs-12">
                                            <div className="product text-center">
                                                <div className="product-image position-r">
                                                    <a href="#">
                                                        <div className="background-overlay"></div>
                                                        <img src="assets/images/product/product-5.jpg" alt="" className="img-responsive"/>
                                                    </a>
                                                </div>
                                                <div className="product-hover">
                                                    <h3 className="margin-clear"><a href="collection.html">Looking big eyes look</a></h3>
                                                    <div className="text-center prices margin-top-15 margin-bottom-10">
                                                        <h4 className="pull-left margin-clear margin-right-5 del"><del><span className="money">$170.00</span></del></h4>
                                                        <h4 className="pull-left margin-clear margin-left-5"><span className="money">$120.00</span></h4>
                                                    </div>
                                                    <p className="margin-bottom-15">Negat esse eam, inquit, propter se expetendam. Honesta oratio, Socra tica, Platonis etiam. Positum est a nostris in iis esse rebus, quae secu ndum naturam essent, non dolere; Non est ista, inquam, Piso, magna dissensio. Non quaeritur autem quid naturae tuae consentaneum sit sed quid disciplinae. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec.</p>
                                                    <div className="paira-wish-compare-con wish-compare-view-cart">
                                                        <a href="#" className="product-cart-con btn btn-success"><i className="fa fa-shopping-cart"></i></a>
                                                        <a href="#paira-quick-view" className="paira-quick-view quick-view  btn btn-default"><i className="fa fa-search-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-md-4 col-xs-12">
                                            <div className="product text-center">
                                                <div className="product-image position-r">
                                                    <a href="#">
                                                        <div className="background-overlay"></div>
                                                        <img src="assets/images/product/product-6.jpg" alt="" className="img-responsive"/>
                                                    </a>
                                                </div>
                                                <div className="product-sale"><span>Sale</span></div>
                                                <div className="product-stock-out"><span>Sold</span></div>
                                                <div className="product-hover">
                                                    <h3 className="margin-clear"><a href="collection.html">Looking big eyes look</a></h3>
                                                    <div className="text-center prices margin-top-15 margin-bottom-10">
                                                        <h4 className="pull-left margin-clear"><span className="money">$120.00</span></h4>
                                                    </div>
                                                    <p className="margin-bottom-15">Negat esse eam, inquit, propter se expetendam. Honesta oratio, Socra tica, Platonis etiam. Positum est a nostris in iis esse rebus, quae secu ndum naturam essent, non dolere; Non est ista, inquam, Piso, magna dissensio. Non quaeritur autem quid naturae tuae consentaneum sit sed quid disciplinae. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec.</p>
                                                    <div className="paira-wish-compare-con wish-compare-view-cart">
                                                        <a href="#" className="product-cart-con btn btn-success"><i className="fa fa-shopping-cart"></i></a>
                                                        <a href="#paira-quick-view" className="paira-quick-view quick-view  btn btn-default"><i className="fa fa-search-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-md-4 col-xs-12">
                                            <div className="product text-center">
                                                <div className="product-image position-r">
                                                    <a href="#">
                                                        <div className="background-overlay"></div>
                                                        <img src="assets/images/product/product-7.jpg" alt="" className="img-responsive"/>
                                                    </a>
                                                </div>
                                                <div className="product-hover">
                                                    <h3 className="margin-clear"><a href="collection.html">Looking big eyes look</a></h3>
                                                    <div className="text-center prices margin-top-15 margin-bottom-10">
                                                        <h4 className="pull-left margin-clear"><span className="money">$120.00</span></h4>
                                                    </div>
                                                    <p className="margin-bottom-15">Negat esse eam, inquit, propter se expetendam. Honesta oratio, Socra tica, Platonis etiam. Positum est a nostris in iis esse rebus, quae secu ndum naturam essent, non dolere; Non est ista, inquam, Piso, magna dissensio. Non quaeritur autem quid naturae tuae consentaneum sit sed quid disciplinae. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec.</p>
                                                    <div className="paira-wish-compare-con wish-compare-view-cart">
                                                        <a href="#" className="product-cart-con btn btn-success"><i className="fa fa-shopping-cart"></i></a>
                                                        <a href="#paira-quick-view" className="paira-quick-view quick-view  btn btn-default"><i className="fa fa-search-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-container"></div>
                            </div>
                            <div className="margin-bottom-30">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-4 col-md-4 col-xs-12">
                                            <div className="product text-center">
                                                <div className="product-image position-r">
                                                    <a href="#">
                                                        <div className="background-overlay"></div>
                                                        <img src="assets/images/product/product-8.jpg" alt="" className="img-responsive"/>
                                                    </a>
                                                </div>
                                                <div className="product-hover">
                                                    <h3 className="margin-clear"><a href="collection.html">Looking big eyes look</a></h3>
                                                    <div className="text-center prices margin-top-15 margin-bottom-10">
                                                        <h4 className="pull-left margin-clear"><span className="money">$120.00</span></h4>
                                                    </div>
                                                    <p className="margin-bottom-15">Negat esse eam, inquit, propter se expetendam. Honesta oratio, Socra tica, Platonis etiam. Positum est a nostris in iis esse rebus, quae secu ndum naturam essent, non dolere; Non est ista, inquam, Piso, magna dissensio. Non quaeritur autem quid naturae tuae consentaneum sit sed quid disciplinae. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec.</p>
                                                    <div className="paira-wish-compare-con wish-compare-view-cart">
                                                        <a href="#" className="product-cart-con btn btn-success"><i className="fa fa-shopping-cart"></i></a>
                                                        <a href="#paira-quick-view" className="paira-quick-view quick-view  btn btn-default"><i className="fa fa-search-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-md-4 col-xs-12">
                                            <div className="product text-center">
                                                <div className="product-image position-r">
                                                    <a href="#">
                                                        <div className="background-overlay"></div>
                                                        <img src="assets/images/product/product-9.jpg" alt="" className="img-responsive"/>
                                                    </a>
                                                </div>
                                                <div className="product-sale"><span>Sale</span></div>
                                                <div className="product-stock-out"><span>Sold</span></div>
                                                <div className="product-hover">
                                                    <h3 className="margin-clear"><a href="collection.html">Looking big eyes look</a></h3>
                                                    <div className="text-center prices margin-top-15 margin-bottom-10">
                                                        <h4 className="pull-left margin-clear margin-right-5 del"><del><span className="money">$170.00</span></del></h4>
                                                        <h4 className="pull-left margin-clear margin-left-5"><span className="money">$120.00</span></h4>
                                                    </div>
                                                    <p className="margin-bottom-15">Negat esse eam, inquit, propter se expetendam. Honesta oratio, Socra tica, Platonis etiam. Positum est a nostris in iis esse rebus, quae secu ndum naturam essent, non dolere; Non est ista, inquam, Piso, magna dissensio. Non quaeritur autem quid naturae tuae consentaneum sit sed quid disciplinae. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec.</p>
                                                    <div className="paira-wish-compare-con wish-compare-view-cart">
                                                        <a href="#" className="product-cart-con btn btn-success"><i className="fa fa-shopping-cart"></i></a>
                                                        <a href="#paira-quick-view" className="paira-quick-view quick-view  btn btn-default"><i className="fa fa-search-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-md-4 col-xs-12">
                                            <div className="product text-center">
                                                <div className="product-image position-r">
                                                    <a href="#">
                                                        <div className="background-overlay"></div>
                                                        <img src="assets/images/product/product-10.jpg" alt="" className="img-responsive"/>
                                                    </a>
                                                </div>
                                                <div className="product-hover">
                                                    <h3 className="margin-clear"><a href="collection.html">Looking big eyes look</a></h3>
                                                    <div className="text-center prices margin-top-15 margin-bottom-10">
                                                        <h4 className="pull-left margin-clear"><span className="money">$120.00</span></h4>
                                                    </div>
                                                    <p className="margin-bottom-15">Negat esse eam, inquit, propter se expetendam. Honesta oratio, Socra tica, Platonis etiam. Positum est a nostris in iis esse rebus, quae secu ndum naturam essent, non dolere; Non est ista, inquam, Piso, magna dissensio. Non quaeritur autem quid naturae tuae consentaneum sit sed quid disciplinae. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec.</p>
                                                    <div className="paira-wish-compare-con wish-compare-view-cart">
                                                        <a href="#" className="product-cart-con btn btn-success"><i className="fa fa-shopping-cart"></i></a>
                                                        <a href="#paira-quick-view" className="paira-quick-view quick-view  btn btn-default"><i className="fa fa-search-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-container"></div>
                            </div>
                            <div className="margin-bottom-30">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-4 col-md-4 col-xs-12">
                                            <div className="product text-center">
                                                <div className="product-image position-r">
                                                    <a href="#">
                                                        <div className="background-overlay"></div>
                                                        <img src="assets/images/product/product-11.jpg" alt="" className="img-responsive"/>
                                                    </a>
                                                </div>
                                                <div className="product-hover">
                                                    <h3 className="margin-clear"><a href="collection.html">Looking big eyes look</a></h3>
                                                    <div className="text-center prices margin-top-15 margin-bottom-10">
                                                        <h4 className="pull-left margin-clear margin-right-5 del"><del><span className="money">$170.00</span></del></h4>
                                                        <h4 className="pull-left margin-clear margin-left-5"><span className="money">$120.00</span></h4>
                                                    </div>
                                                    <p className="margin-bottom-15">Negat esse eam, inquit, propter se expetendam. Honesta oratio, Socra tica, Platonis etiam. Positum est a nostris in iis esse rebus, quae secu ndum naturam essent, non dolere; Non est ista, inquam, Piso, magna dissensio. Non quaeritur autem quid naturae tuae consentaneum sit sed quid disciplinae. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec.</p>
                                                    <div className="paira-wish-compare-con wish-compare-view-cart">
                                                        <a href="#" className="product-cart-con btn btn-success"><i className="fa fa-shopping-cart"></i></a>
                                                        <a href="#paira-quick-view" className="paira-quick-view quick-view  btn btn-default"><i className="fa fa-search-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-md-4 col-xs-12">
                                            <div className="product text-center">
                                                <div className="product-image position-r">
                                                    <a href="#">
                                                        <div className="background-overlay"></div>
                                                        <img src="assets/images/product/product-12.jpg" alt="" className="img-responsive"/>
                                                    </a>
                                                </div>
                                                <div className="product-sale"><span>Sale</span></div>
                                                <div className="product-stock-out"><span>Sold</span></div>
                                                <div className="product-hover">
                                                    <h3 className="margin-clear"><a href="collection.html">Looking big eyes look</a></h3>
                                                    <div className="text-center prices margin-top-15 margin-bottom-10">
                                                        <h4 className="pull-left margin-clear margin-right-5 del"><del><span className="money">$170.00</span></del></h4>
                                                        <h4 className="pull-left margin-clear margin-left-5"><span className="money">$120.00</span></h4>
                                                    </div>
                                                    <p className="margin-bottom-15">Negat esse eam, inquit, propter se expetendam. Honesta oratio, Socra tica, Platonis etiam. Positum est a nostris in iis esse rebus, quae secu ndum naturam essent, non dolere; Non est ista, inquam, Piso, magna dissensio. Non quaeritur autem quid naturae tuae consentaneum sit sed quid disciplinae. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec.</p>
                                                    <div className="paira-wish-compare-con wish-compare-view-cart">
                                                        <a href="#" className="product-cart-con btn btn-success"><i className="fa fa-shopping-cart"></i></a>
                                                        <a href="#paira-quick-view" className="paira-quick-view quick-view  btn btn-default"><i className="fa fa-search-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-md-4 col-xs-12">
                                            <div className="product text-center">
                                                <div className="product-image position-r">
                                                    <a href="#">
                                                        <div className="background-overlay"></div>
                                                        <img src="assets/images/product/product-13.jpg" alt="" className="img-responsive"/>
                                                    </a>
                                                </div>
                                                <div className="product-hover">
                                                    <h3 className="margin-clear"><a href="collection.html">Looking big eyes look</a></h3>
                                                    <div className="text-center prices margin-top-15 margin-bottom-10">
                                                        <h4 className="pull-left margin-clear margin-right-5 del"><del><span className="money">$170.00</span></del></h4>
                                                        <h4 className="pull-left margin-clear margin-left-5"><span className="money">$120.00</span></h4>
                                                    </div>
                                                    <p className="margin-bottom-15">Negat esse eam, inquit, propter se expetendam. Honesta oratio, Socra tica, Platonis etiam. Positum est a nostris in iis esse rebus, quae secu ndum naturam essent, non dolere; Non est ista, inquam, Piso, magna dissensio. Non quaeritur autem quid naturae tuae consentaneum sit sed quid disciplinae. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec.</p>
                                                    <div className="paira-wish-compare-con wish-compare-view-cart">
                                                        <a href="#" className="product-cart-con btn btn-success"><i className="fa fa-shopping-cart"></i></a>
                                                        <a href="#paira-quick-view" className="paira-quick-view quick-view  btn btn-default"><i className="fa fa-search-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-container"></div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                                    <ul className="list-inline pagination margin-clear">
                                        <li><a href="#" className="next-page"><i className="fa fa-caret-left"></i></a></li>
                                        <li className="active font-bold"><span>1</span></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#" className="prev-page"><i className="fa fa-caret-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                    <section className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-xs-12 col-sm-12">
                                    <div className="paira-widget paira-subscribe">
                                        <h3 className="text-center margin-clear text-uppercase">Sign up for the newsletter</h3>
                                        <hr className="margin-bottom-40 margin-top-15"/>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Email Address"/>
                                            <span className="input-group-btn">
                                                <button className="btn btn-default" type="button">SUBSCRIBE</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="paira-widget paira-menu">
                                        <h4>Importent link</h4>
                                        <ul className="list-unstyled">
                                            <li><a href="#">Help Center</a></li>
                                            <li><a href="#">Market Place</a></li>
                                            <li><a href="#">Author Terms</a></li>
                                            <li><a href="#">Licenses</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">About Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="paira-widget paira-menu">
                                        <h4>Support</h4>
                                        <ul className="list-unstyled">
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Forums</a></li>
                                            <li><a href="#">AutThemetidy Blog</a></li>
                                            <li><a href="#">Faqs</a></li>
                                            <li><a href="#">Terms & Conditions </a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 col-xs-12">
                                    <div className="paira-widget paira-social">
                                        <h4>Follow Us</h4>
                                        <ul className="list-inline list-unstyled">
                                            <li><a href="https://www.facebook.com/themetidy" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="https://plus.google.com/+Themetidy-Official-Page" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                                            <li><a href="https://twitter.com/themetidy" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="https://www.linkedin.com/company/themetidy" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="https://www.pinterest.com/themetidy/" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                                            <li><a href="https://www.behance.net/themetidy" target="_blank"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="paira-widget paira-payment">
                                        <h4>Payment Methode</h4>
                                        <img src="assets/images/footer/payment-icon.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-12 col-xs-12 col-sm-12">
                                    <div className="paira-widget paira-copyright">
                                        <p className="margin-clear">© ThemeTidy. All Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </footer>
            </div>
            <div className="paira-loading ajax-loading margin-clear text-center">
                <img src="assets/images/AjaxLoader.gif" alt="" className="padding-clear margin-top-10"/>
                <p><b>Loading...</b></p>
            </div>
            <div className="modal fade quick-view" id="paira-quick-view" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fa fa-times"></i></span></button>
                            <div className="row margin-bottom-20">
                                <div className="col-md-5 col-sm-12 col-xs-12 margin-top-40 paira-margin-top-2">
                                    <div className="paira-product single-varients-product">
                                        <div className="position-r pull-left full-width margin-bottom-40">
                                            <div className="single-product-image paira-quick-single-product-image">
                                                <img src="assets/images/product/product-big-1.jpg" alt="" className="paira-product-image img-responsive"/>
                                            </div>
                                            <div className="single-product-container"></div>
                                        </div>
                                        <div className="position-r pull-left full-width small-verient-product">
                                            <div className="bx-carousel-fix">
                                                <div className="quick-product-image-list paira-quick-product-image-list">
                                                    <div><a href="#" data-image="assets/images/product/product-big-1.jpg"><img src="assets/images/product/product-big-1.jpg" alt="product-14" className="img-responsive center-block"/></a></div>
                                                    <div><a href="#" data-image="assets/images/product/product-big-2.jpg"><img src="assets/images/product/product-big-2.jpg" alt="product-15" className="img-responsive center-block"/></a></div>
                                                    <div><a href="#" data-image="assets/images/product/product-big.jpg"><img src="assets/images/product/product-big.jpg" alt="product-16" className="img-responsive center-block"/></a></div>
                                                    <div><a href="#" data-image="assets/images/product/product-big-1.jpg"><img src="assets/images/product/product-big-1.jpg" alt="product-14" className="img-responsive center-block"/></a></div>
                                                    <div><a href="#" data-image="assets/images/product/product-big-2.jpg"><img src="assets/images/product/product-big-2.jpg" alt="product-15" className="img-responsive center-block"/></a></div>
                                                </div>
                                            </div>
                                            <div className="single-product-container-small"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 col-xs-12 margin-top-40 paira-margin-top-2">
                                    <div className="product-detles">
                                        <h1 className="full-width text-capitalize margin-bottom-15 margin-clear"><a href="product.html">Sleep women with water color</a></h1>
                                        <div className="full-width pull-left margin-bottom-15">
                                            <h3 className="margin-right-5 pull-left margin-top-0 margin-bottom-0 del"><del className="margin-clear"><span className="money margin-clear">$200.00</span></del></h3>
                                            <h3 className="margin-left-5 pull-left margin-top-0 margin-bottom-0">$80.00</h3>
                                        </div>
                                        <div className="pull-left full-width margin-bottom-20">
                                            <label className="margin-bottom-10 pull-left full-width">Size :</label>
                                            <div className="arrow-d">
                                                <select className="pro-select">
                                                    <option value="volvo">1024 x 1024 px</option>
                                                    <option value="saab">890 x 890 px</option>
                                                    <option value="mercedes">620 x 620 px</option>
                                                    <option value="audi">320 x 320 px</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="pull-left full-width margin-bottom-20">
                                            <label className="margin-bottom-10">Quantity :</label>
                                            <div className="quentity">
                                                <div className="product_quantity_group product-quantity-fix">
                                                    <input type="text" className="form-control text-center pull-left font-size-16" value="2"/>
                                                    <div className="up-down text-center pull-left overflow">
                                                        <span className="up" data-direction="up"><i className="fa fa-angle-up"></i></span>
                                                        <span className="down" data-direction="down"><i className="fa fa-angle-down"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-success btn-lg text-capitalize margin-bottom-20">Add To Cart</button>
                                    </div>
                                    <div className="sicoal-share-widget margin-top-10  full-width pull-left">
                                        <label className=" pull-left">Share :</label>
                                        <ul className="social-li list-inline">
                                            <li><a href="https://www.facebook.com/themetidy" target="_blank"><i className="fa fa-facebook font-size-18"></i></a></li>
                                            <li><a href="https://plus.google.com/+Themetidy-Official-Page" target="_blank"><i className="fa fa-google-plus font-size-18"></i></a></li>
                                            <li><a href="https://twitter.com/themetidy" target="_blank"><i className="fa fa-twitter font-size-18"></i></a></li>
                                            <li><a href="https://www.pinterest.com/themetidy/" target="_blank"><i className="fa fa-pinterest font-size-18"></i></a></li>
                                            <li><a href="https://www.linkedin.com/company/themetidy" target="_blank"><i className="fa fa-linkedin font-size-18"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade ajax-success-message" id="paira-ajax-success-message" tabindex="-1" role="dialog"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fa fa-times"></i></span></button>
                            <div className="row paira-margin-top-2">
                                <div className="col-md-4 pull-right padding-left-0 col-xs-12 col-sm-4 paira-success-message-img"><img src="assets/images/product/product-10.jpg" alt="" className="img-responsive"/></div>
                                <div className="col-md-8 col-xs-12 col-sm-8 pull-left">
                                    <h4 className="margin-top-0 paira-success-message-title"><strong className="paira-success-message-details letter-spacing-2"><i className="fa fa-check-circle"></i> Added To Your Shopping Cart.</strong></h4>
                                    <a href="#" data-dismiss="modal" aria-label="Close" className="btn btn-success btn-lg btn-block margin-top-30">Continue Shopping</a>
                                    <a href="#" className="btn btn-default btn-lg btn-block margin-top-15 paira-success-message-link">Go To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade paira-cart-popup" id="paira-ajax-cart" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fa fa-times"></i></span></button>
                            <div className="row margin-top-40">
                                <div className="col-md-7 col-sm-7 col-xs-12 cart-table margin-top-40">
                                    <h3 className="margin-top-0">Shopping Cart</h3>
                                    <div className="cart-table-inner">
                                        <div className="column full-width overflow">
                                            <div className="row-1">
                                                <a href="#" className="pull-left"><img className="" src="assets/images/product/product-10.jpg" alt=""/></a>
                                            </div>
                                            <div className="row-2">
                                                <a href="product.html" className="cart-menu-line-title">Butterfly eyes women</a>
                                                <div className="quentity margin-bottom-15 pull-left">
                                                    <div className="product_quantity_group product-quantity-fix">
                                                        <input type="text" className="form-control text-center pull-left font-size-16 margin-left-15" value="2"/>
                                                        <div className="up-down text-center pull-left overflow">
                                                            <span className="up" data-direction="up"><i className="fa fa-angle-up"></i></span>
                                                            <span className="down" data-direction="down"><i className="fa fa-angle-down"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btn-group full-width dropdown-category margin-bottom-15">
                                                    <button type="button" className="btn btn-success dropdown-toggle text-uppercase" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">1024 x 1024 px<i className="fa fa-angle-down dropdown-icon"></i></button>
                                                    <ul className="dropdown-menu text-uppercase">
                                                        <li><a href="#">Bed Room</a></li>
                                                        <li><a href="#">Showcase</a></li>
                                                        <li><a href="#">Dining Room</a></li>
                                                        <li><a href="#">Living Room</a></li>
                                                        <li><a href="#">Drowing Room</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="margin-clear cart-product-price">$180</h2>
                                            </div>
                                            <div className="row-3"><p><a href="#" className="remove margin-top-20"><i className="fa fa-trash fa-2x"></i></a></p></div>
                                        </div>
                                        <div className="column full-width overflow">
                                            <div className="row-1">
                                                <a href="#" className="pull-left"><img className="" src="assets/images/product/product-9.jpg" alt=""/></a>
                                            </div>
                                            <div className="row-2">
                                                <a href="product.html" className="cart-menu-line-title">Butterfly eyes women</a>
                                                <div className="quentity margin-bottom-15 pull-left">
                                                    <div className="product_quantity_group product-quantity-fix">
                                                        <input type="text" className="form-control text-center pull-left font-size-16 margin-left-15" value="2"/>
                                                        <div className="up-down text-center pull-left overflow">
                                                            <span className="up" data-direction="up"><i className="fa fa-angle-up"></i></span>
                                                            <span className="down" data-direction="down"><i className="fa fa-angle-down"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btn-group full-width dropdown-category margin-bottom-15">
                                                    <button type="button" className="btn btn-success dropdown-toggle text-uppercase" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">1024 x 1024 px<i className="fa fa-angle-down dropdown-icon"></i></button>
                                                    <ul className="dropdown-menu text-uppercase">
                                                        <li><a href="#">Bed Room</a></li>
                                                        <li><a href="#">Showcase</a></li>
                                                        <li><a href="#">Dining Room</a></li>
                                                        <li><a href="#">Living Room</a></li>
                                                        <li><a href="#">Drowing Room</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="margin-clear cart-product-price">$180</h2>
                                            </div>
                                            <div className="row-3"><p><a href="#" className="remove margin-top-20"><i className="fa fa-trash fa-2x"></i></a></p></div>
                                        </div>
                                    </div>
                                    <div className="cart-menu-buttons text-right">
                                        <a href="#" className="btn btn-success pull-left">Continue Shopping</a>
                                        <a href="#" className="btn btn-success pull-right">Update Cart</a>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-5 col-xs-12 cart-table margin-top-40">
                                    <div className="margin-bottom-30">
                                        <h3 className="margin-clear margin-bottom-15">Sub Total</h3>
                                        <div className="cart-sub-total">
                                            <textarea id="note" name="note" className=" margin-bottom-15 form-control" placeholder="Special instruction for seller"></textarea>
                                            <h1 className="margin-bottom-15 text-center"><span className="money">$510.00</span></h1>
                                            <input type="submit" id="checkout" className="btn btn-success btn-lg btn-block" name="checkout" value="Proceed To Checkout"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="modal fade paira-login-popup" id="paira-login" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                    aria-hidden="true"><i className="fa fa-times"></i></span></button>
                            <div className="row">
                                <div className="col-md-3 col-sm-3 paira-margin-top-3">
                                    <div className="currency">
                                        <h3 className="text-capitalize margin-bottom-30">currency</h3>
                                        <ul className="list-inline text-uppercase full-width">
                                            <li><a href="#"><span>CAD</span></a></li>
                                            <li><a href="#"><span>USD</span></a></li>
                                            <li><a href="#"><span>AUD</span></a></li>
                                            <li><a href="#"><span>GBP</span></a></li>
                                            <li><a href="#"><span>CAD</span></a></li>
                                            <li><a href="#"><span>YUN</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-9 paira-margin-top-3">
                                    <h3 className="text-capitalize margin-bottom-30">Login</h3>
                                    <form accept-charset="UTF-8" action="#" className="contact-form" method="post">
                                        <div>
                                            <input name="form_type" type="hidden" value="contact">
                                            <input name="utf8" type="hidden" value="✓">
                                            <div className="input-group margin-bottom-20">
                                                <span className="input-group-addon" id="basic-addon1">Email</span>
                                                <input type="text" className="form-control" aria-describedby="basic-addon3"/>
                                            </div>
                                            <div className="input-group margin-bottom-20">
                                                <span className="input-group-addon" id="basic-addon2">Password</span>
                                                <input type="text" className="form-control" aria-describedby="basic-addon3"/>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="margin-bottom-20 for-pass full-width text-right">
                                        <a href="reset-password.html" className="forget pull-left margin-top-10 text-underline">Reset Password?</a>
                                        <a href="login.html" className="btn btn-success btn-lg">Login</a>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-12 paira-margin-top-3">
                                    <h3 className="text-capitalize margin-bottom-30">Register</h3>
                                    <form accept-charset="UTF-8" action="#" className="contact-form" method="post">
                                        <div>
                                            <input name="form_type" type="hidden" value="contact">
                                            <input name="utf8" type="hidden" value="✓">
                                            <div className="input-group margin-bottom-20">
                                                <span className="input-group-addon" id="basic-addon3">First Name</span>
                                                <input type="text" className="form-control" aria-describedby="basic-addon3"/>
                                            </div>
                                            <div className="input-group margin-bottom-20">
                                                <span className="input-group-addon" id="basic-addon4">Last Name</span>
                                                <input type="text" className="form-control" aria-describedby="basic-addon3"/>
                                            </div>
                                            <div className="input-group margin-bottom-20">
                                                <span className="input-group-addon" id="basic-addon5">Email</span>
                                                <input type="text" className="form-control" aria-describedby="basic-addon3"/>
                                            </div>
                                            <div className="input-group margin-bottom-20">
                                                <span className="input-group-addon" id="basic-addon6">Password</span>
                                                <input type="text" className="form-control" aria-describedby="basic-addon3"/>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="margin-bottom-20 for-pass full-width text-right">
                                        <a href="login.html" className="btn btn-success btn-lg">Register</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="modal fade paira-menu-popup" id="paira-menu" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg text-center">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fa fa-times"></i></span></button>
                            <div className="row">
                                <div className="col-md-12 margin-top-15">
                                    <div className="menus">
                                        <h3>MAIN MENU</h3>
                                        <ul className="list-unstyled margin-top-20">
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="product.html">Shop</a></li>
                                            <li className="dropdown">
                                                <a className="dropdown-toggle plus" data-toggle="dropdown" href="#">Collection<i className="fa fa-plus margin-left-5"></i><i className="fa fa-minus minus-fa"></i></a>
                                                <ul className="dropdown-menu sub">
                                                    <li><a href="list-collections.html">List Collection</a></li>
                                                    <li><a href="collection.html">Collection</a></li>
                                                    <li><a href="collection-list-view.html">Collection List View</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                            <li className="dropdown">
                                                <a className="dropdown-toggle plus" data-toggle="dropdown" href="#">Pages<i className="fa fa-plus margin-left-5"></i><i className="fa fa-minus minus-fa"></i></a>
                                                <ul className="dropdown-menu sub">
                                                    <li><a href="article.html">article</a></li>
                                                    <li><a href="login.html">login</a></li>
                                                    <li><a href="register.html">register</a></li>
                                                    <li><a href="reset-password.html">reset-password</a></li>
                                                    <li><a href="search.html">search</a></li>
                                                    <li><a href="404.html">404</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul className="social-links list-inline">
                                            <li><a href="https://www.facebook.com/themetidy" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="https://plus.google.com/+Themetidy-Official-Page" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                                            <li><a href="https://twitter.com/themetidy" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="https://www.linkedin.com/company/themetidy" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="https://www.pinterest.com/themetidy/" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                                            <li><a href="https://www.behance.net/themetidy" target="_blank"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade paira-search-popup search-pops" id="paira-search" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fa fa-times"></i></span></button>
                            <div className="row">
                                <div className="col-md-12 paira-margin-top-1">
                                    <form className="popup-search-form">
                                        <input type="text" className="form-control padding-clear text-capitalize pop-light" name="q" value="" placeholder="Search here..."/>
                                        <button className="search"><i className="fa fa-search fa-2x"></i></button>
                                        <button className="btn btn-success btn-lg text-uppercase pull-right margin-top-15">go</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="assets/js/jquery-3.2.1.min.js" type="text/javascript"></script>
            <script src="assets/js/jquery-migrate-3.0.0.min.js" type="text/javascript"></script>
            <script src="assets/js/jquery.easing.1.3.js" type="text/javascript"></script>
            <script src="assets/js/jquery.waypoints.min.js" type="text/javascript"></script>
            <script src="assets/js/bootstrap.min.js" type="text/javascript"></script>
            <script src="assets/js/jquery.mousewheel.min.js" type="text/javascript"></script>
            <script src="assets/js/jquery.bxslider.min.js"></script>
            <script src="assets/js/paira.js" type="text/javascript"></script>
            </body>
        </section>
    )
}
    
export default Collection_list_view;