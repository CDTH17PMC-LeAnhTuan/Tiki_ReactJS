import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/Cart/product_action';
import freeship from '../pages/img/tikiship.png';

const showRating = (rating) => {
    var result = [];
    for (var i = 1; i <= rating; i++) {
        result.push(<i key={i} className="fa fa-star checked"></i>)
    }
    for (var j = 1; j <= (5 - rating); j++) {
        result.push(<i key={i + j} className="fa fa-star"></i>)
    }
    return result;
}

const ProductItem = ({ product, addToCart }) => {

    return (
        <div className="col-lg-2 col-6">
            <div className="card">
                <div className="card-image">
                    <Link to={`/product/${product.id}`} className='mx-auto img-thumbnail' style={{ display: 'block', textAlign: 'center' }}>
                        <img className="card-img-top" src={product.image} alt="Card cap" width="160px" height="160px" />
                    </Link>
                    <img className="card-tikiship" src={freeship} width="136" height="24" alt="Card cap" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>

                    <div className="rating" style={{ fontSize: '13px' }}>
                        {showRating(product.rating.rate)}
                        <span className="buyed">Đã bán {product.rating.count}</span>
                    </div>

                    <p className="cost"> {product.price}$  <span> -3% </span></p>
                </div>
            </div>
        </div>
    );
}




const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
    }
}
export default connect(null, mapDispatchToProps)(ProductItem);