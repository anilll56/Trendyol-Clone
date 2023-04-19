import React from "react";
import "./markalar.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

function Markalar() {
  return (
    <Swiper
      className="Bigger"
      spaceBetween={10}
      slidesPerView={8}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
    >
      <SwiperSlide>
        <div className="marks1">
          <div className="centerPic">
            <div className="pictureCss">
              <img
                className="pictureCss2"
                alt="s"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2021/12/9/MpLogo_202112091740.jpg"
              ></img>
            </div>
          </div>
          <div className="PicName">Çekiliş Kuponu</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="marks1">
          <div className="centerPic">
            <div className="pictureCss">
              <img
                className="pictureCss2"
                alt="s"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355388_Trendyolmilla.png"
              ></img>
            </div>
          </div>
          <div className="PicName">TerndyolMilla</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="marks1">
          <div className="centerPic">
            <div className="pictureCss">
              <img
                className="pictureCss2"
                alt="s"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15541619355266_Puma.png"
              ></img>
            </div>
          </div>
          <div className="PicName">Puma</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="marks1">
          <div className="centerPic">
            <div className="pictureCss">
              <img
                className="pictureCss2"
                alt="s"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/12/10/Pullbearyeni.png"
              ></img>
            </div>
          </div>
          <div className="PicName">Pull & Bear</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="marks1">
          <div className="centerPic">
            <div className="pictureCss">
              <img
                className="pictureCss2"
                alt="s"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15461619354815_Adidas.png"
              ></img>
            </div>
          </div>
          <div className="PicName">Adidas</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="marks1">
          <div className="centerPic">
            <div className="pictureCss">
              <img
                className="pictureCss2"
                alt="s"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15511619355075_Hummel.png"
              ></img>
            </div>
          </div>
          <div className="PicName">Hummel</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="marks1">
          <div className="centerPic">
            <div className="pictureCss">
              <img
                className="pictureCss2"
                alt="s"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2022/1/3/xiaomi13.png"
              ></img>
            </div>
          </div>
          <div className="PicName">Xiaomi</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="marks1">
          <div className="centerPic">
            <div className="pictureCss">
              <img
                className="pictureCss2"
                alt="s"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2022/1/3/samsung2.png"
              ></img>
            </div>
          </div>
          <div className="PicName">Samsung</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="marks1">
          <div className="centerPic">
            <div className="pictureCss">
              <img
                className="pictureCss2"
                alt="s"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2022/1/3/apple12.png"
              ></img>
            </div>
          </div>
          <div className="PicName">Apple</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="marks1">
          <div className="centerPic">
            <div className="pictureCss">
              <img
                className="pictureCss2"
                alt="s"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15531619355211_Nike.png"
              ></img>
            </div>
          </div>
          <div className="PicName">Nike</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="marks1">
          <div className="centerPic">
            <div className="pictureCss">
              <img
                className="pictureCss2"
                alt="s"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355397_USPoloAssn.png"
              ></img>
            </div>
          </div>
          <div className="PicName">Polo</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="marks1">
          <div className="centerPic">
            <div className="pictureCss">
              <img
                className="pictureCss2"
                alt="s"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355397_USPoloAssn.png"
              ></img>
            </div>
          </div>
          <div className="PicName">Polo</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="marks1">
          <div className="centerPic">
            <div className="pictureCss">
              <img
                className="pictureCss2"
                alt="s"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355397_USPoloAssn.png"
              ></img>
            </div>
          </div>
          <div className="PicName">Polo</div>
        </div>
      </SwiperSlide>
    </Swiper>
    // <div className='Bigger'>
    //     <div className='marks1'>
    //         <div className='centerPic'>
    //             <div className='pictureCss'>
    //                 <img className='pictureCss2' alt='s' src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2021/12/9/MpLogo_202112091740.jpg'></img>
    //             </div>
    //         </div>
    //         <div className='PicName'>Çekiliş Kuponu</div>
    //     </div>
    //     <div className='marks1'>
    //         <div className='centerPic'>
    //             <div className='pictureCss'>
    //                 <img className='pictureCss2' alt='s' src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355388_Trendyolmilla.png'></img>
    //             </div>
    //         </div>
    //         <div className='PicName'>TerndyolMilla</div>
    //     </div>
    //     <div className='marks1'>
    //         <div className='centerPic'>
    //             <div className='pictureCss'>
    //                 <img className='pictureCss2' alt='s' src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15541619355266_Puma.png'></img>
    //             </div>
    //         </div>
    //         <div className='PicName'>Puma</div>
    //     </div>
    //     <div className='marks1'>
    //         <div className='centerPic'>
    //             <div className='pictureCss'>
    //                 <img className='pictureCss2' alt='s' src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/12/10/Pullbearyeni.png'></img>
    //             </div>
    //         </div>
    //         <div className='PicName'>Pull & Bear</div>
    //     </div>
    //     <div className='marks1'>
    //         <div className='centerPic'>
    //             <div className='pictureCss'>
    //                 <img className='pictureCss2' alt='s' src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15461619354815_Adidas.png'></img>
    //             </div>
    //         </div>
    //         <div className='PicName'>Adidas</div>
    //     </div>
    //     <div className='marks1'>
    //         <div className='centerPic'>
    //             <div className='pictureCss'>
    //                 <img className='pictureCss2' alt='s' src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15511619355075_Hummel.png'></img>
    //             </div>
    //         </div>
    //         <div className='PicName'>Hummel</div>
    //     </div>
    //     <div className='marks1'>
    //         <div className='centerPic'>
    //             <div className='pictureCss'>
    //                 <img className='pictureCss2' alt='s' src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2022/1/3/xiaomi13.png'></img>
    //             </div>
    //         </div>
    //         <div className='PicName'>Xiaomi</div>
    //     </div>
    //     <div className='marks1'>
    //         <div className='centerPic'>
    //             <div className='pictureCss'>
    //                 <img className='pictureCss2' alt='s' src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2022/1/3/samsung2.png'></img>
    //             </div>
    //         </div>
    //         <div className='PicName'>Samsung</div>
    //     </div>
    //     <div className='marks1'>
    //         <div className='centerPic'>
    //             <div className='pictureCss'>
    //                 <img className='pictureCss2' alt='s' src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2022/1/3/apple12.png'></img>
    //             </div>
    //         </div>
    //         <div className='PicName'>Apple</div>
    //     </div>
    //     <div className='marks1'>
    //         <div className='centerPic'>
    //             <div className='pictureCss'>
    //                 <img className='pictureCss2' alt='s' src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15531619355211_Nike.png'></img>
    //             </div>
    //         </div>
    //         <div className='PicName'>Nike</div>
    //     </div>
    //     <div className='marks1'>
    //         <div className='centerPic'>
    //             <div className='pictureCss'>
    //                 <img className='pictureCss2' alt='s' src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355397_USPoloAssn.png'></img>
    //             </div>
    //         </div>
    //         <div className='PicName'>Polo</div>
    //     </div>
    //     <div className='marks1'>
    //         <div className='centerPic'>
    //             <div className='pictureCss'>
    //                 <img className='pictureCss2' alt='s' src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355397_USPoloAssn.png'></img>
    //             </div>
    //         </div>
    //         <div className='PicName'>Polo</div>
    //     </div>
    //     <div className='marks1'>
    //         <div className='centerPic'>
    //             <div className='pictureCss'>
    //                 <img className='pictureCss2' alt='s' src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355397_USPoloAssn.png'></img>
    //             </div>
    //         </div>
    //         <div className='PicName'>Polo</div>
    //     </div>
    // </div>
  );
}

export default Markalar;
