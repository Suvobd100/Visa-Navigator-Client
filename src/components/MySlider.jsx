import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MySlider = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay,Navigation, Pagination,EffectFade]}
        spaceBetween={30}
        // effect={"fade"}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        pagination={{ clickable: true }}
        // className="mySwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
           
        }}
        
      >
        <SwiperSlide >
          <div className="flex mx-auto text-center w-[95%] h-[350px]" >
          <img className="w-full"
            src="https://i.ibb.co.com/fzLKpgD9/visa-application-1.jpg"
            alt=""
          />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex mx-auto text-center w-[95%] h-[350px]">
          <img className="w-full" src="https://i.ibb.co.com/JFRW0Vsn/visa-app-2.jpg" alt="" />

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex mx-auto text-center w-[95%] h-[350px]">
          <img className="w-full" src="https://i.ibb.co.com/RGjNPjyD/visa-app-3.jpg" alt="" />
          </div>
         
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default MySlider;
