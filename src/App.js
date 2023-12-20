import {useLocation, Route, Routes } from 'react-router-dom';
import Error from './components/pages/404';
import About from './components/pages/about';
import Article from './components/pages/article';
import Blog from './components/pages/blog';
import Collection_list_view from './components/pages/collection-list-view';
import Collection from './components/pages/collection';
import Contact from './components/pages/contact';
import Index from './components/pages/index';
import Header from './components/layouts/header';
import BreadCrumb from './components/layouts/breadcrumb';
import Footer from './components/layouts/footer';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div class="paira-container pages-container">
      <Header></Header>
      <main class="about-page">
      <BreadCrumb currentLocation={location.pathname}></BreadCrumb>
      <Routes>
        <Route path='/404' element={<Error/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/article' element={<Article/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/collection-list-view' element={<Collection_list_view/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/' element={<Index/>}/>
      </Routes>
      </main>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
