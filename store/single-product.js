import { createContext,useState,useContext } from 'react';

const SingleProductContext = createContext({
    singleProd:{
        imageURL: "",
        imageWidth: "",
        imageheight: "",
        name: "",
        price: "",
    },
    setProd : () => {},
    catFilter: '',
    setCatFilter: () => {},
    search:'',
    setSearch:()=>{}
    
});

export default SingleProductContext;