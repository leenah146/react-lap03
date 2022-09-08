import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Pages/Home';
import Addblog from './Component/Pages/Addblog';
import Blogdetails from './Component/Pages/Blogdetails';
import Notfound from './Component/Pages/Notfound';
// import NotFound from './pages/NotFound';
// import BlogDetails from './pages/BlogDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<Addblog/>}/>
        <Route path='/details/:id' element={<Blogdetails/>} />
        <Route path='*' element={<Notfound/>} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;