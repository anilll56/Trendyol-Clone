import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Card.css";
import { FiHeart } from "react-icons/fi";
import { SlArrowRight } from "react-icons/sl";
import { addBasket, addFavorite } from "../../redux/marketSlice";
import { useDispatch } from "react-redux";
import NewHiglights from "../../components/Highlights/NewHiglights";
import ReactImageMagnify from "react-image-magnify";

function Card() {
  const location = useLocation();
  const { from, name, price, id } = location.state;
  const dispatch = useDispatch();
  return (
    <div>
      <div className="CardContent">
        <div className="CardLeft">
          <div className="CardPics">
            <div className="Cardİmg">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: from,
                  },
                  largeImage: {
                    src: from,
                    width: 2000,
                    height: 2000,
                  },
                }}
              />
            </div>
          </div>
          <div className="CardAbout">
            <div className="Cardss">En Çok Satan Ürün</div>
            <div className="Carddd"> {name}</div>
            <div className="Cardss">
              Satıcı :<Link to="/">Trendyol</Link>
            </div>
            <h4 className="CardPrice">{price} TL</h4>
            <div className="CardAddTo">
              <button
                className="AddBasket"
                onClick={() => dispatch(addBasket({ id: id }))}
              >
                Sepete Ekle
              </button>
              <div
                className="AddFavorite"
                onClick={() => dispatch(addFavorite({ id: id }))}
              >
                <FiHeart className="Cardİcon"></FiHeart>
              </div>
            </div>
            <div className="Cardss">Tahmini Kargo Teslim: 3 gün içinde</div>
            <div className="CardSp">
              <div>Öne Çıkan Bilgiler :</div>
              <div className="CardPLC">
                <div>Renk : Beyaz</div>
                <div>Sıcaklık Kontrolü : Var</div>
              </div>
              <div className="CardPLC">
                <div>Zamanlayıcı : Var</div>
                <div> Garanti Süresi : 2 Yıl</div>
              </div>
            </div>
            <div className="CardPLC2">
              <li>15 gün içinde ücretsiz iade. Detaylı bilgi için tıklayız</li>
              <li>Bu ürün Trendyol tarafından gönderilecektir.</li>
              <li>
                Xiaomi Mi Smart Air Fritöz, sağlıklı, çıtır ve az yağlı yemekler
                pişirir
              </li>
            </div>
            <div>
              <img
                src="https://cdn.dsmcdn.com/web/web-installment-campaigns/3mv3.png"
                alt="11"
              ></img>
            </div>
          </div>
        </div>
        <div className="CardRight">
          <div className="CardRightC1">
            <div className="c1cs">Ürünün Kampanyaları</div>
            <hr></hr>
            <div className="c1css">
              Kargo Bedava <SlArrowRight></SlArrowRight>
            </div>
          </div>
          <div className="CardRightC2">
            <div className="c1cs">Trendyol</div>
            <hr></hr>
            <div className="c1css">
              Mağazayı Gör <SlArrowRight></SlArrowRight>
            </div>
            <hr></hr>
            <div className="c1css">
              Ürün Soruları (155) <SlArrowRight></SlArrowRight>
            </div>
          </div>
        </div>
      </div>
      <NewHiglights />
      <NewHiglights />
    </div>
  );
}

export default Card;
