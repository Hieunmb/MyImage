import { Route, Routes } from 'react-router-dom';
import Error from './components/pages/404';
import About from './components/pages/about';
import Article from './components/pages/article';
import Blog from './components/pages/blog';
import Collection_list_view from './components/pages/collection-list-view';
import Collection from './components/pages/collection';
import Contact from './components/pages/contact';
import Index from './components/pages/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/404' element={<Error/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/article' element={<Article/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/collection-list-view' element={<Collection_list_view/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/index' element={<Index/>}/>
      </Routes>
    </div>
  );
}

export default App;
