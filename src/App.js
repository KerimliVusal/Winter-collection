
import { useEffect, useState } from 'react';
import axios from 'axios'
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setAllData } from './store/features/allDataSlice';
import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
// https://raw.githubusercontent.com/T-Ulvi/Fashion-Store/main/images/p10-type1.jpg
import {Routes,Route, useLocation, useNavigate} from 'react-router-dom'
import Detail from './containers/Detail/Detail';
import Footer from './components/Footer/Footer';
import Page404 from './containers/Page404/Page404';
import BlogPage from './containers/BlogPage/BlogPage';
import AboutPage from './containers/AboutPage/AboutPage';
import ContactPage from './containers/Contact/ContactPage';
function App() {
  const [loading, setLoading] = useState(false);

  const dispatch=useDispatch();
  const location=useLocation();
  const navigate=useNavigate();
  useEffect(()=>{
   navigate('/');
    axios.get("https://raw.githubusercontent.com/T-Ulvi/FashionDB/main/db.json").then(res=>res.data)
    .then(res=>dispatch(setAllData(res)))
    .then(res=>setTimeout(()=>{
          setLoading(false)
              },1500) );
    
  },[]);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
          },1500) 
          window.scrollTo(0,0);
  },[location]);
  
  return (
    <>
    <Loading loading={loading}/>
    <div className={loading? 'hidden':'App'}>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<Detail/>}/>
      <Route path='/page404' element={<Page404/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
    <Footer/>
    </div>
    </>
  );
}

export default App;
