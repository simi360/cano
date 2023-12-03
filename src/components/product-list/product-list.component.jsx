import Product from '../product/product.component';

const ProductList = ({data}) => {
 
    return(
        <>
            {data && data.map(productData => {
                return <Product key={productData.barcodeID} productData={productData} />
            })}
        </>
    )
}

export default ProductList;

