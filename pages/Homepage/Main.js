import { React, Component, useState, useEffect } from 'react';
import slider1 from '../img/slider1.png';
import slider2 from '../img/slider2.png';
import slider3 from '../img/slider3.png';
import slider4 from '../img/slider4.png';
import slider5 from '../img/slider5.png';
import slider10 from '../img/slider10.jpg';
import item1 from '../img/item1.jpg';
import item2 from '../img/item2.jpg';
import item3 from '../img/item3.jpg';
import item4 from '../img/item4.png';
import item5 from '../img/item5.png';
import item6 from '../img/item6.png';
import item7 from '../img/item7.jpg';
import item8 from '../img/item8.jpg';
import tikiship from '../img/tikiship.png';
import banner1 from '../img/banner1.jpg';
import banner2 from '../img/banner2.jpg';
import tab1 from '../img/tab1.png';
import tab2 from '../img/tab2.png';
import tab3 from '../img/tab3.png';
import tab4 from '../img/tab4.png';
import tab5 from '../img/tab5.png';
import tab6 from '../img/tab6.png';
import tab7 from '../img/tab7.png';
import tab8 from '../img/tab8.png';
import tab9 from '../img/tab9.png';
import card1 from '../img/card1.png';
import card2 from '../img/card2.png';
import card3 from '../img/card3.png';
import card4 from '../img/card4.png';
import cartitem1 from '../img/card-item.png';
import cartitem2 from '../img/card-item2.png';
import cartitem3 from '../img/card-item3.jpg';
import cartitem4 from '../img/card-item4.png';
import cartitem5 from '../img/card-item5.png';
import cartitem6 from '../img/card-item6.png';
import banner3 from '../img/banner3.png';
import banner4 from '../img/banner4.png';
import imgcheck from '../img/checklogo.png';
import Slider from "react-slick";
import hl1 from '../img/hl1.png';
import hl2 from '../img/hl2.jpg';
import hl3 from '../img/hl3.jpg';
import hl4 from '../img/hl4.jpg';
import hl5 from '../img/hl5.jpg';
import hl6 from '../img/hl6.jpg';
import hl7 from '../img/hl7.jpg';
import hl8 from '../img/hl8.jpg';
import hl9 from '../img/hl9.jpg';
import hl10 from '../img/hl10.jpg';
import hl11 from '../img/hl11.jpg';
import hl12 from '../img/hl12.jpg';
import hl13 from '../img/hl13.jpg';
import hl14 from '../img/hl14.jpg';
import hl15 from '../img/hl15.png';
import hl16 from '../img/hl16.jpg';
import hl17 from '../img/hl17.jpg';
import hl18 from '../img/hl18.jpg';
import hl19 from '../img/hl19.jpg';
import hl20 from '../img/hl20.jpg';

import ms1 from '../img/ms1.jpg';
import ms2 from '../img/ms2.jpg';
import icon_category from '../img/icon-category.png';

import card5 from '../img/card5.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/content.css';
import ProductTab from './product_tab';
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
    const { onClick } = props;

    return (
        <span className={'btn-control btn-control-right button-modify'}
            onClick={onClick}>
            <i className="fas fa-chevron-right"></i>
        </span >
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;

    return (
        <span className={'btn-control btn-control-left button-modify'}
            onClick={onClick}>
            <i className="fas fa-chevron-left"></i>
        </span>
    );
}

function formatDate(date) {
    if (!date) return '';

    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

function Clock() {
    const [timeString, setTimeString] = useState('');
    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            // HH:mm:ss
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000)

        return () => {
            clearInterval(clockInterval);
        }
    }, []);
    return (
        <div className="count-time">
            <span>{timeString.substring(0, 2)}</span>:
            <span>{timeString.substring(5, 3)}</span>:
            <span>{timeString.substring(6, 10)}</span>
        </div>
    );
}



export default class Main extends Component {

    render() {
        const autoplay = {
            slidesToShow: 8,
            slidesToScroll: 2,
            autoplay: true,
            prevArrow: <SamplePrevArrow />,
            nextArrow: <SampleNextArrow />,
        };
        const autoplay1 = {
            dots: true,
            slidesToShow: 5,
            slidesToScroll: 2,
            // autoplay: true,
            prevArrow: <SamplePrevArrow />,
            nextArrow: <SampleNextArrow />,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
            ]
        };
        const autoplay2 = {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            prevArrow: <SamplePrevArrow />,
            nextArrow: <SampleNextArrow />,
        };
        const autoplay3 = {
            dots: true,
            slidesToShow: 6,
            slidesToScroll: 2,
            autoplay: true,
            prevArrow: <SamplePrevArrow />,
            nextArrow: <SampleNextArrow />,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
            ]
        };
        const autoplay4 = {
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            prevArrow: <SamplePrevArrow />,
            nextArrow: <SampleNextArrow />,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
            ]
        };
        return (
            <main>
                <div className="slider-header">
                    <div className="container container1">
                        <Slider className="container autoplay" {...autoplay} >
                            <div><a href="/#">Thịt, rau củ</a></div>
                            <div><a href="/#">Bách Hoá</a></div>
                            <div><a href="/#">Nhà Cửa</a></div>
                            <div><a href="/#">Thiết Bị Số</a></div>
                            <div><a href="/#">Điện Thoại</a></div>
                            <div><a href="/#">Mẹ &amp; Bé </a></div>
                            <div><a href="/#">Làm Đẹp</a></div>
                            <div><a href="/#">Gia Dụng</a></div>
                            <div><a href="/#">Thời trang nữ</a></div>
                            <div><a href="/#">Thời trang nam</a></div>
                            <div><a href="/#">Giày nữ</a></div>
                            <div><a href="/#">Túi nữ</a></div>
                            <div><a href="/#">Túi nữ</a></div>
                            <div><a href="/#">Túi nữ</a></div>
                            <div><a href="/#">Túi nữ</a></div>
                            <div><a href="/#">Túi nữ</a></div>
                        </Slider>
                    </div>
                </div>
                <div className="slider-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 d-flex">
                                <div className="col-8-md slider-left">
                                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                        </ol>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img className="d-block img-slider" src={slider1} alt="First slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block img-slider" src={slider2} alt="Second slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block img-slider" src={slider3} alt="Third slide" />
                                            </div>

                                            <div className="carousel-item">
                                                <img className="d-block img-slider" src={slider4} alt="Third slide" />
                                            </div>

                                            <div className="carousel-item">
                                                <img className="d-block img-slider" src={slider5} alt="Third slide" />
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-4-md slider-right">
                                    <img className="d-block img1-slider" src={slider10} alt="Third slide" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="slider-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="slider-deal">
                                    <div className="deal">
                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg" alt="flash deal" />
                                        <p className="animate_pulse"><img width="21" src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg" alt="flash deal" /></p>
                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg" alt="flash deal" />
                                    </div>
                                    <Clock />

                                </div>
                                <div className="slider-item-deal">
                                    <Slider className="autoplay1" {...autoplay1}>
                                        <div className="item">
                                            <div className="item-img">
                                                <img src={item1} className="item1" alt="item" />
                                                <img src={tikiship} className="tikiship" alt="item" width="136" height="24" />
                                            </div>
                                            <div className="item-text">
                                                <span>99.000 ₫</span>
                                                <span className="sale">-34%</span>
                                            </div>
                                            <div className="item-sell">
                                                <img className="fire-icon" alt="asd" src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" />
                                                <span>Sắp bán hết</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-img">
                                                <img src={item2} className="item1" alt="item" />
                                                <img src={tikiship} className="tikiship" alt="item" width="136" height="24" />
                                            </div>
                                            <div className="item-text">
                                                <span>99.000 ₫</span>
                                                <span className="sale">-34%</span>
                                            </div>
                                            <div className="item-sell">
                                                <img className="fire-icon" alt="asd" src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" />
                                                <span>Sắp bán hết</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-img">
                                                <img src={item3} className="item1" alt="item" />
                                                <img src={tikiship} className="tikiship" alt="item" width="136" height="24" />
                                            </div>
                                            <div className="item-text">
                                                <span>99.000 ₫</span>
                                                <span className="sale">-34%</span>
                                            </div>
                                            <div className="item-sell">
                                                <img className="fire-icon" alt="asd" src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" />
                                                <span>Sắp bán hết</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-img">
                                                <img src={item4} className="item1" alt="item" />
                                                <img src={tikiship} className="tikiship" alt="item" width="136" height="24" />
                                            </div>
                                            <div className="item-text">
                                                <span>99.000 ₫</span>
                                                <span className="sale">-34%</span>
                                            </div>
                                            <div className="item-sell">
                                                <img className="fire-icon" alt="asd" src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" />
                                                <span>Sắp bán hết</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-img">
                                                <img src={item5} className="item1" alt="item" />
                                                <img src={tikiship} className="tikiship" alt="item" width="136" height="24" />
                                            </div>
                                            <div className="item-text">
                                                <span>99.000 ₫</span>
                                                <span className="sale">-34%</span>
                                            </div>
                                            <div className="item-sell">
                                                <img className="fire-icon" alt="asd" src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" />
                                                <span>Sắp bán hết</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-img">
                                                <img src={item6} className="item1" alt="item" />
                                                <img src={tikiship} className="tikiship" alt="item" width="136" height="24" />
                                            </div>
                                            <div className="item-text">
                                                <span>99.000 ₫</span>
                                                <span className="sale">-34%</span>
                                            </div>
                                            <div className="item-sell">
                                                <img className="fire-icon" alt="asd" src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" />
                                                <span>Sắp bán hết</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-img">
                                                <img src={item7} className="item1" alt="item" />
                                                <img src={tikiship} className="tikiship" alt="item" width="136" height="24" />
                                            </div>
                                            <div className="item-text">
                                                <span>99.000 ₫</span>
                                                <span className="sale">-34%</span>
                                            </div>
                                            <div className="item-sell">
                                                <img className="fire-icon" alt="asd" src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" />
                                                <span>Sắp bán hết</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-img">
                                                <img src={item8} className="item1" alt="item" />
                                                <img src={tikiship} className="tikiship" alt="item" width="136" height="24" />
                                            </div>
                                            <div className="item-text">
                                                <span>99.000 ₫</span>
                                                <span className="sale">-34%</span>
                                            </div>
                                            <div className="item-sell">
                                                <img className="fire-icon" alt="asd" src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" />
                                                <span>Sắp bán hết</span>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-6">
                                <img src={banner1} className="banner" alt="banner1" />
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <img src={banner2} className="banner" alt="banner1" />
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <img src={banner1} className="banner" alt="banner1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-container">
                    <div className="container">
                        <div className="tab-item">
                            <Link to="/category">
                                <img src={tab1} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Bí kíp săn sale</span>
                            </Link>
                            <Link to="/category">
                                <img src={tab2} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Đi chợ online</span>
                            </Link>
                            <Link to="/category">
                                <img src={tab3} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Mã giảm giá</span>
                            </Link>
                            <Link to="/category">
                                <img src={tab4} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Dịch vụ &amp; tiện ích</span>
                            </Link>

                            <Link to="/category">
                                <img src={tab5} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Gói hội viên</span>
                            </Link>
                            <Link to="/category">
                                <img src={tab6} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Giảm đến 50%</span>
                            </Link>

                            <Link to="/category">
                                <img src={tab7} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Hoàn tiền đến 15%</span>
                            </Link>

                            <Link to="/category">
                                <img src={tab8} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Ưu đãi thanh toán</span>
                            </Link>

                            <Link to="/category">
                                <img src={tab9} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Hẹn giao &amp; lắp đặt</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="slider-4">
                    <div className="img-seo">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-xs-6">
                                    <img src={card1} className="img-responsive" alt="Card" />
                                </div>
                                <div className="col-lg-3 col-xs-6">
                                    <img src={card2} className="img-responsive" alt="Card" />
                                </div>

                                <div className="col-lg-3 col-xs-6">
                                    <img src={card3} className="img-responsive" alt="Card" />
                                </div>
                                <div className="col-lg-3 col-xs-6">
                                    <img src={card4} className="img-responsive" alt="Card" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-5">
                    <div className="container">
                        <div className="check-text">
                            <div className="child-check-text">
                                <img src={imgcheck} className="img-responsive" alt="check-img" with="30" height="30" />
                                <span style={{ margin: 'auto 0px auto 8px' }}>Thương hiệu chính hãng</span>
                            </div>
                            <a href="/#">Xem Thêm</a>
                        </div>
                        <Slider className="autoplay2" {...autoplay2}>
                            <img className="card-img-top" src={banner3} alt="card" />
                            <img className="card-img-top" src={banner4} alt="card" />
                            <img className="card-img-top" src={banner3} alt="card" />
                            <img className="card-img-top" src={banner4} alt="card" />
                        </Slider>
                        <Slider className="autoplay3 border border-light rounded" {...autoplay3} >
                            <div className="card-item-cus">
                                <img className="card-img-top" src={cartitem1} alt="card" />
                                <p className="card-text text-center">Giảm ngay 50%</p>
                            </div>
                            <div className="card-item-cus">
                                <img className="card-img-top" src={cartitem2} alt="card" />
                                <p className="card-text text-center">Giảm đến 70%</p>
                            </div>
                            <div className="card-item-cus">
                                <img className="card-img-top" src={cartitem3} alt="card" />
                                <p className="card-text text-center">Mua 1 được 3</p>
                            </div>
                            <div className="card-item-cus">
                                <img className="card-img-top" src={cartitem4} alt="card" />
                                <p className="card-text text-center">Ưu đãi đến 6 triệu</p>
                            </div>
                            <div className="card-item-cus">
                                <img className="card-img-top" src={cartitem5} alt="card" />
                                <p className="card-text text-center">Quà tới 2 triệu</p>
                            </div>
                            <div className="card-item-cus">
                                <img className="card-img-top" src={cartitem6} alt="card" />
                                <p className="card-text text-center">Ưu đãi đến 9 triệu</p>
                            </div>
                            <div className="card-item-cus">
                                <img className="card-img-top" src={cartitem6} alt="card" />
                                <p className="card-text text-center">Đồng giá x9K</p>
                            </div>
                            <div className="card-item-cus">
                                <img className="card-img-top" src={cartitem6} alt="card" />
                                <p className="card-text text-center">Ưu đãi mua hàng</p>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="slider-6">
                    <div className="container">
                        <div className="header-text">Danh mục nổi bật</div>
                        <div className="hightlight-tab">
                            <a href="/#" className="item"><img src={hl1} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Thực phẩm tươi sống</span></a>
                            <a href="/#" className="item"><img src={hl2} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Rau củ quả</span></a>
                            <a href="/#" className="item"><img src={hl3} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Gìay thể thao nam</span></a>
                            <a href="/#" className="item"><img src={hl4} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Balo</span></a>
                            <a href="/#" className="item"><img src={hl5} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Điện thoại Smartphone</span></a>
                            <a href="/#" className="item"><img src={hl6} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Sách tư duy - Kỹ năng sống</span></a>
                            <a href="/#" className="item"><img src={hl7} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Bàn ghế làm việc</span></a>
                            <a href="/#" className="item"><img src={hl8} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Nồi chiên</span></a>
                            <a href="/#" className="item"><img src={hl9} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Tiểu Thuyết</span></a>
                            <a href="/#" className="item"><img src={hl10} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Bia Nội Địa</span></a>
                            <a href="/#" className="item"><img src={hl11} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Truyện ngắn - Tản văn - Tạp Văn</span></a>
                            <a href="/#" className="item"><img src={hl12} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Chảo các loại</span></a>
                            <a href="/#" className="item"><img src={hl13} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Hộp đựng thực phẩm</span></a>
                            <a href="/#" className="item"><img src={hl14} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Phụ kiện nhà bếp khác</span></a>
                            <a href="/#" className="item"><img src={hl15} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Nước ngọt</span></a>
                            <a href="/#" className="item"><img src={hl16} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Khác</span></a>
                            <a href="/#" className="item"><img src={hl17} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Cà phê</span></a>
                            <a href="/#" className="item"><img src={hl18} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Sách học Tiếng Anh</span></a>
                            <a href="/#" className="item"><img src={hl19} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Tai nghe True Wireless</span></a>
                            <a href="/#" className="item"><img src={hl20} className="hightlight-tab" alt="tab-icon" />
                                <span className="tab-text">Tủ</span></a>
                        </div>
                    </div>
                </div>


                <div className="category">
                    <div className="container">
                        <div className="row">
                            <h3 className="col-9"> <img src={icon_category} width="24px" height="24px" alt="ms-item" /> Xu hướng mua sắm </h3>
                            <p className="col-3" ><a className="more" href="/#"  >Xem Thêm</a></p>
                        </div>
                        <Slider {...autoplay4}>
                            <div>
                                <div className="box-category" >
                                    <h4>Đồ ngủ Cosplay, gợi cảm</h4>
                                    <span>Nhiều người xem</span>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ms1} className="img-responsive" alt="ms-item" />
                                        </div>

                                        <div className="col-6">
                                            <img src={ms2} className="img-responsive" alt="ms-item" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="box-category" >
                                    <h4>Đồ ngủ Cosplay, gợi cảm</h4>
                                    <span>Nhiều người xem</span>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ms1} className="img-responsive" alt="ms-item" />
                                        </div>

                                        <div className="col-6">
                                            <img src={ms2} className="img-responsive" alt="ms-item" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="box-category" >
                                    <h4>Đồ ngủ Cosplay, gợi cảm</h4>
                                    <span>Nhiều người xem</span>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ms1} className="img-responsive" alt="ms-item" />
                                        </div>

                                        <div className="col-6">
                                            <img src={ms2} className="img-responsive" alt="ms-item" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="box-category" >
                                    <h4>Đồ ngủ Cosplay, gợi cảm</h4>
                                    <span>Nhiều người xem</span>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ms1} className="img-responsive" alt="ms-item" />
                                        </div>

                                        <div className="col-6">
                                            <img src={ms2} className="img-responsive" alt="ms-item" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="box-category" >
                                    <h4>Đồ ngủ Cosplay, gợi cảm</h4>
                                    <span>Nhiều người xem</span>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ms1} className="img-responsive" alt="ms-item" />
                                        </div>

                                        <div className="col-6">
                                            <img src={ms2} className="img-responsive" alt="ms-item" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>

                    </div>
                </div>

                <div className="img-seo">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-xs-12">
                                <img src={card5} className="img-responsive" alt="Card" />
                            </div>

                            <div className="col-lg-4 col-xs-12">
                                <img src={card5} className="img-responsive" alt="Card" />
                            </div>

                            <div className="col-lg-4 col-xs-12">
                                <img src={card5} className="img-responsive" alt="Card" />
                            </div>
                        </div>
                    </div>
                </div>

                <ProductTab />

            </main >
        );
    }
}
