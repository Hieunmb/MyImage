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
                                <li><a href="/">Home</a></li>
                                <li><a href="product">Shop</a></li>                                
                                <li><a href="blog">Blog</a></li>
                                <li><a href="about">About Us</a></li>
                                <li><a href="contact">Contact Us</a></li>                               
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