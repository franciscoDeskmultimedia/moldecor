import { createContext,useState,useContext } from 'react';

const SingleProductContext = createContext({
  singleProd: {
    imageURL: "",
    imageWidth: "",
    imageheight: "",
    name: "",
    price: "",
    imageData: "",
    brand: "",
    category: "",
    material: "",
    mesures: "",
    galleries:"",
    productApplication:"",
    slug:"",
  },
  setProd: () => {},
  catFilter: "",
  setCatFilter: () => {},
  search: "",
  setSearch: () => {},
});

export default SingleProductContext;