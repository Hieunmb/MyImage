import { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { decodeToken } from "react-jwt";
import { Link, useNavigate } from "react-router-dom";

    function Order(){
      const navigate=useNavigate();
        const token = localStorage.getItem("accessToken");
    const decodedToken = decodeToken(token);
    const cusId=decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
        const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get(url.ORDER.LIST);
        
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
    
  }, []);
  const handleCancel = async (orderId) => {
    try {
      await api.put(url.ORDER.CANCEL+`?Id=${orderId}`);
      window.location.reload()
      window.alert("Your order canceled success")
      // Optionally, update the state or fetch orders again to reflect the cancellation
      // setOrders(updatedOrders);
    } catch (error) {
      console.error("Cancellation failed:", error);
      // Handle error, show message, etc.
    }
  };
  const handleReceived = async (orderId) => {
    try {
      await api.put(url.ORDER.UPDATE+`?Id=${orderId}`);
      window.location.reload()
      window.alert("Your order received success")
    } catch (error) {
      console.error("Status update failed:", error);
      // Handle error, show message, etc.
    }
  };
     return(
        <div class="page-wrapper">
        <div class="container-fluid" style={{marginLeft:"50px"}}>
            <div class="row page-titles">
                <div class="col-md-7 align-self-center text-end">                   
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">List Orders</h5>
                            {orders
                            .filter((order) => order.user_id == cusId)
                            .length > 0 ? (
                            <div class="table-responsive m-t-30">
                                <table class="table product-overview">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Address</th>
                                            <th>City</th>
                                            <th>Total Amount</th>
                                            <th>Status</th>
                                            <th>Created At</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {orders
                        .filter((order) => order.user_id == cusId)
                        .map((o, k) => (                                       
                                        <tr key={k} style={{verticalAlign: "initial"}}>
                                            <td>{o.id}</td>
                                            <td>{o.user.name}</td>
                                            <td>{o.user.email}</td>
                                            <td>{o.phone}</td>
                                            <td>{o.address}</td>
                                            <td>{o.city}</td>
                                            <td>${o.total_amount}.00</td>
                                            <td>
                                                {(() => {
                                switch (o.status) {
                                  case 0:
                                    return <span className="label label-danger">Canceled</span>;

                                  case 1:
                                    return <span className="label label-warning">Waiting...</span>;

                                  case 2:
                                    return <span className="label label-success">Confirmed</span>;

                                  case 3:
                                    return <span className="label label-warning">Shipping...</span>;

                                  case 4:
                                    return <span className="label label-success">Shipped</span>;

                                  case 5:
                                    return <span className="label label-success">Succeeded</span>;

                                  default:
                                    return null;
                                }
                              })()}
                                            </td>
                                            <td>{o.created_at}</td>
                                            <td><Link to={`/orderdetail/${o.id}`} className="btn btn-primary" style={{borderRadius:"15px", backgroundColor:"#03a9f3"}}> Detail  </Link></td>
                                            <td>
                                            {o.status === 1 ? (
                  <button className="btn btn-primary" style={{ borderRadius: "15px", backgroundColor: "red" }} onClick={() => handleCancel(o.id)}>
                    Cancel
                  </button>
                  ) : o.status === 4 ? (
                    <button className="btn btn-success" style={{ borderRadius: "15px", backgroundColor: "green" }} onClick={() => handleReceived(o.id)}>
                      Received
                    </button>
                  ) : o.status === 5 ? (
                    <a className="btn btn-primary" style={{ borderRadius: "15px", backgroundColor: "#5cb85c", color:"black" }}>
                    Succeed
                  </a>
                ) : (
                  <a className="btn btn-primary" style={{ borderRadius: "15px", backgroundColor: "gray", color:"black" }}>
                    Cancel
                  </a>
                )}
                  </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            ) : (
                              <div>
                                <h1>You haven't placed any orders yet.</h1>
                      <Link to="/product" className="btn btn-primary" style={{ borderRadius: "15px", backgroundColor: "#03a9f3" }}> Explore Products </Link>
                    </div>
                          )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     )   
    }
    export default Order;