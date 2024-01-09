import React, { useEffect, useState } from "react";
import "../checkout/checkout.css"
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import url from "../../../services/url";
function CheckOut(){
  const navigate=useNavigate
  const [cartItems, setCartItems] = useState([]);
  const [img, setImg] = useState({
    thumbnail: cartItems.thumbnailUpload,
    frame_id:1,
    hanger_id:1,
    size_id: 1,
    order_id:1,
    quantity:1,
    amount:1,
  });
  const formHandle = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Your existing code for adding to cart with image upload
    if ( cartItems.length > 0) {
      const formData = new FormData();
      const selectedItem = cartItems[0]; // Accessing the first item in the cartItems array as an example

      formData.append("thumbnail", selectedItem.thumbnailUpload);
      formData.append("frame_id", selectedItem.frame_id);
      formData.append("hanger_id", selectedItem.hanger_id);
      formData.append("size_id", selectedItem.size_id);
      formData.append("order_id", 1);
      formData.append("quantity", selectedItem.quantity);
      formData.append("amount", selectedItem.total);

      api.post(url.IMAGE.POST, formData)
          .then((response) => {
              // Handle successful image upload
              window.alert('Your order has been successfully placed. Thank you for shopping with us!');
              navigate('/');
          })
          .catch((error) => {
              // Handle error
              console.error("Error uploading image:", error);
          });
  } else {
      console.log("No image uploaded or empty cart");
  }
};
  const total = JSON.parse(localStorage.getItem('totalAmount')) || 0;
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);
    return(
      <body className="bg-light">
      <div className="container">
      <form className="needs-validation" method="POST" onSubmit={formHandle} >
        <div className="py-5 text-center">
        </div>
    
        <div className="row">
          <div className="col-md-6 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Order summary</span>
            </h4>
            {cartItems.map((item, index) => (
            <div className="flex relative py-7" key={index}>
            <div className="">
              <img src={item.thumbnail} className="image-checkout h-full w-full object-contain object-center"/>
              
            </div>
            <div className="product ml-3 sm:ml-6 flex flex-1 flex-col">
              <div className="">
                <div className="flex justify-between">
                  <div className="info">
                    <div className="flex">
                      <p style={{marginRight:'10px'}}><i className="fas fa-palette"></i><span style={{padding: '0 5px',fontWeight: '500'}}>{item.selectedOption}</span></p>
                      <span className="mx-4 border-l"></span>
                      <p><i className="fas fa-expand-alt"></i><span style={{padding: '0 5px',fontWeight: '500'}}>{item.selectedSize}</span></p>
                    </div>
                  </div>
                  <div className="total">
                    <h2 className="price"> {item.total}.00$</h2>
                  </div>
  
                </div>
              </div>
              <div className="flex items-end justify-between pt-4 mt-auto">
                <div className="content">
                  <span style={{width:"150px"}} className="qt">QUANTITY : {item.quantity}</span>
                </div>
              </div>
            </div>
          </div>
            ))}
            <ul className="list-group mb-3">
              
              <li className="list-group-item border-0 d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${total}.00</strong>
              </li>
              <li className="list-group-item border-0 d-flex justify-content-between">
                <button className="btn bg-slate-900 text-slate-50 btn-block confirm-oder rounded-full" type="submit" style={{color:'white'}}>Confirm Oder</button>
              </li>
            </ul>
    
          </div>
          <div className="col-md-6 order-md-1">
            <h4 className="mb-3">Shopping address</h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="firstName">Name</label>
                  <input type="text" className="form-control rounded-2xl" id="firstName" placeholder="" value="" />
                  
                </div>
                <div className="col-md-6 mb-3">
                  <label for="email">Email</label>
                  <input type="email" className="form-control rounded-2xl" id="email" placeholder="" value="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="phonenumber">Phone Number</label>
                  <input type="text" className="form-control rounded-2xl" id="phonenumber" placeholder="" value="" />
                  
                </div>
                <div className="col-md-6 mb-3">
                  <label for="country">City</label>
                  <input type="text" className="form-control rounded-2xl" id="city" placeholder="" value="" />
                  
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label for="country">Address</label>
                  <input type="text" className="form-control rounded-4xl" id="address" placeholder="" value="" />
                  
                </div>
                
              </div>
              <hr className="mb-4"/>
              <h4 className="mb-3">Payment</h4>
              <div className="d-block my-3">
                <ul className="list-group mb-3">
                  <li className="list-group-item border-0 d-flex justify-content-between lh-condensed custom-radio">
                    <div>
                      <input id="PAYPAL" name="paymentMethod" type="radio" style={{ webkitAppearance: "auto" }} className="custom-control-input" checked />
                      <img style={{width:'30px',marginLeft:'5px'}} src="https://zapier-images.imgix.net/storage/services/b364fde42f6ef5e115a5d92f17c01390.png?auto=format&ixlib=react-9.8.0&fit=crop&q=50&w=60&h=60&dpr=1"/>
                    </div>
                    <span className="text-muted">PAYPAL</span>
                  </li>
                  <li className="list-group-item border-0 d-flex justify-content-between lh-condensed custom-radio">
                    <div>
                      <input id="VISA" name="paymentMethod" type="radio" style={{ webkitAppearance: "auto" }} className="custom-control-input" checked />
                      <img style={{marginLeft:"5px"}} src="https://www.dropbox.com/s/6f5dorw54xomw7p/logo-mastercard.png?raw=1" alt="MasterCard"/>
                      <img src="https://www.dropbox.com/s/by52qpmkmcro92l/logo-visa.png?raw=1" alt="Visa"/>
                    </div>
                    <span className="text-muted">Credit Card/ Visa</span>
                  </li>
                </ul>
                
              </div>
      </div>
      
      </div>
      </form>
      </div>
    
    </body>
    )
}
export default CheckOut;