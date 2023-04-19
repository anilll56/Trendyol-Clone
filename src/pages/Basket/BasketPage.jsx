import React, { useState } from "react";
import "./BasketPage.css";
import { BsDash, BsPlus, BsFillTrashFill } from "react-icons/bs";
import RightSidePopup from "./RightSidePopup/RightSidePopup";
import { useDispatch, useSelector } from "react-redux";
import { deleteBasket } from "../../redux/marketSlice";

function BasketPage() {
  const [number, setNumber] = useState(1);
  const items = useSelector((state) => state.market.item);
  const itemFilter = items.filter((item) => item.basket);
  const itemLeft22 = items.filter((item) => item.basket).length;
  const dispatch = useDispatch();
  return (
    <div>
      <div className="firstContent">
        <div className="LeftSide1">
          <div className="BasketHeader">Sepetim ({itemLeft22} Ürün)</div>
          {itemFilter.map((item) => (
            <div className="BasketItem1">
              <div className="Free1">Kargo Bedava!</div>
              <div className="BasketCard1">
                <div className="BasketCardImg1">
                  <img alt="1" className="BasketCardImg2" src={item.link}></img>
                </div>
                <div className="BasketCardAbout1">{item.name}</div>
                <div className="BasketCardCounter1">
                  <div
                    className="BasketCardCounterIcon1"
                    onClick={() => {
                      setNumber(number - 1);
                    }}
                  >
                    <BsDash className="A1234"></BsDash>
                  </div>
                  <div className="BasketCardNumber1">{number}</div>
                  <div
                    className="BasketCardCounterIcon1"
                    onClick={() => {
                      setNumber(number + 1);
                    }}
                  >
                    <BsPlus className="A1234"></BsPlus>
                  </div>
                </div>
                <div>{item.price * number}</div>
                <div>
                  <BsFillTrashFill
                    onClick={() => dispatch(deleteBasket(item.id))}
                    className="BasketCTrash"
                  ></BsFillTrashFill>
                </div>
              </div>
            </div>
          ))}
          <div className="BasketSuggestCards">Önerilen Ürünler</div>
          <hr></hr>
          <div className="CardContent11">
            <Cards
              ImgUrl={
                "https://cdn.dsmcdn.com/ty32/product/media/images/20201214/5/38225489/19472655/1/1_org.jpg"
              }
              CardSaller={"Epsilon Yayınevi"}
              CardAbout={" Sabahattin Ali Romanları Seti-3 Kitap Takım"}
              Price={"50 TL"}
            />
            <Cards
              ImgUrl={
                "https://cdn.dsmcdn.com/ty32/product/media/images/20201214/5/38225489/19472655/1/1_org.jpg"
              }
              CardSaller={"Epsilon Yayınevi"}
              CardAbout={" Sabahattin Ali Romanları Seti-3 Kitap Takım"}
              Price={"50 TL"}
            />
          </div>
        </div>

        <div className="RightSideCard">
          <div className="Abs1">Sepeti Onayla {">"}</div>
          <div className="CardPP">
            <div className="cspr1">Sipariş Özeti</div>
            <div className="cspr2">
              <div>Ürünün toplamı</div>
              <div>700 TL</div>
            </div>
            <div className="cspr2">
              <div>Kargo toplam</div>
              <div>20 TL</div>
            </div>
            <div className="cspr2">
              <div>75 TL üzeri Kargo ...</div>
              <div>- 20 TL</div>
            </div>
            <hr></hr>
            <div className="LastPriceCss">680 TL</div>
          </div>
          <div className="RightSideImg">
            <img
              alt="s"
              className="RightSideImg2"
              src="https://cdn.dsmcdn.com/web/production/pudo-banner-with-new-pudo-user.svg"
            ></img>
          </div>
          <div className="IKG1">İNDİRİM KODU GİR</div>
          <div className="Abs1">Sepeti Onayla {">"}</div>
        </div>
      </div>
    </div>
  );
}

function Cards(props) {
  return (
    <div className="CardBigContent">
      <div className="CardImgStyle1">
        <img className="CardImgStyle2" alt="s" src={props.ImgUrl}></img>
      </div>
      <div className="CardAb">
        <div className="CardSaller">{props.CardSaller}</div>
        <div className="CardAbout1">{props.CardAbout}</div>
        <div className="CardPrice1">{props.Price}</div>
      </div>
      <div className="CardAddBasket">
        <div className="CardAddToBasket">Sepete Ekle</div>
      </div>
    </div>
  );
}

export default BasketPage;
