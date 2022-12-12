import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './HighlightsPopup.css'
import { IoHeartOutline } from "react-icons/io5";
import { addFavorite } from '../../redux/marketSlice';

function NewHiglights() {
  const dispatch=useDispatch()
    const items=useSelector((state)=>state.market.item)
  return (
    <div className='biggest'>
        <div className='bear'>
          <div>Çok Satanlar</div>
          <div>Tüm Ürünler!</div>
      </div>
      <div className='overfloww'>
        {
            items.map(item=>(
                <div key={item.id} className='elementscss'>
                <div className='FavİconCss1'>
                  <div onClick={()=>dispatch(addFavorite({id:item.id}))} className='FavİconCss2'><IoHeartOutline className='iconCss'></IoHeartOutline></div>
                </div>
                <Link to='/İtem' state={{ from: item.link , name:item.name , price:item.price , id:item.id}}>
                <div className='aa'>
                  <img alt='se' className='aa2'  src={item.link}></img>
                </div>
                </Link>
                <div className='Dr'>
                     <div>{item.name}</div>
                     <div className='Price'>{item.price} TL</div>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default NewHiglights
