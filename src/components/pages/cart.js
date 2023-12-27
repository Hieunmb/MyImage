function Cart(){
    return(
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
                            <hr/>
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
                            <hr/>
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
    )
}
export default Cart;