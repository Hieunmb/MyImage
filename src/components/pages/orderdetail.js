function OrderDetail(){
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
                                                        <th>Create At</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td><img src="../assets/images/product/product-1.jpg" alt="image" width="80"/></td>
                                                        <td>Khung den hong</td>
                                                        <td>Mac treo bang sat</td>
                                                        <td>20 x 30</td>
                                                        <td>20</td>
                                                        <td>10-12-2009</td>
                                                        <td class="font-500">$153</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="7" class="font-500" align="right">Total Amount</td>
                                                        <td class="font-500">$153</td>
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
                                        <a href="/invoice" className="btn btn-primary" style={{marginLeft:"-40px"}}>Invoice</a>
                                    </div>
                </div>
                
    )
}
export default OrderDetail;