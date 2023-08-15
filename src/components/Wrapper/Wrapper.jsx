import { useState } from "react";
import { Link } from "react-router-dom";
import AksesuarPopup from "../../popupPages/Aksesuar/AksesuarPopup";
import BabyPopup from "../../popupPages/Baby/BabyPopup";
import HousePopup from "../../popupPages/House/HousePopup";
import KozmetikPopup from "../../popupPages/Kozmetik/KozmetikPopup";
import MenPopup from "../../popupPages/Men/MenPopup";
import ShoesPopup from "../../popupPages/Shoes/ShoesPopup";
import ShopPopup from "../../popupPages/Shop/ShopPopup";
import WomenPopup from "../../popupPages/Women/WomenPopup";
import "./wrapper.css";

function Wrapper() {
  const [openWrapper, setOpenWrapper] = useState(false);
  const handleHover = () => {
    setTimeout(() => {
      setOpenWrapper(true);
    }, 1000);
  };
  return (
    <div
      className="bigWrapper"
      onMouseEnter={handleHover()}
      onMouseLeave={() => {
        setOpenWrapper(false);
      }}
    >
      <div className="dropdown">
        <div className="hovercss">
          <Link to="/Women" className="hovercss">
            KADIN
          </Link>
        </div>
        <div className="dropdown-content">
          <WomenPopup></WomenPopup>
        </div>
      </div>
      <div className="dropdown">
        <div className="hovercss">
          <Link to="/Men" className="hovercss">
            ERKEK
          </Link>
        </div>
        <div className="dropdown-content">
          <MenPopup></MenPopup>
        </div>
      </div>
      <div className="dropdown">
        <div className="hovercss">
          <Link to="/Men" className="hovercss">
            ANNE & ÇOCUK
          </Link>
        </div>
        <div className="dropdown-content">
          <BabyPopup></BabyPopup>
        </div>
      </div>
      <div className="dropdown">
        <div className="hovercss">
          <Link to="/Women" className="hovercss">
            EV & MOBİLYA
          </Link>
        </div>
        <div className="dropdown-content">
          <HousePopup></HousePopup>
        </div>
      </div>
      <div className="dropdown">
        <div className="hovercss">
          <Link to="/Men" className="hovercss">
            SÜPERMARKET
          </Link>
        </div>
        <div className="dropdown-content">
          <ShopPopup></ShopPopup>
        </div>
      </div>
      <div className="dropdown">
        <div className="hovercss">
          <Link to="/Women" className="hovercss">
            KOZMETİK
          </Link>
        </div>
        <div className="dropdown-content">
          <KozmetikPopup></KozmetikPopup>
        </div>
      </div>
      <div className="dropdown">
        <div className="hovercss">
          <Link to="/Men" className="hovercss">
            AYAKKABI & ÇANTA
          </Link>
        </div>
        <div className="dropdown-content">
          <ShoesPopup></ShoesPopup>
        </div>
      </div>
      <div className="dropdown">
        <div className="hovercss">
          {" "}
          <Link to="/Women" className="hovercss">
            SAAT & AKSESUAR
          </Link>
        </div>
        <div className="dropdown-content">
          <AksesuarPopup></AksesuarPopup>
        </div>
      </div>
      <div className="dropdown">
        <div className="hovercss">
          {" "}
          <Link to="/Men" className="hovercss">
            ELEKTRONİK
          </Link>
        </div>
        <div className="dropdown-content">
          <WomenPopup></WomenPopup>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
