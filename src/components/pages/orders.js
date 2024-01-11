    function Order(){
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
                                        <tr style={{verticalAlign: "initial"}}>
                                            <td>1</td>
                                            <td>Nguyễn Đức Anh</td>
                                            <td>anguyenduc@gmail.com</td>
                                            <td>012345678</td>
                                            <td>SamSon</td>
                                            <td>Thanh Hoa</td>
                                            <td>1.000.050$</td>
                                            <td>
                                                <span class="label label-success">Paid</span>
                                            </td>
                                            <td>10-7-2017</td>
                                            <td><a href="/orderdetail" className="btn btn-primary" style={{borderRadius:"15px", backgroundColor:"#03a9f3"}}> Detail  </a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     )   
    }
    export default Order;