import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./HighlightsPopup.css";
import { IoHeartOutline } from "react-icons/io5";
import { addFavorite } from "../../redux/marketSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import { BsFillHeartFill } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";

function NewHiglights() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.market.item);
  return (
    <div className="biggest">
      <div className="bear">
        <div>Çok Satanlar</div>
        <div>Tüm Ürünler!</div>
      </div>
      <div className="overfloww">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          pagination={{
            clickable: true,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
        >
          {items.map((item) => (
            <SwiperSlide>
              <div key={item.id} className="elementscss">
                <div className="FavİconCss1">
                  <div
                    onClick={() => dispatch(addFavorite({ id: item.id }))}
                    className="FavİconCss2"
                  >
                    {item.favori ? (
                      <BsFillHeartFill className="iconCss" />
                    ) : (
                      <IoHeartOutline className="iconCss2" />
                    )}
                  </div>
                </div>
                <Link
                  to="/İtem"
                  state={{
                    from: item.link,
                    name: item.name,
                    price: item.price,
                    id: item.id,
                    favori: item.favori,
                  }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="aa">
                    <img alt="se" className="aa2" src={item.link}></img>
                  </div>
                </Link>
                <div className="Dr">
                  <div>{item.name}</div>
                  <div className="Price">{item.price} TL</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default NewHiglights;
