import Head from 'next/head';
import Nav from "../../components/nav/Nav";
import {getAllProductsSlug, getSingleProduct} from '../../lib/api';
import SwiperCore, { Navigation, Pagination, EffectFade, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from '../../components/Footer/Footer';
import Image from 'next/image';
import { useRouter } from 'next/router'

SwiperCore.use([Navigation,Thumbs]);

const Product =  ({product}) => {
    const router = useRouter();
    const prod = product;
    if (router.isFallback) {
      return <div>Loading...</div>
    }else{  
      return (
        <div>
          <Head>
            <title>Productos | Moldecor</title>
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            ></link>
          </Head>
          <Nav></Nav>
          {prod.map((item,i)=>{
            return (
              <div key={i} className="max-w-6xl m-auto mt-28">
                <h1 className="pt-20 text-6xl mb-14 font-extralight">
                  {item.Name ? item.Name : "Product Name"}{" "}
                  <span className="font-normal ">
                    {item.brand.Name ? item.brand.Name : "Brand"}
                  </span>
                </h1>
                <div className="flex flex-wrap prodDispplay">
                  <div className="relative w-full md:w-1/2">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      navigation
                      autoHeight={true}
                    >
                      <SwiperSlide>
                        <Image
                          src={
                            item.Product_Image
                              ? item.Product_Image.url
                              : "/img/bg-img/12.jpg"
                          }
                          layout="responsive"
                          width={
                            item.Product_Image ? item.Product_Image.width : 500
                          }
                          height={
                            item.Product_Image ? item.Product_Image.height : 500
                          }
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          src={
                            item.Image_data
                              ? item.Image_data.url
                              : "/img/bg-img/12.jpg"
                          }
                          layout="responsive"
                          width={item.Image_data ? item.Image_data.width : 500}
                          height={
                            item.Image_data ? item.Image_data.height : 500
                          }
                        />
                      </SwiperSlide>
                      {item.Product_application
                        ? item.Product_application.map((slide, i) => {
                            return (
                              <SwiperSlide key={i}>
                                <Image
                                  src={slide.url}
                                  layout="responsive"
                                  width={slide.width}
                                  height={slide.height}
                                />
                              </SwiperSlide>
                            );
                          })
                        : null}
                    </Swiper>
                  </div>
                  <div className="w-full px-10 md:w-1/2">
                    <h3 className="text-2xl text-gray-800 underline ">
                      Información del producto
                    </h3>
                    <div className="mt-5">
                      <h3 className="px-5 py-2 text-2xl text-white bg-gray-600">
                        Medidas
                      </h3>
                      <div>
                        {item.Measures.H ? (
                          <p>H: {item.Measures.H ? item.Measures.H : null}</p>
                        ) : null}
                        {item.Measures.W ? (
                          <p>W: {item.Measures.W ? item.Measures.W : null}</p>
                        ) : null}
                        {item.Measures.L ? (
                          <p>L: {item.Measures.L ? item.Measures.L : null}</p>
                        ) : null}
                      </div>
                    </div>
                    <div>
                      <h3>Categoría</h3>
                      <p>
                        {item.category.Name
                          ? item.category.Name
                          : "Category Name"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
      );
      
    }
    
}

export default Product;


  
export async function getStaticPaths() {
  const slugs = await getAllProductsSlug();
  return {
    paths: slugs.map((item)=>{
        return { params: { slug: item.slug} };
    }),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const product = await getSingleProduct(params.slug)
  return {
    props: {
      product,
    },
    revalidate: 1,
  };
}
  