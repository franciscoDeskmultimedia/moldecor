import Head from 'next/head';
import Nav from "../../components/nav/Nav";
import {  getProducts, getCategories } from "../../lib/api";
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import SingleProductContext from '../../store/single-product';
import ProductSlideCard from '../../components/ProductSlideCard/ProductSlideCard';
import {useContext} from 'react';
import CatgoriesSlide from '../../components/CategoriesSlide/CategoriesSlide';
import Footer from '../../components/Footer/Footer';

const Products =  ({prods, categories}) => {
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
        <div className="mt-24 ">
          <CatgoriesSlide cat={categories} />
          <ProductGrid products={prods} />
          <Footer></Footer>
        </div>
        <ProductSlideCard prodItem={selectedProd.slideProd} />
      </div>
    );
}

export default Products;

export async function getStaticProps(context) {
    const prods = await getProducts();
    const categories = await getCategories();
  
    return {
      props: {
        prods,
        categories
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second
      revalidate: 1, // In seconds
      // notFound:true,
    };
  }