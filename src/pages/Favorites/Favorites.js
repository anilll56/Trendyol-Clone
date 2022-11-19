import React, { useState } from 'react'
import './Favorites.css'
import { MdSearch } from "react-icons/md";
import { Link } from 'react-router-dom';

function Favorites() {
  const [search, setShearch] = useState(true);
  return (
    <div>
      <div className='Favn'>
        <input className='inputcss11' placeholder='Favorilerinde ara'></input>
      </div>
      <div className='Favİtems'>
      <div className='elementscss1'>
          <Link to='/İtem'>
          <div className='aa11'>
            <img alt='se' className='aa22'  src='https://cdn.dsmcdn.com/ty114/product/media/images/20210521/18/90086621/175092690/1/1_org.jpg'></img>
          </div>
          </Link>
          <div className='Dr'>
               <div>Reebok Ayakkabı</div>
               <div className='Price'>50TL</div>
          </div>
      </div>
      <div className='elementscss1'>
          <Link to='/İtem'>
          <div className='aa11'>
            <img alt='se' className='aa22'  src='https://cdn.dsmcdn.com/ty114/product/media/images/20210521/18/90086621/175092690/1/1_org.jpg'></img>
          </div>
          </Link>
          <div className='Dr'>
               <div>Reebok Ayakkabı</div>
               <div className='Price'>50TL</div>
          </div>
      </div>
      <div className='elementscss1'>
          <Link to='/İtem'>
          <div className='aa11'>
            <img alt='se' className='aa22'  src='https://cdn.dsmcdn.com/ty114/product/media/images/20210521/18/90086621/175092690/1/1_org.jpg'></img>
          </div>
          </Link>
          <div className='Dr'>
               <div>Reebok Ayakkabı</div>
               <div className='Price'>50TL</div>
          </div>
      </div>
      <div className='elementscss1'>
          <Link to='/İtem'>
          <div className='aa11'>
            <img alt='se' className='aa22'  src='https://cdn.dsmcdn.com/ty114/product/media/images/20210521/18/90086621/175092690/1/1_org.jpg'></img>
          </div>
          </Link>
          <div className='Dr'>
               <div>Reebok Ayakkabı</div>
               <div className='Price'>50TL</div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Favorites
