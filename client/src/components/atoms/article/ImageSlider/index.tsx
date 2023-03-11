import React from "react";
// Import Swiper React components
// import { Navigation, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Article } from "types";

// TODO: implement this component to use multiple images to show in ArticleThumb as a image slider
// TODO: Need to add tests
type ImageSliderProps = {
  productImages?: Article["images"];
};
const ImageSlider: React.FC<ImageSliderProps> = ({ productImages }: ImageSliderProps) => {
  return <div>Image Slider</div>;
  // return (
  //   <div className="w-full h-full">
  //     <Swiper
  //       slidesPerView={1}
  //       spaceBetween={0}
  //       autoplay={{
  //         delay: 2500,
  //         disableOnInteraction: false,
  //       }}
  //       loop={true}
  //       pagination={{
  //         clickable: true,
  //       }}
  //       modules={[Pagination, Navigation]}
  //       className="mySwiper"
  //     >
  //       {productImages?.map((image) => (
  //         <SwiperSlide>
  //           <img className="object-contain w-full h-96" src={image.path} alt="" loading="lazy" />
  //         </SwiperSlide>
  //       ))}
  //     </Swiper>
  //   </div>
  // );
};

export default ImageSlider;
