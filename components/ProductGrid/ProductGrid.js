import {useContext} from 'react';
import SingleProductContext from '../../store/single-product';

import ProductCard from '../ProductCard/ProductCard';
const ProductGrid = (props) => {
    const filterCat = useContext(SingleProductContext);
    const ProdsFiltered = props.products.filter((item)=>item.category.Name == filterCat.catFilter);
    const allProds = props.products;
    console.log(ProdsFiltered)
    return (
      <div className="flex flex-wrap product-grid">
        {filterCat.catFilter == ""
          ? allProds.map((item) => {
              return <ProductCard key={item.id} product={item} />;
            })
          : ProdsFiltered.map((item) => {
              return <ProductCard key={item.id} product={item} />;
            })}
        {/* {ProdsFiltered.map((item) => {
          return <ProductCard key={item.id} product={item} />;
        })} */}
      </div>
    );
}

export default ProductGrid;