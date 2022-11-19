import { Link } from 'react-router-dom';
import AksesuarPopup from '../../popupPages/Aksesuar/AksesuarPopup';
import BabyPopup from '../../popupPages/Baby/BabyPopup';
import HousePopup from '../../popupPages/House/HousePopup';
import KozmetikPopup from '../../popupPages/Kozmetik/KozmetikPopup';
import MenPopup from '../../popupPages/Men/MenPopup';
import ShoesPopup from '../../popupPages/Shoes/ShoesPopup';
import ShopPopup from '../../popupPages/Shop/ShopPopup';
import WomenPopup from '../../popupPages/Women/WomenPopup';
import './wrapper.css'
function Wrapper() {
  return (
    <div className='bigWrapper'>
        <div className='dropdown'>
          <div className='hovercss'><Link to="/Women" className='hovercss'>KADIN</Link></div>
          <div className="dropdown-content"><WomenPopup></WomenPopup></div>
        </div>
        <div className='dropdown'>
          <div className='hovercss'><Link to="/Men" className='hovercss'>ERKEK</Link></div>
          <div className="dropdown-content"><MenPopup></MenPopup></div>
        </div>
        <div className='dropdown'>
          <div className='hovercss'>ANNE & ÇOCUK</div>
          <div className="dropdown-content"><BabyPopup></BabyPopup></div>
        </div>
        <div className='dropdown'>
          <div className='hovercss'>EV & MOBİLYA</div>
          <div className="dropdown-content"><HousePopup></HousePopup></div>
        </div>
        <div className='dropdown'>
          <div className='hovercss'>SÜPERMARKET</div>
          <div className="dropdown-content"><ShopPopup></ShopPopup></div>
        </div>
        <div className='dropdown'>
          <div className='hovercss'>KOZMETİK</div>
          <div className="dropdown-content"><KozmetikPopup></KozmetikPopup></div>
        </div>
        <div className='dropdown'>
          <div className='hovercss'>AYAKKABI & ÇANTA</div>
          <div className="dropdown-content"><ShoesPopup></ShoesPopup></div>
        </div>
        <div className='dropdown'>
          <div className='hovercss'>SAAT & AKSESUAR</div>
          <div className="dropdown-content"><AksesuarPopup></AksesuarPopup></div>
        </div>
        <div className='dropdown'>
          <div className='hovercss'>ELEKTRONİK</div>
          <div className="dropdown-content"><WomenPopup></WomenPopup></div>
        </div>

         
    </div>
  )
}





export default Wrapper;
