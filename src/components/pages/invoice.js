function Invoice(){
    return(
        <div className="card">
  <div className="card-body">
    <div className="container mb-5 mt-3">
      <div className="row d-flex align-items-baseline">
        <div className="col-xl-9">
          <p style={{color: "#7e8d9f",fontSize: "20px"}}>Invoice &gt;&gt; <strong>ID: #123-123</strong></p>
        </div>
      </div>
      <div className="container">
        <div className="col-md-12">
          <div className="text-center">
            <i className="far fa-4x ms-0" style={{color:"#8f8061" }}></i>
          </div>
          <hr></hr>
        </div>
        <div className="row" style={{display:"flex"}} >
          <div className="col-xl-8" style={{marginLeft:"18px"}}>
            <ul className="list-unstyled">
              <li className="text-muted" style={{fontWeight:"bold"}}>To: <span style={{color:"#8f8061"}}>Name</span></li>
              <li className="text-muted" style={{fontWeight:"bold"}}>Street, City:</li>
              <li className="text-muted"style={{fontWeight:"bold"}}>State, Country:</li>
              <li className="text-muted" style={{fontWeight:"bold"}}><i className="fas fa-phone"></i>Phonenumber:123-456-789</li>
            </ul>
          </div>
          <div className="col-xl-4" style={{marginLeft:"550px"}}>
            <p className="text-muted" style={{fontWeight:"700"}}>Invoice</p>
            <ul className="list-unstyled">
              <li className="text-muted"><i className="fas fa-circle" style={{color:"#8f8061"}}></i> <span
                  className="fw-bold" style={{fontWeight:"bold"}}>ID:</span>#123-456</li>
              <li className="text-muted"><i className="fas fa-circle" style={{color:"#8f8061"}}></i> <span
                  className="fw-bold" style={{fontWeight:"bold"}}>Creation Date: </span>Jun 23,2021</li>
              <li className="text-muted"><i className="fas fa-circle" style={{color:"#8f8061"}}></i> <span
                  className="me-1 fw-bold" style={{fontWeight:"bold"}}>Status:</span><span className="badge bg-warning text-black fw-bold">
                  Paid</span></li>
            </ul>
          </div>
        </div>
        <div className="row my-2 mx-1 justify-content-center" style={{marginTop:"18px",verticalAlign:"initial"}}>
          <div className="col-md-2 mb-4 mb-md-0" >
            <div className="
                        bg-image
                        ripple
                        rounded-5
                        mb-4
                        overflow-hidden
                        d-block
                        " data-ripple-color="light">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp"
                className="w-100" height="100px" alt="Elegant shoes and shirt" />
              <a href="#!">
                <div className="hover-overlay">
                  <div className="mask" style={{backgroundColor: "hsla(0, 0%, 98.4%, 0.2)"}}></div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-7 mb-4 mb-md-0">
            <p className="fw-bold" style={{fontWeight:"bold"}}>Custom suit</p>
            <p className="mb-1">
              <span className="text-muted me-2"style={{fontWeight:"bold"}}>Size:</span><span>8.5</span>
            </p>
            <p>
              <span className="text-muted me-2"style={{fontWeight:"bold"}}>Color:</span><span>Gray</span>
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-xl-8" style={{marginLeft:"40px"}}>
            <p className="ms-3">Add additional notes and payment information</p>
          </div>
          <div className="col-xl-3" style={{float:"right"}}>
            <ul className="list-unstyled">
              <li className="text-muted ms-3"><span className="text-black me-4">Sub Total:</span>  $1050</li>
              <li className="text-muted ms-3 mt-2"><span className="text-black me-4">Shipping:</span>$15</li>
            </ul>
            <p className="text-black float-start"><span className="text-black me-3"> Total Amount:</span><span
                style={{fontSize: "25px"}}>$1065</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export default Invoice;