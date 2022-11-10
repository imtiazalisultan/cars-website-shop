import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { CarInterface } from "../../public/api/cartype";
import Card from "../../src/components/Card";

interface MobileCarouselProps {
  items: CarInterface[];
}

const MobileCarousel: React.FC<MobileCarouselProps> = (
  props: MobileCarouselProps
) => {
  const { items } = props;
  return (
    <>
      <Swiper
        slidesPerView="auto"
        spaceBetween={0}
        pagination={{
          clickable: true,
          el: ".swiper-custom-pagination",
        }}
        modules={[Pagination]}
        className="background-white"
      >
        {items.map((car) => (
          <SwiperSlide className="swiper-slide-spec" key={car.id}>
            <Card isMobile={true} {...car} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-custom-pagination" />
    </>
  );
};

export default MobileCarousel;
