function Menu(){
    return(
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
                            <hr/>
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
    )
}
export default Menu;