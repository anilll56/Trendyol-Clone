import React from 'react'
import { Link } from 'react-router-dom'
import './HighlightsPopup.css'

function HighlightsPopup() {
  return (
    <div className='biggest'>
      <div className='bear'>
        <div>Çok Satanlar</div>
        <div>Tüm Ürünler!</div>
      </div>

      <div className='overfloww'>
        <div className='elementscss'>
          <div>favori ekleme</div>
          <Link to='/İtem'>
          <div className='aa'>
            <img alt='se' className='aa2'  src='https://cdn.dsmcdn.com/ty301/product/media/images/20220120/17/30653226/55908240/1/1_org.jpg'></img>
          </div>
          </Link>
          <div className='Dr'>
               <div>Flash Bellek</div>
               <div className='Price'>50TL</div>
          </div>
        </div>
        <div className='elementscss'>
          <div>favori ekleme</div>
          <Link to='/İtem'>
          <div className='aa'>
            <img alt='se' className='aa2'  src='https://cdn.dsmcdn.com/ty581/product/media/images/20221028/16/203411834/551856156/2/2_org.jpg'></img>
          </div>
          </Link>
          <div className='Dr'>
               <div>Parabox</div>
               <div className='Price'>30TL</div>
          </div>
        </div>
        <div className='elementscss'>
          <div>favori ekleme</div>
          <div className='aa'>
            <img alt='se' className='aa2'  src='https://cdn.dsmcdn.com/ty537/product/media/images/20220920/18/177523597/145421796/1/1_org.jpg'></img>
          </div>
          <div className='Dr'>
               <div>Çekmece Kulpu</div>
               <div className='Price'>50TL</div>
          </div>
        </div>
        <div className='elementscss'>
          <div>favori ekleme</div>
          <div className='aa'>
            <img alt='se' className='aa2'  src='https://cdn.dsmcdn.com/ty579/product/media/images/20221027/12/203032903/287301020/1/1_org.jpg'></img>
          </div>
          <div className='Dr'>
               <div>Kadın Kazak</div>
               <div className='Price'>90TL</div>
          </div>
        </div>
        <div className='elementscss'>
          <div>favori ekleme</div>
          <div className='aa'>
            <img alt='se' className='aa2'  src='https://cdn.dsmcdn.com/ty328/product/media/images/20220209/17/47599648/383804246/1/1_org.jpg'></img>
          </div>
          <div className='Dr'>
               <div>Saç Bakım Şampuano</div>
               <div className='Price'>100TL</div>
          </div>
        </div>
        <div className='elementscss'>
          <div>favori ekleme</div>
          <div className='aa'>
            <img alt='se' className='aa2'  src='https://cdn.dsmcdn.com/ty301/product/media/images/20220120/17/30653226/55908240/1/1_org.jpg'></img>
          </div>
          <div className='Dr'>
               <div>Flash Bellek</div>
               <div className='Price'>50TL</div>
          </div>
        </div>
        <div className='elementscss'>
          <div>favori ekleme</div>
          <div className='aa'>
            <img alt='se' className='aa2'  src='https://cdn.dsmcdn.com/ty301/product/media/images/20220120/17/30653226/55908240/1/1_org.jpg'></img>
          </div>
          <div className='Dr'>
               <div>Flash Bellek</div>
               <div className='Price'>50TL</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HighlightsPopup
