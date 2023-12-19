import React from "react";

function Footer() {
    return (
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
    )
}

export default Footer;