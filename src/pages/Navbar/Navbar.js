import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import PopupSearch from '../../components/PopupSearch/PopupSearch';
import './navbar.css'

function Navbar() {
  const [search,setSearch]=useState(false);
  let menuRef=useRef();
  useEffect(()=>{
    let handler =(e) => {
      if(!menuRef.current.contains(e.target)){
        setSearch(false)
      }
      
    };

    document.addEventListener("mousedown" ,handler)
  })
  return (
    <nav className='sticky'>
      <div className='navbarTop'> 
     <li className='liNoBullets'>İndirim Kuponlarım </li>
     <li className='liNoBullets'>Trendyolda Satış yap</li>
     <li className='liNoBullets'>Yardım&Destek </li>
      </div>
      <div className='navbarMain'>
      <div className='imgcss'>
      <Link to="/">
      <img alt='s' src='https://cdn.dsmcdn.com/web/logo/ty-web.svg'></img>
      </Link>
      </div>
      <div ref={menuRef}>
      <div  onClick={()=>{setSearch(!search)}} >
        <div className='inputdiv'>
        <input className={search===true ? 'inputcss1' :'inputcss' } placeholder='Aradığınız ürün , kategori veya markayı yazınız'type='text'></input>
          <div className='gg-search'></div>
        </div>
         <div className={`dropdown-menu ${search ? 'active' : 'inactive'}`}>
              <PopupSearch></PopupSearch>
         </div>
        </div>
      </div>
        <div className='leftMain'>
          <div className='ss'>
            <div><Link to='/Login' className='hoverr'>Giriş Yap</Link></div>
          </div>
          <div className='ss'>
            <div><Link to='/Favorites' className='hoverr'>Favorilerim</Link></div>
          </div>
          <div className='ss'><Link to='/BasketPage' className='hoverr'>Sepetim</Link></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
