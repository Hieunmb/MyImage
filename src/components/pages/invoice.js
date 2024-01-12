import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";
import { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";

function Invoice(){
  const navigate=useNavigate()
  const { id } = useParams();
  const [formData, setFormData] = useState({
    id:id,
    user_id: 0,
    feedback_id: 0,
    email:"",
    phone: "",
  address: "",
  city: "",
  total_amount: 0,
  status: 1,
  user_name:'',
  created_at:''
});
const [images, setImages] = useState([]);
const fetchData = async () => {
  try {
      const orderResponse = await api.get(url.ORDER.GET+`?id=${id}`); // Fetch data for the specific 'id'
      const {
        user_id,
        feedback_id,
        email,
        phone,
        address,
        city,
        total_amount,
        status,
        user,
        created_at,
      } = orderResponse.data;
      const token = localStorage.getItem("accessToken");
      const decodedToken = decodeToken(token);
      const decodedUserId = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      if (user_id != decodedUserId) {
        // Redirect to "/404" if the user IDs don't match
        navigate("/404");
        return;
      }
      // Accessing the user's name from the nested 'user' object
  
      setFormData({
        ...formData,
        user_id,
        feedback_id,
        email,
        phone,
        address,
        city,
        total_amount,
        status,
        user_name: user.name,
        created_at
      });
      const imagesResponse = await api.get(url.IMAGE.GET + `?orderId=${id}`);
      setImages(imagesResponse.data);
  } catch (error) {
      console.error(error);
  }
};
useEffect(() => {
  fetchData();
}, [id]);
    return(
        <div className="card" style={{width:"50%",border:"solid 1px black",margin:"auto",marginBottom:"50px",paddingBottom:"20px"}}>
  <div className="card-body">
    <div className="container mb-5 mt-3">
      <div className="row d-flex align-items-baseline">
        <div className="col-xl-9">
          <p style={{color: "#7e8d9f",fontSize: "20px",marginLeft:"30px",}}>Invoice &gt;&gt; <strong>ID: {id}</strong></p>
        </div>
      </div>
      <div className="container">
        <div className="col-md-12">
          <div className="text-center">
            <i className="far fa-4x ms-0" style={{color:"#8f8061" }}></i>
          </div>
          
        </div>
       
        <div className="row" style={{display:"flex"}} >
          <div className="col-xl-8" style={{marginLeft:"18px"}}>
            <ul className="list-unstyled">
              <li className="text-muted" style={{fontWeight:"bold"}}>To: <span style={{color:"#8f8061"}}>{formData.user_name}</span></li>
              <li className="text-muted" style={{fontWeight:"bold"}}>Street: {formData.address}</li>
              <li className="text-muted"style={{fontWeight:"bold"}}>City: {formData.city}</li>
              <li className="text-muted" style={{fontWeight:"bold"}}>Phone Number: {formData.phone}</li>
            </ul>
          </div>
          <div className="col-xl-4" style={{marginLeft:"250px"}}>
            <p className="text-muted" style={{fontWeight:"700"}}>Invoice</p>
            <ul className="list-unstyled">
              <li className="text-muted"><i className="fas fa-circle" style={{color:"#8f8061"}}></i> <span
                  className="fw-bold" style={{fontWeight:"bold"}}>ID:</span>{id}</li>
              <li className="text-muted"><i className="fas fa-circle" style={{color:"#8f8061"}}></i> <span
                  className="fw-bold" style={{fontWeight:"bold"}}>Creation Date: </span>{formData.created_at}</li>
              <li className="text-muted"><i className="fas fa-circle" style={{color:"#8f8061"}}></i> <span
                  className="me-1 fw-bold" style={{fontWeight:"bold"}}>Status:</span><span>
                  {
                                                        (() => {
                                                        switch (formData.status) {
                                                            case 0:
                                                            return <span className="label label-danger">Canceled</span>;

                                                            case 1:
                                                            return <span className="label label-warning">Waitting...</span>;

                                                            case 2:
                                                            return <span className="label label-success">Confirmed</span>;

                                                            case 3:
                                                            return <span className="label label-warning">Shipping...</span>;

                                                            case 4:
                                                            return <span className="label label-success">Shipped</span>;

                                                            case 5:
                                                            return <span className="label label-success">Successed</span>;

                                                            default:
                                                            return null;
                                                        }
                                                        })()
                                                    }</span></li>
            </ul>
          </div>
        </div>
        {images.map((i,k) => (
        <div key={k} className="row my-2 mx-1 justify-content-center" style={{marginTop:"18px",verticalAlign:"initial"}}>
          <div className="col-md-2 mb-4 mb-md-0" >
            <div className="
                        bg-image
                        ripple
                        rounded-5
                        mb-4
                        overflow-hidden
                        d-block
                        " data-ripple-color="light">
              <img src={i.thumbnail}
                className="w-100" height="100px" alt="Elegant shoes and shirt" />
              <a href="#!">
                <div className="hover-overlay">
                  <div className="mask" style={{backgroundColor: "hsla(0, 0%, 98.4%, 0.2)"}}></div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-7 mb-4 mb-md-0">
            <p className="fw-bold" style={{fontWeight:"bold"}}>Frame: {i.frame.frame_name}</p>
            <p className="mb-1">
              <span className="text-muted me-2"style={{fontWeight:"bold"}}>Size:</span><span>{i.size.size_name}</span>
            </p>
            <p>
              <span className="text-muted me-2"style={{fontWeight:"bold"}}>Hanger:</span><span>{i.hanger.hanger_name}</span>
            </p>
          </div>
        </div>
       ))}
        <div className="row">
          <div className="col-xl-3" style={{float:"right"}}>
            <ul className="list-unstyled">
              <li className="text-muted ms-3"style={{marginRight:"570px",marginTop:"35px"}} ><span className="text-black me-4">Sub Total:</span>${formData.total_amount}.00</li>
            </ul>
            <p className="text-black float-start"><span className="text-black me-3"> Total Amount:</span><span
                style={{fontSize: "25px"}}>${formData.total_amount}.00</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export default Invoice;