import ProductCard from '../ProductCard/ProductCard';
const ProductGrid = (props) => {
    return (
        <div className='flex flex-wrap product-grid'>
            { props.products.map((item)=>{
                return (
                    <ProductCard key={item.id} product={item} />
                )
            })}
        </div>
    )
}

export default ProductGrid;