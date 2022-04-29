import { combineReducers } from "redux";
import products from "./Cart/products";


const appReducers = combineReducers({
    shop: products,
});


export default appReducers;