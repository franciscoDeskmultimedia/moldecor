import Head from 'next/head';
import {  getProducts ,getHome } from "../lib/api";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import ProductGrid from '../components/ProductGrid/ProductGrid';
import SingleProductContext from '../store/single-product';
import {useContext} from 'react';


export default function Home({prods, home }) {
  const selectedProd = useContext(SingleProductContext); 
  return (
    <div>
      <Head>
        <title>Moldecor</title>
        {/* <link rel="icon" href="/favicon-white.png" />
        <link rel="stylesheet" href="css/style-main.css"></link> */}
      </Head>
      <Nav></Nav>

      {/* <Hero /> */}
      <div>
        {home.map((item) => {
          return (
            <div className={item.id + item.__typename} key={item.id + item.__typename}>
              {item.__typename == 'ComponentSliderHeroSlider' ? <Hero slides={item.hero_sliders} /> : null }
              {item.__typename == 'ComponentProductGridProductGrid' ? <ProductGrid products={prods} /> : null }
            </div>
          );
        })}
      </div>
      <div>
        <p>{selectedProd.slideProd ? selectedProd.slideProd.name : null}</p>
      </div>
      {/* <Gallery productos={prods}></Gallery> */}
    </div>
  );
}

export async function getStaticProps(context) {
  const prods = await getProducts();
  const home = await getHome();

  return {
    props: {
      prods,
      home
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
    // notFound:true,
  };
}