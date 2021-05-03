import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Cta from '../Cta/Cta';

SwiperCore.use([Navigation, Pagination,EffectFade]);

const Hero = (props) => {
    return (
      <div className="w-full">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          effect="fade"
          fadeEffect={{
            crossFade: true 
          }}
          loop={true}
        >
          {props.slides.map((item)=>{
            return (
              <SwiperSlide>
                <div className="w-full hero-slider">
                  <div className="absolute slider-text-content">
                    <h1 className="mb-5 text-5xl font-extrabold text-center text-white ">
                      {item.text}
                    </h1>
                    <div className="mt-5 text-center">
                      <Cta url={item.button_url} text={item.button_text} />
                      {/* <Link href="/">
                    <a className="px-5 py-3 text-white bg-blue-500">
                      Get started!
                    </a>
                  </Link> */}
                    </div>
                  </div>
                  <Image
                    className="object-cover"
                    src={`http://localhost:1337${item.hero_image.url}`}
                    layout="fill"
                  />
                </div>
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>
            <div className="w-full hero-slider">
              <div className="absolute slider-text-content">
                <h1 className="mb-5 text-5xl font-extrabold text-center text-white ">
                  We Are Leading The Way Construction Works
                </h1>
                <div className="mt-5 text-center">
                  <Cta url="/" text="Get started!" />
                </div>
              </div>
              <Image
                className="object-cover"
                src="/img/bg-img/1.jpg"
                layout="fill"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full hero-slider">
              <div className="absolute slider-text-content">
                <h1 className="mb-5 text-5xl font-extrabold text-center text-white ">
                  Fastest-Growing Construction Company
                </h1>
                <div className="mt-5 text-center">
                  <Cta url="/" text="Get started!" />
                </div>
              </div>
              <Image
                className="object-cover"
                src="/img/bg-img/2.jpg"
                layout="fill"
              />
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    );
}

export default Hero;