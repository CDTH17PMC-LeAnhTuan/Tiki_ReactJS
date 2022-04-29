import React, { useState, useRef } from 'react';
import '../pages/css/category-menu.css';
import logo2 from '../pages/img/logo2.png';
import useOutsideClick from './useOutsideClick';


function CategoryMenu() {
    const [show, setShow] = useState(false);
    const ref = useRef();
    useOutsideClick(ref, () => {
        if (show) setShow(false);
    });
    return (
        <div className="category-menu">
            <div className="category-mobile">
                <button className="btn-category-mobile" onClick={() => setShow(!show)}>
                    <img src={logo2} className="logo2" alt="logo2" />
                </button>
            </div>
            {show && (
                <div className="inner-header">
                    <div className="inner" ref={ref}>
                        <div className="visual">
                            <a href="/#" className="visual-header">
                                <div><i className="fas fa-user-circle icon-user"></i></div>
                                <div className="avatar__content">
                                    <div className="avatar__name">Đăng nhập</div>
                                    <div className="avatar__email">Nhận nhiều ưu đãi hơn</div>
                                </div>
                                <div><i className="fas fa-chevron-right"></i></div>
                            </a>
                        </div>
                        <div className="content">
                            <ul className="content_nav">
                                <li><a href="/#" className="content-item"><i className="fas fa-home"></i>Trang chủ</a></li>
                                <li><a href="/#" className="content-item"><i className="fas fa-list"></i>Danh sách ngành hàng</a></li>
                                <li><a href="/#" className="content-item"><i className="fas fa-user-circle"></i>Quản lý tài khoản</a></li>
                                <li><a href="/#" className="content-item"><i className="fas fa-bell"></i>Thông báo</a></li>
                            </ul>
                            <div className="sub-head">KHUYẾN MÃI HOT</div>
                            <ul className="content_nav">
                                <li><a href="/#" className="content-item">Tiki Deal</a></li>
                                <li><a href="/#" className="content-item">Phiếu quà tặng</a></li>
                                <li><a href="/#" className="content-item">Ưu đãi cho chủ thẻ ngân hàng</a></li>
                            </ul>
                            <div className="sub-head">HỖ TRỢ</div>
                            <ul className="content_nav">
                                <li><a href="/#" className="content-item"><span className="hot-line">HOTLINE: <strong>1900 - 6035</strong>(1000đ/phút)</span></a></li>
                                <li>
                                    <a href="/#" className="content-item">Phiếu quà tặng
                                        <i style={{ marginLeft: 'auto', fontSize: '13px' }} className="fas fa-chevron-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <div className="container">
                <div className="category-menu1">
                    <a href="/#" className="category-menu-item">
                        <div className="img">
                            <img alt="abc" className="itemimg" src="https://salt.tikicdn.com/cache/150x150/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png"></img>
                        </div>
                        <div className="text">Đồ chơi - Mẹ &amp; bé</div>
                    </a>
                    <a href="/#" className="category-menu-item">
                        <div className="img">
                            <img alt="abc" className="itemimg" src="https://salt.tikicdn.com/cache/150x150/ts/category/a6/9f/45/460fdecbbe0f81da09c7da37aa08f680.png"></img>
                        </div>
                        <div className="text">Thực phẩm tươi sống</div>
                    </a>
                    <a href="/#" className="category-menu-item">
                        <div className="img">
                            <img alt="abc" className="itemimg" src="https://salt.tikicdn.com/cache/150x150/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png"></img>
                        </div>
                        <div className="text">Điện thoại - Máy Tính Bảng</div>
                    </a>
                    <a href="/#" className="category-menu-item">
                        <div className="img">
                            <img alt="abc" className="itemimg" src="https://salt.tikicdn.com/cache/150x150/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png"></img>
                        </div>
                        <div className="text">Làm đẹp sức khoẻ</div>
                    </a>
                    <a href="/#" className="category-menu-item">
                        <div className="img">
                            <img alt="abc" className="itemimg" src="https://salt.tikicdn.com/cache/150x150/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png"></img>
                        </div>
                        <div className="text">Điện gia dụng</div>
                    </a>
                    <a href="/#" className="category-menu-item">
                        <div className="img">
                            <img alt="abc" className="itemimg" src="https://salt.tikicdn.com/cache/150x150/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png"></img>
                        </div>
                        <div className="text">Thời trang nữ</div>
                    </a>
                    <a href="/#" className="category-menu-item">
                        <div className="img">
                            <img alt="abc" className="itemimg" src="https://salt.tikicdn.com/cache/150x150/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png"></img>
                        </div>
                        <div className="text">Thời trang nam</div>
                    </a>
                    <a href="/#" className="category-menu-item">
                        <div className="img">
                            <img alt="abc" className="itemimg" src="https://salt.tikicdn.com/cache/150x150/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png"></img>
                        </div>
                        <div className="text">Giày - Dép nữ</div>
                    </a>
                    <a href="/#" className="category-menu-item">
                        <div className="img">
                            <img alt="abc" className="itemimg" src="https://salt.tikicdn.com/cache/150x150/ts/category/31/a7/94/6524d2ecbec216816d91b6066452e3f2.png"></img>
                        </div>
                        <div className="text">Túi thời trang nữ</div>
                    </a>
                    <a href="/#" className="category-menu-item">
                        <div className="img">
                            <img alt="abc" className="itemimg" src="https://salt.tikicdn.com/cache/150x150/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png"></img>
                        </div>
                        <div className="text">Giày - Dép nam</div>
                    </a>
                    <a href="/#" className="category-menu-item">
                        <div className="img">
                            <img alt="abc" className="itemimg" src="https://salt.tikicdn.com/cache/150x150/ts/category/9b/31/af/669e6a133118e5439d6c175e27c1f963.png"></img>
                        </div>
                        <div className="text">Túi thời trang nam</div>
                    </a>
                    <a href="/#" className="category-menu-item">
                        <div className="img">
                            <img alt="abc" className="itemimg" src="https://salt.tikicdn.com/cache/150x150/ts/category/3e/c0/30/1110651bd36a3e0d9b962cf135c818ee.png"></img>
                        </div>
                        <div className="text">Balo và vali</div>
                    </a>
                    <a href="/#" className="category-menu-item">
                        <div className="img">
                            <img alt="abc" className="itemimg" src="https://salt.tikicdn.com/cache/150x150/ts/category/ca/53/64/49c6189a0e1c1bf7cb91b01ff6d3fe43.png"></img>
                        </div>
                        <div className="text">Phụ kiện thời trang</div>
                    </a>
                    <a href="/#" className="category-menu-item">
                        <div className="img">
                            <img alt="abc" className="itemimg" src="https://salt.tikicdn.com/cache/150x150/ts/category/8b/d4/a8/5924758b5c36f3b1c43b6843f52d6dd2.png"></img>
                        </div>
                        <div className="text">Đồng hồ và Trang sức</div>
                    </a>
                    <a href="/#" className="category-menu-item">
                        <div className="img">
                            <img alt="abc" className="itemimg" src="https://salt.tikicdn.com/cache/150x150/ts/category/92/b5/c0/3ffdb7dbfafd5f8330783e1df20747f6.png"></img>
                        </div>
                        <div className="text">Laptop - Máy vi tính - Linh Kiện</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CategoryMenu;