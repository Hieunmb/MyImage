import { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { decodeToken } from "react-jwt";
import { Link } from "react-router-dom";

    function Order(){
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