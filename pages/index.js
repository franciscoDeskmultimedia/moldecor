import Head from 'next/head'
import { moldecorProd } from "../lib/api";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Gallery from "../components/gallery/Gallery"

export default function Home({prods}) {
  console.log(prods)
  return (
    <>
      <Head>
        <title>Moldecor</title>
        <link rel="icon" href="/favicon-white.png" />
        <link rel="stylesheet" href="css/style-main.css"></link>
      </Head>
      <div id="preloader">
        <div className="loader"></div>
      </div>
      <div className="top-search-area">
        <div className="modal fade" id="searchModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        
                        <button type="button" className="btn close-btn" data-dismiss="modal"><i className="ti-close"></i></button>
                        
                        <form action="index.html" method="post">
                            <input type="search" name="top-search-bar" className="form-control" placeholder="Search and hit enter..." />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <Nav></Nav>
      <Hero></Hero>
      <Gallery productos={prods}></Gallery>
      

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        {/* <img src='https://drive.google.com//uc?export=view&id=1FZlJ_4So36ILo-2DY4AOLfpzU1XUVZ0v'></img>
      {prods
            .slice(1, prods.length - 1)
            .map(({ categoria, marca, modelo, hcm ,image}) => (
              <a
                className="p-4 border rounded border-grey-200 hover:shadow-lg hover:border-transparent"
                key={modelo}
                href='#'
                target="_blank"
              >
                <h3 className="mb-2 font-bold">{modelo}</h3>
                <div dangerouslySetInnerHTML={{ __html: categoria }} />
                <span className="block mt-4 text-blue-600 hover:text-blue-400 hover:underline">
                  {marca}
                </span>
                <img src={image}></img>
                <p>{image}</p>
              </a>
            ))} */}
        
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