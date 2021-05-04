import { createContext,useState,useContext } from 'react';

const SingleProductContext = createContext({
    singleProd:{
        imageURL: "",
        imageWidth: "",
        imageheight: "",
        name: "",
        price: "",
    },
    setProd : () => {}
    
});

export default SingleProductContext;