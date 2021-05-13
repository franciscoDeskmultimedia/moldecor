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
    const prod = product[0];
    if (router.isFallback) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Head>
          <title>Productos | Moldecor</title>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
          {/* <link rel="icon" href="/favicon-white.png" /> */}
        </Head>
        <Nav></Nav>
        <div className="max-w-6xl m-auto mt-28">
            <h1 className='pt-20 text-6xl mb-14 font-extralight'>{prod.Name} <span className='font-normal '>{prod.brand.Name}</span></h1>
          <div className="flex flex-wrap prodDispplay">
            <div className="relative w-full md:w-1/2">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                autoHeight={true}
              >
                <SwiperSlide>
                    <Image src={prod.Product_Image.url} layout='responsive' width={prod.Product_Image.width} height={prod.Product_Image.height} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={prod.Image_data.url} layout='responsive' width={prod.Image_data.width} height={prod.Image_data.height} />
                </SwiperSlide>
                {prod.Product_application ? (prod.Product_application.map((item,i)=>{
                    return (
                      <SwiperSlide key={i}>
                        <Image
                          src={item.url}
                          layout='responsive'
                          width={item.width}
                          height={item.height}
                        />
                      </SwiperSlide>
                    );
                })) : null } 
              </Swiper>
            </div>
            <div className="w-full px-10 md:w-1/2">
                <h3 className='text-2xl text-gray-800 underline '>Información del producto</h3>
                <div className='mt-5'>
                    <h3 className='px-5 py-2 text-2xl text-white bg-gray-600'>Medidas</h3>
                    <div>
                        {prod.Measures.H ? <p>H: {prod.Measures.H}</p> : null}
                        {prod.Measures.W ? <p>W: {prod.Measures.W}</p> : null}
                        {prod.Measures.L ? <p>L: {prod.Measures.L}</p> : null}
                    </div>
                </div>
                <div>
                    <h3>Categoría</h3>
                    <p>{prod.category.Name}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Product;

export async function getStaticProps({ params }) {
    const product = await getSingleProduct(params.slug)
    return {
      props: {
        product
      },
      revalidate: 1,
    };
}
  
export async function getStaticPaths() {
  const test = await getAllProductsSlug();
  return {
    paths: test.map((item)=>{
        return (
            {params: {slug: item.slug}}
        )
    }) ,
    fallback:true
  };
}


  