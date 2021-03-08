import { useRouter } from 'next/router';
import { moldecorProd } from "../../lib/api";
import Image from "next/image";
const Producto = ({prods,prod, theContext}) => {
    console.log(prods)
    const router = useRouter();
    const prodItem = prod[0];
    return (
        <div>
        <p>{router.asPath}</p>
        <p>{router.query.producto}</p>
        <p>{prodItem.modelo}</p>
        <p>{prodItem.marca}</p>
        <p>{prodItem.hcm ? prodItem.hcm : 'No hay'}</p>
        {prodItem.image ? <Image src={prodItem.image} width='500' height='334'></Image>
         : 'no hay'}
        </div>
    )
}

export default Producto;

export async function getStaticPaths() {
    return {
        paths: [
            { params: { producto: 'A' } },
            { params: { producto: 'A1' } }
          ],
      fallback: true // See the "fallback" section below
    };
  }


export async function getStaticProps({ params }) {
    const prods = await moldecorProd();
    const prod = prods.filter((item)=>{
        return item.modelo == params.producto
    })
    const theContext = params;
  
    return {
      props: {
        prods,
        prod,
        theContext
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second
      revalidate: 1, // In seconds
    };
  }