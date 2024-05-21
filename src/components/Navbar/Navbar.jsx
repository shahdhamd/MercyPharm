import React, { useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { changeLanguage, i18n } from 'i18next';
import DataProduct from '../../Data/FaceProduct.json'
function Navbar() {
  const [active, setActive] = useState('HOME');
  const [open, setOpen] = useState(false)
  const { t, i18n: { changeLanguage, language } } = useTranslation()
  const [direction, setDirection] = useState('ltr');
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null);
  const [showSearch, setShowSearch] = useState(false)
  const change = () => {
    changeLanguage(language === 'en' ? 'ar' : 'en')
    setDirection(language === 'en' ? 'rtl' : 'ltr')
  }
  const handleSearch = e => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    console.log('query', searchQuery)
    const filteredData = DataProduct.filter(product => {
      console.log(product.title)

      if (product && product.title) {
        console.log(product)
        return product.title.toLowerCase().includes(query);
      }
      return false;
    });
    console.log('filter', filteredData)
    setSearchResults(filteredData);
    console.log(searchResults)
  };
  const handleClickIcon = () => {
    setShowSearch(true);
  }
  const close = () => {
    setShowSearch(false)
  }
  const useEffect = (() => {

  }, [searchQuery])

  return (


    <nav class="navbar navbar-expand-lg fixed-top navbar" style={{ direction: direction }} >
      <div className="container-fluid" style={{ height: '40px', width: '80%', margin: 'auto' }}>
        <button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" >
          <i class="fa-solid fa-bars"></i>        </button>
        <img src='https://mercypharm.com/assets/logo-maVgS3ug.svg' height={'100%'} />
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body ">
            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3 gap-3">
              <li class="nav-item">
                <NavLink to='home' className= "nav-link "  aria-current="page" href="#" >{t('navlinks.home')}</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to='product' className= "nav-link " aria-current="page" href="#">{t('navlinks.products')}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='about' className= "nav-link" aria-current="page" href="#" >{t('navlinks.about')}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='contact' className= "nav-link " aria-current="page" href="#">{t('navlinks.contact')}</NavLink>
              </li>
            </ul>

          </div>
        </div>
        <div className='d-flex justify-content-center align-items-center' style={{ position: window.matchMedia('(min-width: 992px)').matches ? 'relative' : '' }}> <label className='d-flex justify-content-center align-items-center p-2'>
          <i class="fa-solid fa-magnifying-glass d-flex d-lg-none" onClick={handleClickIcon}></i>
        </label>
          <form class="d-flex  " role="search">
            <input className="form-control me-2 d-none d-lg-flex" type="search" placeholder="Search" aria-label="Search" style={{ outline: 'none' }} onChange={handleSearch} />
          </form>
          <div className='d-flex justify-content-center align-items-center m-1' onClick={() => change()}>
            <i class="fa-solid fa-globe"></i>
            <span>{language.toUpperCase()}</span>
          </div>
          {showSearch ? (
            <div style={{ width: '93%', position: 'absolute', top: '87px', right: '27px', margin: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <input className="form-control me-2" type="text" placeholder="Search" style={{ outline: 'none' }} onChange={handleSearch} />
                <i className="fa-regular fa-rectangle-xmark fs-2 mx-2" style={{ color: 'red', background: 'white' }} onClick={() => close()}></i>
              </div>
              {searchQuery && searchResults.length > 0 && showSearch && (
                <div className='card' style={{ border: '1px solid #dee2e6', width: "calc(100% - 55px)", transition: 'all .2s ease' }} >
                  <ul className="list-group list-group-flush">
                    {searchResults.map((result, index) => (
                    <li key={index} className="list-group-item w-100 d-flex justify-content-between"><img src={result.image}  height={'40px'} style={{objectFit:'cover',marginLeft:'5px'}}/><p>{result.title}</p></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            searchQuery && searchResults.length > 0 && (
              <div className='card' style={{ position: 'absolute', top: '56px', right: '39px', border: '1px solid #dee2e6', width: "300px", transition: 'all .2s ease' }} >
                <ul className="list-group list-group-flush">
                  {searchResults.map((result, index) => (
                    <li key={index} className="list-group-item w-100 gap-1 d-flex justify-content-between"><img src={result.image}  height={'40px'} style={{objectFit:'cover',marginLeft:'5px'}}/><p>{result.title}</p></li>
                  ))}
                </ul>
              </div>
            )
          )}

        </div>




      </div>
    </nav>


  )
}

export default Navbar