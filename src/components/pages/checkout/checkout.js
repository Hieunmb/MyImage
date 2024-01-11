import React, { useEffect, useState } from "react";
import "../checkout/checkout.css"
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import url from "../../../services/url";
function CheckOut(){
  const navigate=useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [img, setImg] = useState({
    thumbnail: '',
    frame_id:1,
    hanger_id:1,
    size_id: 1,
    order_id:1,
    quantity:1,
    amount:1,
  });
  const [userInfo, setUserInfo] = useState({
    user_id: 0,
    email: '',
    name:'',
    phone: '',
    address: '',
    city: '',
    total_amount: 0
});
const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        [id]: value,
    }));
};

  const formHandle = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const { user_id, email, phone, address, city, total_amount } = userInfo;

    // Create a payload with user information including the new phone, address, city values
    const payload = {
        user_id,
        email,
        phone,
        address,
        city,
        total_amount
    };

    try {
        // Call your API to save the user information
        const response = await api.post(url.ORDER.CREATE, payload);
        const order_id = response.data.id;
        console.log('Create Order Success')
        // Handle success or perform further actions
     
      if (cartItems.length > 0) {
        for (const selectedItem of cartItems) {
          const imageFormData = new FormData();
        // Populate image form data for image upload
        imageFormData.append("thumbnail", selectedItem.thumbnailUpload);
        imageFormData.append("frame_id", selectedItem.frame_id);
        imageFormData.append("hanger_id", selectedItem.hanger_id);
        imageFormData.append("size_id", selectedItem.size_id);
        imageFormData.append("order_id", order_id);
        imageFormData.append("quantity", selectedItem.quantity);
        imageFormData.append("amount", selectedItem.total);

        // Use a different API call for image upload with distinct form data
        const imageResponse = await api.post(url.IMAGE.POST, imageFormData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        navigate('/')
      }
        // Handle success of image upload if needed
    } else {
        console.log("No image uploaded or empty cart");
    }
} catch (error) {
    // Handle errors for both user information and image upload
    console.error("Error:", error);
}
};
  const total = JSON.parse(localStorage.getItem('totalAmount')) || 0;
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
    const token = localStorage.getItem("accessToken");
    if (token) {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        const customerName = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
        const decodedCustomerName = decodeURIComponent(escape(customerName));

        // Update userInfo using the decodedToken value
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            user_id: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
            email: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
            name:decodedCustomerName,
            total_amount:localStorage.getItem("totalAmount")
        }));

    }
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
                  <input
        type="text"
        className="form-control rounded-2xl"
        id="firstName"
        placeholder=""
        value={userInfo.name}
        readOnly // Add the readOnly attribute
    />
                  
                </div>
                <div className="col-md-6 mb-3">
                  <label for="email">Email</label>
                  <input
        type="email"
        className="form-control rounded-2xl"
        id="email"
        placeholder=""
        value={userInfo.email}
        readOnly // Add the readOnly attribute
    />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="phonenumber">Phone Number</label>
                  <input type="text" className="form-control rounded-2xl" id='phone' placeholder="" 
                  name='phone'
                  required
                  value={userInfo.phone}
                  onChange={handleInputChange}
                />
                  
                </div>
                <div className="col-md-6 mb-3">
                  <label for="country">City</label>
                  <input type="text" className="form-control rounded-2xl" id="city" placeholder="" 
                  name='city'
                  required
                  value={userInfo.city}
                  onChange={handleInputChange} />
                  
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label for="country">Address</label>
                  <input type="text" className="form-control rounded-4xl" id="address" placeholder="" 
                  name='address'
                  required
                  value={userInfo.address}
                  onChange={handleInputChange} />
                  
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