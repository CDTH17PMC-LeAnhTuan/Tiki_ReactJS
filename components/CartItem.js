import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, updateToCart } from '../redux/Cart/product_action';

const CartItem = ({ itemData, removeCart, updateCart }) => {

    const [item, setItem] = useState(itemData.qty);

    const onChangeItem = (e) => {
        const valueItem = e.target.value;
        setItem(valueItem);
        updateCart(itemData.id, valueItem);
    }

    return (
        <tr>
            <th scope="row" className="border-0">
                <div className="p-2">
                    <img src={itemData.image} alt={itemData.image} width="100" className="img-fluid rounded shadow-sm" style={{ display: 'block', margin: '0 auto' }} />
                    <div className="ml-3 d-inline-block align-middle pt-2">
                        <h5 className="mb-0"> <a href="/#" className="text-dark d-inline-block align-middle text-center font-weight-bold" style={{ fontSize: '15px' }}>{itemData.title}</a></h5>
                    </div>
                </div>
            </th>
            <td className="border-0 align-middle"><span className="text-muted font-weight-normal font-italic" style={{ fontSize: '13px' }}>{itemData.description}</span></td>
            <td className="border-0 align-middle"><strong>${itemData.price}</strong></td>
            <td className="border-0 align-middle">
                <strong> <input
                    min="1"
                    type="number"
                    id="qty"
                    name="qty"
                    value={item}
                    onChange={onChangeItem}
                /></strong></td>
            <td className="border-0 align-middle"><button onClick={() => removeCart(itemData.id)}><i className="fa fa-trash"></i></button></td>
        </tr>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeCart: (id) => dispatch(removeFromCart(id)),
        updateCart: (id, value) => dispatch(updateToCart(id, value)),
    }
}
export default connect(null, mapDispatchToProps)(CartItem);