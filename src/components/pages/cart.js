import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import url from '../../services/url';
import { useNavigate } from 'react-router-dom';
function Cart(){
    const navigate= useNavigate();
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
        itemToUpdate.total = itemToUpdate.quantity * itemToUpdate.price;
        updatedCartItems[index] = itemToUpdate;
        
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        recalculateTotal(updatedCartItems);
        setCartItems(updatedCartItems);
    };

    const removeFromCart = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);

        const updatedCartCount = updatedCartItems.length;
        localStorage.setItem('cartCount', updatedCartCount);
        setCartCount(updatedCartCount);

        recalculateTotal(updatedCartItems);
    };
    const recalculateTotal = (updatedCartItems) => {
        // Calculate the new total based on the updated cart items
        const newTotal = updatedCartItems.reduce((total, item) => total + parseFloat(item.total), 0);
    
        // Update the total in each item
        const itemsWithUpdatedTotal = updatedCartItems.map((item) => ({
            ...item,
            total: item.quantity * item.price, // Assuming you have quantity and price
        }));
    
        // Store the updated cart items with recalculated totals in localStorage
        localStorage.setItem('cartItems', JSON.stringify(itemsWithUpdatedTotal));
    
        // Update the total amount state if needed
        setTotalAmount(newTotal);
    };
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);

        const storedCartCount = JSON.parse(localStorage.getItem('cartCount')) || 0;
        setCartCount(storedCartCount);

        const initialTotal = storedCartItems.reduce((total, item) => total + parseFloat(item.total), 0);
        setTotalAmount(initialTotal);
        localStorage.setItem('totalAmount', initialTotal);
        
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
                                    <a  className="cart-menu-line-title">Frame: {item.selectedOption}</a>
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
                                        <button type="button" className="btn btn-success dropdown-toggle text-uppercase" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{item.selectedSize}</button>
                                    </div>
                                    <div className="btn-group full-width dropdown-category margin-bottom-15">
                                        <button type="button" className="btn btn-success dropdown-toggle text-uppercase" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{item.hanger}</button>
                                    </div>
                                    <h2 className="margin-clear cart-product-price">${item.total}.00</h2>
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
            
                            <h3 className="margin-clear margin-bottom-15">Sub Total</h3>
                            <div className="cart-sub-total">
                                <h1 className="margin-bottom-15 text-center"><span className="money">${totalAmount.toFixed(2)}</span></h1>
                                
                                <a href='/checkout' style={{color:"white"}}><button type="submit" id="checkout" className="btn btn-success btn-lg btn-block" name="checkout" value="Proceed To Checkout">Proceed To Checkout</button></a>
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