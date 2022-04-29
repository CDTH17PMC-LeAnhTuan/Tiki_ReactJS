import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import axios from 'axios';


const ProductList = ({ products }) => {

    const [renderData, setRenderData] = useState(products);

    const renderProductList = async () => {
        await axios
            .get("https://fakestoreapi.com/products")
            .then(res => {
                setRenderData(res.data);
            })
            .catch((err) => {
                console.log("Err", err);
            })
    }

    useEffect(() => {
        renderProductList();
    }, []);

    return (
        <div className="row">
            {renderData.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.shop.products,
    }
}


export default connect(mapStateToProps, null)(ProductList);