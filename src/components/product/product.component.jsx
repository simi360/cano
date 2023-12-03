import "./product.styles.css";

const Product = ({productData}) => {

    return(
        <>
            <ol role="list">
                <li style={{"--productScore": productData.envImpact}}>
                    <h3>{productData.name}</h3>
                    <p><strong>Manufacturer: </strong>{productData.manufacturer}</p>
                    <p><strong>Department: </strong>{productData.department}</p>
                    <p><strong>Product ID: </strong>{productData.barcodeID}</p>
                    <p><strong>Environmental Impact: </strong>{productData.envImpact}</p>
                </li>
            </ol>
        </>
    )
}

export default Product;