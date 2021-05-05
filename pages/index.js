import Head from 'next/head';
import {  getProducts ,getHome, getCategories } from "../lib/api";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import ProductGrid from '../components/ProductGrid/ProductGrid';
import SingleProductContext from '../store/single-product';
import ProductSlideCard from '../components/ProductSlideCard/ProductSlideCard';
import {useContext} from 'react';
import Image from 'next/image';


export default function Home({prods, home, categories }) {
  const selectedProd = useContext(SingleProductContext); 
  return (
    <div>
      <Head>
        <title>Moldecor</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        {/* <link rel="icon" href="/favicon-white.png" />
        <link rel="stylesheet" href="css/style-main.css"></link> */}
      </Head>
      <Nav></Nav>

      {/* <Hero /> */}
      <div className='flex flex-wrap categories'>
        {categories.map((item)=>{
          return (
            <div className='w-1/5'>
              <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.category_image.url} width={item.category_image.width} height={item.category_image.height} />
              <p>{item.Name}</p>
            </div>
          )
        })}
      </div>
      <div>
        {home.map((item) => {
          return (
            <div
              className={item.id + item.__typename}
              key={item.id + item.__typename}
            >
              {item.__typename == "ComponentSliderHeroSlider" ? (
                <Hero slides={item.hero_sliders} />
              ) : null}
              {item.__typename == "ComponentProductGridProductGrid" ? (
                <ProductGrid products={prods} />
              ) : null}
            </div>
          );
        })}
      </div>
      
        <ProductSlideCard prodItem={selectedProd.slideProd} />
      

      {/* <div>
        <p>{selectedProd.slideProd ? selectedProd.slideProd.name : null}</p>
      </div> */}
      {/* <Gallery productos={prods}></Gallery> */}
    </div>
  );
}

export async function getStaticProps(context) {
  const prods = await getProducts();
  const home = await getHome();
  const categories = await getCategories();

  return {
    props: {
      prods,
      home,
      categories
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
    // notFound:true,
  };
}