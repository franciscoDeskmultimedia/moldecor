// import '../styles/globals.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
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
  });

  return (
    <SingleProductContext.Provider value={{ slideProd: slideProd, setProd : setSlideProd }}>
      <Component {...pageProps} />
    </SingleProductContext.Provider>
  );
}

export default MyApp
