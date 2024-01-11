function Profile(){
    return(       
        <aside class="left-sidebar" style={{ flexDirection: "column" }}>
        <div class="scroll-sidebar">
            <nav class="sidebar-nav">
                <ul id="sidebarnav">                
                    <li> <a class="waves-effect waves-dark" href="/profile" aria-expanded="false"><i style={{verticalAlign:"initial"}}></i><span>Information</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="/orders" aria-expanded="false"><i style={{verticalAlign:"initial"}}></i><span>Orders</span></a>
                    </li>              
                </ul>
            </nav>
        </div>
    
        <div className="container py-5" style={{marginBottom:"100px"}}>            
        <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">           
              </div>            
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Johnatan Smith</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">example@example.com</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>               
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
            
                  
                </div>
              </div>
            </div>
            </aside>
         
        
        
      
        
       
    )
}
export default Profile;