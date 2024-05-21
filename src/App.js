import { useEffect, useState } from 'react';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact.jsx';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './i18n.js'
import { Route ,Routes } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner.jsx';
import CategoryFace from './Pages/CategoryFace.jsx';
function App() {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
  //   if(!loading){
  //     setLoading(true)
  //   }
  //   setTimeout(()=>{
  //     setLoading(false)
  //   },3000)
  },[])
  return (
    <>
         <Navbar/>
{/* { loading ? <Spinner/> : */}
  <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/home' element={<Home/>} /> */}
        <Route path='/product' element={<Product/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/category/:id' element={<CategoryFace/>} />
      </Routes>
      {/* } */}
     <Footer/>
    </>
  );
}

export default App;
