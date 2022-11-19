import React from 'react'
import HighlightsPopup from '../../components/Highlights/HighlightsPopup'
import Markalar from '../../components/Markalar/Markalar'
import İmageContainer from '../../components/imageContainer/İmageContainer'
import './home.css'

function Home() {
  return (
    <div>
      <Markalar></Markalar>
      <div className='ÖnerilerCss'>
        <div className='ÖneriCss'>
          <img className='ÖneriCss2' alt='s' src='https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/SepeteEnCOkEklenenler_202206291435.png'></img>
        </div>
        <div className='ÖneriCss'>
          <img className='ÖneriCss2'  alt='s' src='https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/EnCOkONeCIkanlar_202206291435.png'></img>
        </div>
        <div className='ÖneriCss'>
          <img className='ÖneriCss2'  alt='s' src='https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/FlasINdirimler_202206291435.png'></img>
        </div>
      </div>



      <div className='bigDives'>
        <div className='smallDives'>
           <div className='imgcss4'>
              <img className='imgcss5' alt='s' src='https://cdn.dsmcdn.com/ty567/campaign/banners/original/611090/0c84339d0f_0.jpg'></img>
           </div>
           <div className='textcss13'>Süpermarkette Fenomen</div>
        </div>
        <div className='smallDives'>
           <div className='imgcss4'>
              <img className='imgcss5' alt='s' src='https://cdn.dsmcdn.com/ty562/pimWidgetApi/mobile_20221014125744_EHMyeni.jpg'></img>
           </div>
           <div className='textcss13'>English Home</div>
        </div>
        <div className='smallDives'>
           <div className='imgcss4'>
              <img className='imgcss5' alt='s' src='https://cdn.dsmcdn.com/ty579/campaign/banners/original/615527/76b876c0b2_0.jpg'></img>
           </div>
           <div className='textcss13'>Kadın Tekstil</div>
        </div>
      </div>
      <div className='bigDives2'>
        <div className='smallDives'>
           <div className='imgcss4'>
              <img className='imgcss5' alt='s' src='https://cdn.dsmcdn.com/ty576/pimWidgetApi/mobile_20221024205525_615287KadinMobile202210241401.jpg'></img>
           </div>
           <div className='textcss13'>Happimies İstanbul</div>
        </div>
        <div className='smallDives'>
           <div className='imgcss4'>
              <img className='imgcss5' alt='s' src='https://cdn.dsmcdn.com/ty390/campaign/banners/original/603009/e85192fa32_0.jpg'></img>
           </div>
           <div className='textcss13'>Kozmetik</div>
        </div>
        <div className='smallDives'>
           <div className='imgcss4'>
              <img className='imgcss5' alt='s' src='https://cdn.dsmcdn.com/ty531/pimWidgetApi/mobile_20220912064457_2261983ElektronikMobile202209091901.jpg'></img>
           </div>
           <div className='textcss13'>Elektirikli Ev Aletleri</div>
        </div>
      </div>
      <HighlightsPopup></HighlightsPopup>
      <İmageContainer></İmageContainer>
      <İmageContainer></İmageContainer>
      <HighlightsPopup></HighlightsPopup>
      <İmageContainer></İmageContainer>
      <İmageContainer></İmageContainer>
      <İmageContainer></İmageContainer>







    </div>
  )
}

export default Home
