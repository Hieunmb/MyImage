import React from 'react';
import { useLocation } from 'react-router-dom';

function BreadCrumb({ currentLocation }) {
  // Get the current location
  const location = useLocation();
  
  // Check if the current path is '/'
  const isHomePage = location.pathname === '/' || location.pathname === '/404';          

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
    case '/blog':
      breadcrumbName = 'Blog';
      break;
    case '/collection-list-view':
      breadcrumbName = 'Collection List View';
      break;
    case '/collection':
      breadcrumbName = 'Collection';
      break;
    case '/contact':
      breadcrumbName = 'Contact';
      break;
    case '/list-collection':
      breadcrumbName = 'List Collection';
      break;
    case '/login':
      breadcrumbName = 'Login';
      break;
    case '/product':
      breadcrumbName = 'Product';
      break;
    case '/register':
      breadcrumbName = 'Register';
      break;
    case '/reset-password':
      breadcrumbName = 'Reset Password';
      break;
    case '/search':
      breadcrumbName = 'Search';
      break;
    case '/profile':
      breadcrumbName = 'User Profile';
      break;
      case '/invoice':
      breadcrumbName = 'Invoice';
      break;
      case '/orders':
      breadcrumbName = 'Order';
      break;
      case '/orderdetail':
      breadcrumbName = 'Order Detail';
      break;
      case '/profile':
      breadcrumbName = 'User Profile';
      break;
      case '/checkout':
      breadcrumbName = 'Check Out';
      break;
  }

  return (
    <section className={`breadcrumb-container paira-margin-bottom-3 ${isHomePage ? 'hide' : 'show'}`}>
        <div className="breadcrumb">
            <div className="container-fluid padding-fix">
                <ul className="list-inline">
                    <li><a href="#">Home <i className="fa fa-angle-right"></i></a></li>
                    <li>{breadcrumbName}</li>
                </ul>
            </div>
        </div>
    </section>
  );
}

export default BreadCrumb;