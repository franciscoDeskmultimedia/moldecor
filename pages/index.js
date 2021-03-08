import Head from 'next/head'
import { moldecorProd } from "../lib/api";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Gallery from "../components/gallery/Gallery";
import Link from 'next/link';

export default function Home({prods}) {
  return (
    <>
      <Head>
        <title>Moldecor</title>
        <link rel="icon" href="/favicon-white.png" />
        <link rel="stylesheet" href="css/style-main.css"></link>
      </Head>
      <Nav></Nav>
      <Hero></Hero>

      <Gallery productos={prods}></Gallery>
      

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">

        
      </main>


    <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/alime.bundle.js"></script>
    <script src="js/default-assets/active.js"></script>
    
    </>
  )
}

export async function getStaticProps(context) {
  const prods = await moldecorProd();

  return {
    props: {
      prods,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}