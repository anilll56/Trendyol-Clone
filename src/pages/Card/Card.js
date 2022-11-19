import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import { FiHeart } from "react-icons/fi";
import { SlArrowRight } from "react-icons/sl";
import HighlightsPopup from '../../components/Highlights/HighlightsPopup'

function Card() {
  return (
    <div>
            <div className='CardContent'>
      <div  className='CardLeft'>
        <div className='CardPics'>
            <div className='Cardİmg'>
                <img className='Cardİmg' src='https://cdn.dsmcdn.com/ty278/product/media/images/20211224/0/15764169/247387580/1/1_org_zoom.jpg'></img>
            </div>
        </div>
        <div className='CardAbout'>
            <div className='Cardss'>En Çok Satan Ürün</div>
            <div className='Carddd'>Xiaomi Mi Smart Air Fryer 3,5 L Fritöz AIRFRYER_001</div>
            <div className='Cardss'>Satıcı :<Link>Trendyol</Link></div>
            <h4 className='CardPrice'>2689.99 TL</h4>
            <div className='CardAddTo'>
                <button className='AddBasket'>Sepete Ekle</button>
                <div className='AddFavorite'><FiHeart className='Cardİcon'></FiHeart></div>
            </div>
            <div className='Cardss'>
                Tahmini Kargo Teslim: 3 gün içinde
            </div>
            <div className='CardSp'>
                <div>Öne Çıkan Bilgiler :</div>
                <div className='CardPLC'>
                    <div>Renk : Beyaz</div>
                    <div>Sıcaklık Kontrolü : Var</div>
                </div>
                <div className='CardPLC'>
                    <div>Zamanlayıcı : Var</div>
                    <div> Garanti Süresi : 2 Yıl</div>
                </div>
            </div>
            <div className='CardPLC2'>
                <li>15 gün içinde ücretsiz iade. Detaylı bilgi için tıklayız</li>
                <li>Bu ürün Trendyol tarafından gönderilecektir.</li>
                <li>Xiaomi Mi Smart Air Fritöz, sağlıklı, çıtır ve az yağlı yemekler pişirir</li>
            </div>
            <div>
                <img src='https://cdn.dsmcdn.com/web/web-installment-campaigns/3mv3.png'></img>
            </div>
        </div>
      </div>
      <div className='CardRight'>
        <div className='CardRightC1'>
            <div className='c1cs'>Ürünün Kampanyaları</div>
            <hr></hr>
            <div className='c1css'>Kargo Bedava  <SlArrowRight></SlArrowRight></div>
        </div>
        <div className='CardRightC2'>
            <div className='c1cs'>Trendyol</div>
            <hr></hr>
            <div className='c1css'>Mağazayı Gör <SlArrowRight></SlArrowRight></div>
            <hr></hr>
            <div className='c1css'>Ürün Soruları (155) <SlArrowRight></SlArrowRight></div>
        </div>
      </div>
    </div>
    <HighlightsPopup></HighlightsPopup>
    <HighlightsPopup></HighlightsPopup>
    </div>
  )
}

export default Card
