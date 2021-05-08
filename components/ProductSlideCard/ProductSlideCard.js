import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import SingleProductContext from '../../store/single-product';
import {useContext} from 'react';

const ProductSlideCard = (props) => {
    console.log(props.prodItem)
    const clean = {
      imageURL: "",
      imageWidth: "",
      imageHeight: "",
      name: "",
      price: "",
      imageData: "",
      brand: "",
      category: "",
      material: "",
      mesures: "",
    };
    const theprod = useContext(SingleProductContext);
    return (
      <div
        className={`fixed top-0 left-0 z-50 flex w-screen h-screen bg-gray-900 bg-opacity-60 ${
          props.prodItem.name == "" ? "hidden" : ""
        }`}
      >
        <div
          className="w-0 h-screen sm:w-2/5 lg:w-3/5 "
          onClick={() => {
            theprod.setProd(clean);
          }}
        ></div>
        <div className="relative z-50 w-full h-screen px-10 py-5 overflow-y-scroll bg-white sm:w-3/5 lg:w-2/5">
          <div className="relative flex mb-5">
            <p
              className="flex items-center w-1/3"
              onClick={() => {
                theprod.setProd(clean);
              }}
            >
              <span className="cursor-pointer material-icons material-icons-outlined">
                west
              </span>
            </p>
            <h1 className="text-3xl ">Detalles</h1>
          </div>
          <Swiper
            className="category-slider"
            spaceBetween={30}
            slidesPerView={1}
            navigation
          >
            <SwiperSlide>
              <Image
                layout="responsive"
                src={
                  props.prodItem.imageURL
                    ? props.prodItem.imageURL
                    : "/img/moldecor-logo2.png"
                }
                width={props.prodItem.imageWidth}
                height={props.prodItem.imageHeight}
              />
            </SwiperSlide>
            {props.prodItem.imageData ? (
              <SwiperSlide>
                <Image
                  layout="responsive"
                  src={
                    props.prodItem.imageData
                      ? props.prodItem.imageData.url
                      : "/img/moldecor-logo2.png"
                  }
                  width={props.prodItem.imageWidth}
                  height={props.prodItem.imageHeight}
                />
              </SwiperSlide>
            ) : null}
          </Swiper>

          <div className="mt-10">
            <p className="font-bold ">
             {props.prodItem.name} {props.prodItem.brand.Name}  ({props.prodItem.mesures.H} )
            </p>
            <div className="mt-5">
              <h3 className="mb-2 text-xl font-bold">Categoria : </h3>
              <p>{props.prodItem.category.Name}</p>
            </div>
            <div className="mt-5">
              <h3 className="mb-2 text-xl font-bold">Material : </h3>
              <p>{props.prodItem.material.Material}</p>
            </div>
            <div className="mt-5">
              <h3 className="mb-2 text-xl font-bold">Medidas : </h3>
              <div className="flex flex-wrap">
                {props.prodItem.mesures.H ? (
                  <p className="w-full md:w-1/3">
                    H : {props.prodItem.mesures.H}
                  </p>
                ) : null}
                {props.prodItem.mesures.W ? (
                  <p className="w-full md:w-1/3">
                    W : {props.prodItem.mesures.W}
                  </p>
                ) : null}
                {props.prodItem.mesures.L ? (
                  <p className="w-full md:w-1/3">
                    L : {props.prodItem.mesures.L}
                  </p>
                ) : null}
              </div>
            </div>

          </div>
          <div className='w-full px-2 py-2 mt-10 text-center bg-gray-600 morebutton hover:bg-gray-800'>
            <div className='py-2 m-auto text-white bg-gray-600 border-2 border-white hover:bg-gray-800'>VER MÁS</div>
          </div>
        </div>
      </div>
    );
}

export default ProductSlideCard;