import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../../services/api";
import url from "../../services/url";
import { decodeToken } from "react-jwt";
import { Link } from "react-router-dom";

function OrderDetail(){
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
      console.log(imagesResponse.data)
  } catch (error) {
      console.error(error);
  }
};
useEffect(() => {
  fetchData();
}, [id]);
    return(
        <div class="page-wrapper">
            <div class="container-fluid" style={{marginLeft:"50px"}}>
                <div class="row page-titles">
                </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Orders Detail</h5>
                                        <div class="table-responsive">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Thumbnail</th>
                                                        <th>Frame</th>
                                                        <th>Hanger</th>
                                                        <th>Size</th>
                                                        <th>Quantity</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {images.map((i,k) => (
                                                    <tr key={k}>
                                                        <td>{i.id}</td>
                                                        <td><img src={i.thumbnail} alt="image" width="80"/></td>
                                                        <td>{i.frame.frame_name}</td>
                                                        <td>{i.hanger.hanger_name}</td>
                                                        <td>{i.size.size_name}</td>
                                                        <td>{i.quantity}</td>
                                                        <td class="font-500">${i.amount}.00</td>
                                                    </tr>
                                                    ))}
                                                    <tr>
                                                        <td colspan="6" class="font-500" align="right">Total Amount</td>
                                                        <td class="font-500">${formData.total_amount}.00</td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop:"20px", marginLeft:"1408px", marginBottom:"30px"}}>
                    <Link to={`/invoice/${formData.id}`} className="btn btn-primary" style={{marginLeft:"-40px"}}>Invoice</Link>
                                    </div>
                </div>
                
    )
}
export default OrderDetail;