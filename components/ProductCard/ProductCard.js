import Image from 'next/image';
import SingleProductContext from '../../store/single-product';
import {useContext } from 'react';

const ProductCard = (props) => {
    const singleProd = useContext(SingleProductContext);
    const populateSingleProd = () => {
        singleProd.setProd({
          imageURL: props.product.Product_Image.url,
          imageWidth: props.product.Product_Image.width,
          imageHeight: props.product.Product_Image.height,
          name: props.product.Name,
          price: props.product.PVP,
          imageData: props.product.Image_data,
          brand: props.product.brand,
          category: props.product.category,
          material: props.product.Material,
          mesures: props.product.Measures,
          galleries:props.product.galleries,
          productApplication:props.product.Product_application,
          slug:props.product.slug,
        });
        console.log(singleProd.slideProd)
    }
    return (
      <div className={`w-1/2 px-3 py-4 sm:w-1/3 lg:w-1/5 md:w-1/4 ${!props.product.Name.toLowerCase().includes(singleProd.search.toLowerCase()) ? 'hidden' : null }`} onClick={populateSingleProd}>
        <div className="rounded-md shadow-lg">
          <div className="relative product-image">
            <Image
              className="rounded-md "
              src={`${props.product.Product_Image.url}`}
              width={props.product.Product_Image.width}
              height={props.product.Product_Image.height}
            />
          </div>
          <div className="py-5 product-detail px-7">
            <h3 className='font-bold '>{props.product.Name} {props.product.brand.Name}</h3>
            <p>{props.product.Measures.H}</p>
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