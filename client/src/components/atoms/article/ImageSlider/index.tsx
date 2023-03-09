import React from "react";
// Import Swiper React components
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Article } from "types";

// TODO: implement this component
type ImageSliderProps = {
  productImages?: Article["images"];
};
const ImageSlider: React.FC<ImageSliderProps> = ({ productImages }: ImageSliderProps) => {
  return (
    <div className="w-full h-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {productImages?.map((image) => (
          <SwiperSlide>
            <img className="object-contain h-96 w-full" src={image.path} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
