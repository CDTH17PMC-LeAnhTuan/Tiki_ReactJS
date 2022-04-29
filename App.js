import '../src/pages/css/header.css';
import { React, Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Main from './pages/Homepage/Main';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './pages/Homepage/Footer';
import ProductDetails from './components/ProductDetails';
import $ from 'jquery';
import Category from './components/Category';
import { ThemeProvider } from '@mui/material';
import theme from '../src/themes/theme.js';
import '../src/pages/css/responsive.css';
import CategoryMenu from './components/CategoryMenu';

$(document).ready(function () {
    $(".menu").hover(function () {
        $('.bg-main').toggleClass('bg-main-1');
    });
});

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Router>
                    <div className="App" >
                        <Navbar />
                        <div className="main_outsite">
                            <div className="bg-main"> </div>
                            <Switch>
                                <Route exact path="/cart" component={Cart} />
                                <Route exact path="/product/:id" component={ProductDetails} />
                                <Route exact path="/category" component={Category} />
                                <Route exact path="/category/menu" component={CategoryMenu} />
                                <Main />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </ThemeProvider>
        );
    }
}

export default App;
