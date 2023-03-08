import React from "react";
// Import Swiper React components
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Article } from "types";
import styled from "@emotion/styled";

const Container = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  & .swiper {
    width: 100%;
    height: 100%;
  }
`;
const Img = styled.img`
  object-fit: contain;
  height: 260px;
  width: 100%;
`;

type ImageSliderProps = {
  productImages?: Article["images"];
};
const ImageSlider: React.FC<ImageSliderProps> = ({ productImages }: ImageSliderProps) => {
  return (
    <Container>
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
        className="mySwiper">
        {productImages?.map((image) => (
          <SwiperSlide>
            <Img src={image.path} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ImageSlider;
