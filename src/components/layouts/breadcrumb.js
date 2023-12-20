import { useLocation } from 'react-router-dom';
import React from 'react';
function BreadCrumb({ currentLocation }){
    let breadcrumbName = 'Default'; // Default name or any other initial value
  
  // Update breadcrumb name based on current location
  switch (currentLocation) {
    case '/':
      breadcrumbName = 'Home';
      break;
    case '/about':
      breadcrumbName = 'About Us';
      break;
    case '/article':
      breadcrumbName = 'Article';
      break;
    // Add more cases for other routes as needed
  }
    return(
        
        <section className="breadcrumb-container paira-margin-bottom-3">
            <div className="breadcrumb">
                <div className="container-fluid padding-fix">
                    <ul className="list-inline">
                        <li><a href="/">Home</a></li>
                        <li>-</li>
                        <li>{breadcrumbName}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default BreadCrumb;