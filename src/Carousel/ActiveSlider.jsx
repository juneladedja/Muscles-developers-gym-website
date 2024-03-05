import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../Carousel/constants";
import './ActiveSlider.css'; 
// npm install swiper react-icons

const ActiveSlider = () => {
  return (
    <div className="flex-container">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="swiper-container"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="slide-container">
              <div className="slide-content" style={{ backgroundImage: `url(${item.backgroundImage})` }}>
                <div className="flex items-center justify-between mb-3">
                  <h1 className="text-xl lg:text-2xl">{item.title}</h1>

                </div>
                <p className="lg:text-[18px]">{item.content}</p>
                <div className="mini-card">
                  <h2>Flight Price</h2>
                  <p>{item.price}</p>
                </div>
                <button className="book-now-button">Book Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;

