import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItem, setTotalItem] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach(item => {
            items += item.qty;
            price += item.price * item.qty;
        });

        setTotalPrice(price);
        setTotalItem(items);

    }, [cart, totalPrice, totalItem, setTotalPrice, setTotalItem]);
    return (
        <div className="pt-5">
            <div className="px-4 px-lg-0">
                <div className="pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="p-2 px-3 text-uppercase text-center">Product</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="p-2 px-3 text-uppercase text-center">Description</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase text-center">Price</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase text-center">Quantity</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase text-center">Remove</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map(item => (<CartItem key={item.id} itemData={item} />))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row py-5 p-4 bg-white rounded shadow-sm">
                                    <div className="col-lg-12">
                                        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                                        <div className="p-4">
                                            <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                                            <ul className="list-unstyled mb-4">
                                                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total ({totalItem} items)</strong>
                                                    <h5 className="font-weight-bold">${Math.round(totalPrice)}</h5>
                                                </li>
                                            </ul><a href="/#" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}
export default connect(mapStateToProps, null)(Cart);

