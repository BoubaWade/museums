import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, Scrollbar, EffectCoverflow } from "swiper/modules";

import imageSource1 from "../../../assets/images/slider-images/image1.jpeg";
import imageSource2 from "../../../assets/images/slider-images/image2.jpeg";
import imageSource3 from "../../../assets/images/slider-images/image3.jpeg";
import imageSource4 from "../../../assets/images/slider-images/image4.jpeg";
import imageSource5 from "../../../assets/images/slider-images/image5.jpeg";
import imageSource6 from "../../../assets/images/slider-images/image6.jpeg";
import imageSource7 from "../../../assets/images/slider-images/image7.jpeg";
import imageSource8 from "../../../assets/images/slider-images/image8.jpeg";
import imageSource9 from "../../../assets/images/slider-images/image9.jpeg";
import imageSource10 from "../../../assets/images/slider-images/image10.jpeg";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { setIsToggleCarrousel } from "../../../features/profile/displaySettingsSlice";
import { useDispatch } from "react-redux";

const arrayImagesSources = [
  imageSource1,
  imageSource2,
  imageSource3,
  imageSource4,
  imageSource5,
  imageSource6,
  imageSource7,
  imageSource8,
  imageSource9,
  imageSource10,
];

export default function Carrousel() {
  const dispatch = useDispatch();
  return (
    <CarrouselStyled>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        modules={[Autoplay, Scrollbar, EffectCoverflow]}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 700 }}
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 100,
          modifier: 2.5,
        }}
      >
        {arrayImagesSources.map((imageSource, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={imageSource} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <PrimaryButton
        label="CONNEXION"
        className="login-button"
        onClick={() => dispatch(setIsToggleCarrousel(false))}
      />
    </CarrouselStyled>
  );
}

const CarrouselStyled = styled.div`
  height: 350px;
  margin-top: 200px;
  margin-bottom: 60px;
  .swiper {
    height: 100%;
    border-radius: 15px;
    overflow: visible;
  }
  .swiper-slide {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 20px;
  }
  .login-button {
    width: 300px;
    height: 45px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    margin-top: 50px;
  }
`;
