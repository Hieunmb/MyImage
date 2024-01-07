import React, { useEffect, useState } from 'react';
function Cart(){
    const [selectedOption, setSelectedOption] = useState('PAYPAL');

    const handlePaymentChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const updateQuantity = (index, action) => {
        const updatedCartItems = [...cartItems];
        const itemToUpdate = { ...updatedCartItems[index] };

        if (action === 'increase') {
            itemToUpdate.quantity += 1;
        } else if (action === 'decrease' && itemToUpdate.quantity > 1) {
            itemToUpdate.quantity -= 1;
        }

        updatedCartItems[index] = itemToUpdate;

        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    };

    const removeFromCart = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);

        const updatedCartCount = updatedCartItems.length;
        localStorage.setItem('cartCount', updatedCartCount);
        setCartCount(updatedCartCount);

        const newTotal = updatedCartItems.reduce((total, item) => total + parseFloat(item.total), 0);
        setTotalAmount(newTotal);
        window.location.reload();
    };
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);

        const storedCartCount = JSON.parse(localStorage.getItem('cartCount')) || 0;
        setCartCount(storedCartCount);

        const initialTotal = storedCartItems.reduce((total, item) => total + parseFloat(item.total), 0);
        setTotalAmount(initialTotal);
    }, []);
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
                        {cartItems.map((item, index) => (
                            <div className="column full-width overflow" style={{marginBottom:"10px"}} key={index}>
                                <div className="row-1">
                                    <a href="#" className="pull-left"><img className="" src={item.thumbnail} alt=""/></a>
                                </div>
                                <div className="row-2">
                                    <a href="product.html" className="cart-menu-line-title">Frame: {item.selectedOption}</a>
                                    <div className="quentity margin-bottom-15 pull-left">
                                        <div className="product_quantity_group product-quantity-fix">
                                            <input type="text" className="form-control text-center pull-left font-size-16 margin-left-15" onChange={() => updateQuantity(index, '')} value={item.quantity}/>
                                            <div className="up-down text-center pull-left overflow">
                                            <span className="up" data-direction="up"><i className="fa fa-angle-up" onClick={() => updateQuantity(index, 'increase')}></i></span>
                                            <span className="down" data-direction="down"><i className="fa fa-angle-down" onClick={() => updateQuantity(index, 'decrease')}></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-group full-width dropdown-category margin-bottom-15">
                                        <button type="button" className="btn btn-success dropdown-toggle text-uppercase" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{item.selectedSize}<i className="fa fa-angle-down dropdown-icon"></i></button>
                                        <ul className="dropdown-menu text-uppercase">
                                            <li><a href="#"></a></li>
                                            <li><a href="#">Showcase</a></li>
                                            <li><a href="#">Dining Room</a></li>
                                            <li><a href="#">Living Room</a></li>
                                            <li><a href="#">Drowing Room</a></li>
                                        </ul>
                                    </div>
                                    <div className="btn-group full-width dropdown-category margin-bottom-15">
                                        <button type="button" className="btn btn-success dropdown-toggle text-uppercase" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{item.hanger}<i className="fa fa-angle-down dropdown-icon"></i></button>
                                        <ul className="dropdown-menu text-uppercase">
                                            <li><a href="#"></a></li>
                                            <li><a href="#">Showcase</a></li>
                                            <li><a href="#">Dining Room</a></li>
                                            <li><a href="#">Living Room</a></li>
                                            <li><a href="#">Drowing Room</a></li>
                                        </ul>
                                    </div>
                                    <h2 className="margin-clear cart-product-price">{item.total}</h2>
                                </div>
                                <div className="row-3"><p><a onClick={() => removeFromCart(index)} className="remove margin-top-20"><i className="fa fa-trash fa-2x"></i></a></p></div>
                            </div>
                            ))}
                        </div>
                        <div className="cart-menu-buttons text-right">
                            <a href="/" className="btn btn-success pull-left">Continue Shopping</a>
                            <a href="#" className="btn btn-success pull-right">Update Cart</a>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-5 col-xs-12 cart-table margin-top-40">
                        <div className="margin-bottom-30">
                            <h3 className="margin-clear margin-bottom-15">Sub Total</h3>
                            <div className="cart-sub-total">
                            <label className="radio-option" style={{marginRight:"15px"}}>
                                        <input
                                            style={{ webkitAppearance: 'auto' }}
                                            type="radio"
                                            value="PAYPAL"
                                            checked={selectedOption === 'PAYPAL'}
                                            onChange={handlePaymentChange}
                                            name='paymentOption'
                                        />
                                        <span><i class='fab fa-paypal fa-9x' style={{fontSize:"20px",width:'20px',marginLeft:'5px'}}></i></span>
                                        <span>PayPal</span>
                                    </label>
                                    <br></br>
                                    <label className="radio-option" style={{marginRight:"15px"}}>
                                        <input
                                            style={{ webkitAppearance: 'auto' }}
                                            type="radio"
                                            value="COD"
                                            checked={selectedOption === 'COD'}
                                            onChange={handlePaymentChange}
                                            name='paymentOption'
                                        />
                                        <span><i class='fas fa-cart-arrow-down' style={{fontSize:"18px",width:'23px',marginLeft:'5px'}}></i></span>
                                        <span>COD</span>
                                    </label>
                                <h1 className="margin-bottom-15 text-center"><span className="money">${totalAmount.toFixed(2)}</span></h1>
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