import React, { useState } from 'react'
import './Favorites.css'
import { MdSearch } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket , deleteFavori} from '../../redux/marketSlice';
import { AiOutlineClose } from "react-icons/ai";

function Favorites() {
  const [search, setShearch] = useState("");
  const items=useSelector((state)=>state.market.item)
  const item_filtered=items.filter((item)=>item.favori)
  const dispatch=useDispatch();
  const itemLeft = item_filtered.length;
  return (
    <div>
      <div className='Favn'>
        <input className='inputcss11' placeholder='Favorilerinde ara' onChange={(e)=>setShearch(e.target.value)}></input>
      </div>
      <div className='Favİtems'>
      {
        item_filtered.map((item)=>(
          <div className='elementscss1'>
            <div className='Deleteİcon1'><AiOutlineClose onClick={()=>dispatch(deleteFavori(item.id))} className='İconCss142'></AiOutlineClose></div>
            <Link to='/İtem' state={{ from: item.link , name:item.name , price:item.price , id:item.id}}>
            <div className='aa11'>
              <img alt='se' className='aa22'  src={item.link}></img>
              </div>
            </Link>
            <div className='Dr1'>
               <div>{item.name}</div>
               <div className='Price'>{item.price} TL</div>
               <div className='AddBASKET1'> <button onClick={()=>dispatch(addBasket({id:item.id}))} className='AddBasket12'>Sepete Ekle</button> </div>
            </div>
          </div>
        ))
      }

      </div>
    </div>
  )
}

export default Favorites
