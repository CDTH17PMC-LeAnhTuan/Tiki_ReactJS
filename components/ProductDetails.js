import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router';
import { addToCart } from '../redux/Cart/product_action';
import { Link } from 'react-router-dom';

const ProductDetails = ({ addToCart }) => {

    const [item, setSingleItem] = useState({
        id: 0,
        title: '',
        description: '',
        image: '',
        price: 0,
    });



    const productId = useParams();
    useEffect(() => {
        const renderProductItem = () => {
            axios
                .get(`https://fakestoreapi.com/products/${productId.id}`)
                .then(res => {
                    setSingleItem(res.data);
                })
                .catch((err) => {
                    console.log("Err", err);
                })
        };
        renderProductItem();
    }, [productId.id]);

    return (
        <div className="container-fluid p-5">
            <div className="card mx-auto col-md-6 col-12 mt-5 prod-card-item">
                <img className='mx-auto img-thumbnail' alt="product-item" src={item.image} style={{ width: '50%' }} />
                <div className="card-body text-center mx-auto">
                    <div className='cvp'>
                        <h5 className="card-title font-weight-bold prod-title">{item.title}</h5>
                        <p className="card-text prod-des" >{item.description}</p>
                        <p className="card-text prod-price">${item.price}</p>
                        <div className="div-container">
                            <Link to="/">Learn More<span className="rouded-circle sp1 px-2 py-0 ml-1"><i className="fa fa-angle-right"></i></span></Link>
                            <button onClick={() => addToCart(item)} className="btn btn-add cart-product-item px-auto" style={{ borderRadius: '20px ', width: '200px', padding: '0', margin: '0' }}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
    }
}

export default connect(null, mapDispatchToProps)(ProductDetails);