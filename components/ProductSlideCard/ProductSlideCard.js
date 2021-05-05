import Link from 'next/link';
import Image from 'next/image';
import SingleProductContext from '../../store/single-product';
import {useContext} from 'react';

const ProductSlideCard = (props) => {
    console.log(props.prodItem)
    const clean = {
      imageURL: "",
      imageWidth: "",
      imageHeight: "",
      name: "",
      price: "",
    };
    const theprod = useContext(SingleProductContext);
    return (
      <div
        className={`fixed top-0 left-0 z-50 flex w-screen h-screen bg-gray-900 bg-opacity-60 ${
          props.prodItem.name == "" ? "hidden" : ""
        }`}
      >
        <div
          className="w-0 h-screen sm:w-2/5 lg:w-3/5 "
          onClick={() => {
            theprod.setProd(clean);
          }}
        >
        </div>
        <div className="z-50 w-full h-screen px-10 py-5 overflow-y-scroll bg-white sm:w-3/5 lg:w-2/5">
          <div className="relative flex mb-5">
            <p
              className="flex items-center w-1/3"
              onClick={() => {
                theprod.setProd(clean);
              }}
            >
              <span className="cursor-pointer material-icons material-icons-outlined">
                west
              </span>
            </p>
            <h1 className="text-3xl ">Detalles</h1>
          </div>
          <Image
            layout="responsive"
            src={props.prodItem.imageURL}
            width={props.prodItem.imageWidth}
            height={props.prodItem.imageHeight}
          />
          <div className='mt-10'>
              <p className='text-bold'>{props.prodItem.name}</p>
              <p>${props.prodItem.price}</p>
          </div>
        </div>
      </div>
    );
}

export default ProductSlideCard;