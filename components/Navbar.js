import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../pages/img/logo.png';
import logo2 from '../pages/img/logo2.png';
import icontext from '../pages/img/icon.png';
import user from '../pages/img/user.png';
import cartimg from '../pages/img/cart.png';
import freeship from '../pages/img/freeship.png';
import menuitem from '../pages/img/menu-item.jpg';
import { connect } from "react-redux";
import '../pages/css/menu.css';


const Navbar = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty
        });
        setCartCount(count);
    }, [cart, cartCount])

    return (
        <div>
            <div className="header">
                <div className="container">
                    <nav className="my-navbar">
                        <div className="div-logo">
                            <Link to="/" exact="true" className="logo">
                                <img className="logo" src={logo} alt="logo" />
                            </Link>
                            <div className="img-freeship">
                                <a href="/#">
                                    <img src={freeship} width="83" height="12" className="freeship" alt="freeship" />
                                </a>
                            </div>
                        </div>
                        <div className="div-search" style={{ display: ' flex' }}>
                            <div className="menu dropdown">
                                <a href="/#" className="menu-button">
                                    <img src={logo2} className="logo2" alt="logo2" />
                                    <div className="wrap">
                                        <span className="text">Danh Mục</span>
                                        <span className="text-icon">
                                            Sản phẩm
                                            <img src={icontext} alt="icon" width="16" height="16" />
                                        </span>
                                    </div>
                                </a>

                                <ul className="dropdown-menu">
                                    <li className="dropdown dropdown-sub">
                                        <Link to="/category" className="link-item"><i className="fas fa-mobile-alt"></i>Điện thoại - Máy tính bảng</Link>

                                        <div className="dropdown-menu dropdown-sub-menu">
                                            <div className="row">
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <ul className="list-group">
                                                        <li className="list-group-item" ><span style={{ fontWeight: '500' }} className="">Xu hướng</span></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy S20 Plus</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A51 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy M11 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A31 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Iphone 11</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Ipad 10.2</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Ipad Mini 5</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A11 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A20s </a></li>
                                                    </ul>
                                                </div>

                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <ul className="list-group">
                                                        <li className="list-group-item" ><span style={{ fontWeight: '500' }} className="">Nổi bật</span></li>
                                                        <li className="list-group-item"><a href="/#" className="">Ipad Mini 5</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A11 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A20s </a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <ul className="list-group list1">
                                                        <li className="list-group-item"><a href="/#" className="">Máy tính bảng</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Phụ kiện điện thoại</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Máy đọc sách</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A31 </a></li>
                                                    </ul>

                                                    <ul className="list-group">
                                                        <li className="list-group-item"><a href="/#" className="">Máy tính bảng</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Phụ kiện điện thoại</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Máy đọc sách</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A31 </a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <img src={menuitem} alt="menu-item" />
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    <li className="dropdown dropdown-sub"><Link to="/category" className="link-item">
                                        <i className="fas fa-tv"></i>Điện tử - Điện lạnh</Link>
                                        <div className="dropdown-menu dropdown-sub-menu">
                                            <div className="row">
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <ul className="list-group">
                                                        <li className="list-group-item" ><span style={{ fontWeight: '500' }} className="">Điện tử</span></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy S20 Plus</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A51 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy M11 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A31 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Iphone 11</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Ipad 10.2</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Ipad Mini 5</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A11 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A20s </a></li>
                                                    </ul>
                                                </div>

                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <ul className="list-group">
                                                        <li className="list-group-item" ><span style={{ fontWeight: '500' }} className="">Nổi bật</span></li>
                                                        <li className="list-group-item"><a href="/#" className="">Ipad Mini 5</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A11 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A20s </a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <ul className="list-group list1">
                                                        <li className="list-group-item"><a href="/#" className="">Máy tính bảng</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Phụ kiện điện thoại</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Máy đọc sách</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A31 </a></li>
                                                    </ul>

                                                    <ul className="list-group">
                                                        <li className="list-group-item"><a href="/#" className="">Máy tính bảng</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Phụ kiện điện thoại</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Máy đọc sách</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A31 </a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <img src={menuitem} alt="menu-item" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown dropdown-sub">
                                        <Link to="/category" className="link-item"><i className="fas fa-headphones"></i>Phụ kiện - Thiết Bị Số</Link>
                                        <div className="dropdown-menu dropdown-sub-menu">
                                            <div className="row">
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <ul className="list-group">
                                                        <li className="list-group-item" ><span style={{ fontWeight: '500' }} className="">Phụ kiện - Thiết Bị Số</span></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy S20 Plus</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A51 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy M11 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A31 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Iphone 11</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Ipad 10.2</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Ipad Mini 5</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A11 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A20s </a></li>
                                                    </ul>
                                                </div>

                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <ul className="list-group">
                                                        <li className="list-group-item" ><span style={{ fontWeight: '500' }} className="">Nổi bật</span></li>
                                                        <li className="list-group-item"><a href="/#" className="">Ipad Mini 5</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A11 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A20s </a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <ul className="list-group list1">
                                                        <li className="list-group-item"><a href="/#" className="">Máy tính bảng</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Phụ kiện điện thoại</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Máy đọc sách</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A31 </a></li>
                                                    </ul>

                                                    <ul className="list-group">
                                                        <li className="list-group-item"><a href="/#" className="">Máy tính bảng</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Phụ kiện điện thoại</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Máy đọc sách</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A31 </a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <img src={menuitem} alt="menu-item" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown dropdown-sub">
                                        <Link to="/category" className="link-item">
                                            <i className="fas fa-laptop"></i>
                                            Laptop - Thiết Bị IT
                                        </Link>
                                        <div className="dropdown-menu dropdown-sub-menu">
                                            <div className="row">
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <ul className="list-group">
                                                        <li className="list-group-item"><span style={{ fontWeight: '500' }} className="">Laptop</span></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy S20 Plus</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A51 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy M11 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A31 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Iphone 11</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Ipad 10.2</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Ipad Mini 5</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A11 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A20s </a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <ul className="list-group">
                                                        <li className="list-group-item" ><span style={{ fontWeight: '500' }} className="">Nổi bật</span></li>
                                                        <li className="list-group-item"><a href="/#" className="">Ipad Mini 5</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A11 </a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A20s </a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <ul className="list-group list1">
                                                        <li className="list-group-item"><a href="/#" className="">Máy tính bảng</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Phụ kiện điện thoại</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Máy đọc sách</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A31 </a></li>
                                                    </ul>

                                                    <ul className="list-group">
                                                        <li className="list-group-item"><a href="/#" className="">Máy tính bảng</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Phụ kiện điện thoại</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Máy đọc sách</a></li>
                                                        <li className="list-group-item"><a href="/#" className="">Samsung Galaxy A31 </a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <img src={menuitem} alt="menu-item" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown dropdown-sub"><Link to="/category" className="link-item"><i className="fas fa-camera"></i>Máy Ảnh - Quay Phim</Link></li>
                                    <li className="dropdown dropdown-sub"><Link to="/category" className="link-item"><i className="fas fa-motorcycle"></i>Xe Máy, Xe Môtô, Xe Đạp</Link></li>
                                    <li className="dropdown dropdown-sub"><Link to="/category" className="link-item"><i className="fas fa-globe"></i>Hàng Quốc Tế</Link></li>
                                </ul>
                            </div>

                            <div className="div-search-1">
                                <div className="search">
                                    <input type="text" className="form-control"
                                        placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..." />
                                    <div className="input-group-btn">
                                        <button className="btn btn-search" type="submit">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="bottom-link">
                                    <a href="/#">tất cả thịt rau củ</a>
                                    <a href="/#">thịt</a>
                                    <a href="/#">hàng đông lạnh</a>
                                    <a href="/#">trái cây</a>
                                    <a href="/#">hải sản</a>
                                    <a href="/#">gạo</a>
                                </div>
                            </div>
                        </div>
                        <div className="user-wrap">
                            <a href="/#" className="menu-button">
                                <img src={user} className="user" alt="user" />
                                <div className="">
                                    <span className="text">Đăng nhập &#47; Đăng ký</span>
                                    <span className="text-icon">
                                        Tài khoản
                                        <img src={icontext} alt="icon" width="16" height="16" />
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="div-cart" style={{ marginTop: '5px' }}>
                            <div className="cart-wrap">
                                <div className="cart">
                                    <Link to="/cart">
                                        <img src={cartimg} className="cart" alt="cart" />
                                    </Link>
                                    <span className="cart-item">{cartCount}</span>
                                </div>
                                <span className="cart-text">Giỏ hàng</span>
                            </div>
                            <div className="tiki-seller">
                                <a className="tiki-seller" href="/#">
                                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg"
                                        className="tiki-seller" alt="tiki-seller" />
                                    <span className="text">Bán hàng cùng Tiki</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div >
            </div >
        </div>
    );
};

const mapStateToProps = (state) => {
    // console.log(state.shop.cart);
    return {
        cart: state.shop.cart
    }
}
export default connect(mapStateToProps, null)(Navbar);