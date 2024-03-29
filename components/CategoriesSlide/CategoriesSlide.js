import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import {useContext} from 'react';
import SingleProductContext from '../../store/single-product';

const CategoriesSlide = (props) => {
    const catFilter = useContext(SingleProductContext);
    const filterCategory = (name) => {
        if(catFilter.catFilter != name ){
            catFilter.setCatFilter(()=>{return name})            
        }else{
            catFilter.setCatFilter(()=>{return ''}) 
        }
    }
    return (
      <div className="w-full py-5">
        <Swiper
          className="category-slider"
          spaceBetween={30}
          slidesPerView={2}
          navigation
          breakpoints={{
            1024: {
              slidesPerView: 5,
              spaceBetweenSlides: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetweenSlides: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetweenSlides: 30,
            },
          }}
        >
          {props.cat.map((item) => {
            return (
              <SwiperSlide key={item.Name.toLowerCase().replace(" ", "")}>
                <div
                  className={`w-full ${
                    catFilter.catFilter == item.Name
                      ? " rounded-lg transition-all duration-200 p-5 text-white bg-gray-600"
                      : " transition-all duration-200 "
                  } `}
                  onClick={() => {
                    filterCategory(item.Name);
                  }}
                >
                  <Image
                    className="rounded-lg"
                    src={item.category_image.url}
                    width={item.category_image.width}
                    height={item.category_image.height}
                  />
                  <p className="text-center">{item.Name}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
}

export default CategoriesSlide