import Image from 'next/image';
import SingleProductContext from '../../store/single-product';
import {useContext } from 'react';

const ProductCard = (props) => {
    const singleProd = useContext(SingleProductContext);
    const populateSingleProd = () => {
        singleProd.setProd({
                imageURL: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${props.product.Product_Image.url}`,
                imageWidth: props.product.Product_Image.width,
                imageheight: props.product.Product_Image.height,
                name: props.product.Name,
                price: props.product.PVP,
            }
        );
        // singleProd={
        //   ...singleProd,
        //   imageURL: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${props.product.Product_Image.url}`,
        //   imageWidth: props.product.Product_Image.width,
        //   imageheight: props.product.Product_Image.height,
        //   name: props.product.Name,
        //   price: props.product.PVP,
        // };
        console.log(singleProd.slideProd)
    }
    return (
      <div className="w-full px-3 py-4 sm:w-1/3 lg:w-1/5 md:w-1/4 " onClick={populateSingleProd}>
        <div className="rounded-md shadow-lg">
          <div className="relative product-image">
            <Image
              className="rounded-md "
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${props.product.Product_Image.url}`}
              width={props.product.Product_Image.width}
              height={props.product.Product_Image.height}
            />
          </div>
          <div className="py-5 product-detail px-7">
            <h3>Nombre: {props.product.Name}</h3>
            <p>Precio: ${props.product.PVP}</p>
            {/* <div className="product-item-measures">
              <h4>Medidas</h4>
              <ul className='pl-3 '>
                {props.product.Measures.H ? (
                  <li>
                    <p>H : {props.product.Measures.H}</p>
                  </li>
                ) : null}
                {props.product.Measures.W ? (
                  <li>
                    <p>W : {props.product.Measures.W}</p>
                  </li>
                ) : null}
                {props.product.Measures.L ? (
                  <li>
                    <p>H : {props.product.Measures.L}</p>
                  </li>
                ) : null}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    );
}

export default ProductCard