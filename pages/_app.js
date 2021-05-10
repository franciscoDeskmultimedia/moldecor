// import '../styles/globals.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import "swiper/components/thumbs/thumbs.min.css"
import '../styles/global-style.scss';
import {useState} from 'react';

import SingleProductContext from '../store/single-product';

function MyApp({ Component, pageProps }) {

  const [slideProd, setSlideProd] = useState({
    imageURL: "",
    imageWidth: "",
    imageHeight: "",
    name: "",
    price: "",
    imageData: "",
    brand:"",
    category:"",
    material:"",
    mesures:"",
    galleries:"",
    productApplication:"",
    slug:"",
  });
  const [catFilter, setCatFilter] = useState('')
  const [search,setSearch] = useState('')

  return (
    <SingleProductContext.Provider value={{ slideProd: slideProd, setProd : setSlideProd, catFilter: catFilter, setCatFilter: setCatFilter, search: search, setSearch: setSearch}}>
      <Component {...pageProps} />
    </SingleProductContext.Provider>
  );
}

export default MyApp
