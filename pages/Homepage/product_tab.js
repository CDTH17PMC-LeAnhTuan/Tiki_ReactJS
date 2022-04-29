import { React, Component } from 'react';
import imgTab from '../img/img_tab.png';
import imgTab1 from '../img/img_tab1.png';
import imgTab2 from '../img/img_tab2.png';
import imgTab3 from '../img/img_tab3.png';
import imgTab4 from '../img/img_tab4.png';
import imgTab5 from '../img/img_tab5.png';
import imgTab6 from '../img/img_tab6.png';
import freeship from '../img/tikiship.png';
import product1 from '../img/product1.jpg';
import ProductList from '../../components/ProductList';
import $ from "jquery";


$(window).scroll(function () {
    var container = $('.productTab .container').width();
    var left = ($(this).width() - container) / 2;
    var height = $('.tabLink').height();

    if ($('.productTab').length > 0) {
        if ($(this).scrollTop() > $('.productTab').offset().top) {
            $('.tabLink').css({
                'position': 'fixed',
                'top': '0px',
                'width': container,
                'left': left,
                'z-index': '9999',
                'background-color': 'white',
                'height': height,
            });
        } else {
            $('.tabLink').css({
                'position': 'inherit',
                'z-index': '9999',
                'height': 'inherit',
            });
        }
    }
})

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with className="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with className="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

const getAnimalsContent = (start, end) => {
    let content = [];
    for (var i = start; i < end; i++) {
        content.push(< div className="col-lg-2 col-6" key={i} >
            <div className="card">
                <div className="card-image">
                    <img className="card-img-top" src={product1} alt="Card cap" />
                    <img className="card-tikiship" src={freeship} width="136" height="24" alt="Card cap" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Thùng 24 Lon Nước Uống Có Gaz Pepsi Không Calo 320ml/Lon</h5>

                    <div className="rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="buyed">Đã bán 638</span>
                    </div>

                    <p className="cost"> 215.000đ  <span> -3% </span></p>
                </div>
            </div>
        </div >);
    }
    return content;
};

class Product_tab extends Component {
    render() {
        return (
            <div className="productTab" >
                <div className="container">
                    <div className="tabLink">
                        <div className="product-tab-text">Gợi ý hôm nay</div>
                        <div className="tab">
                            <button className="tablinks" onClick={(e) => openCity(e, 'danh-cho-ban')}>
                                <p>  <img src={imgTab} className="img-responsive" width="48px" height="48" alt="product-tab-item" />
                                </p>
                                Dành cho bạn
                            </button>

                            <button className="tablinks" onClick={(e) => openCity(e, 'deal-sieu-hot')}>
                                <p>  <img src={imgTab1} className="img-responsive" width="48px" height="48" alt="product-tab-item" />
                                </p>
                                Deal Siêu hot
                            </button>

                            <button className="tablinks" onClick={(e) => openCity(e, 're-vo-doi')}>
                                <p>  <img src={imgTab2} className="img-responsive" width="48px" height="48" alt="product-tab-item" />
                                </p>
                                Rẻ Vô Đối
                            </button>

                            <button className="tablinks" onClick={(e) => openCity(e, 'di-cho-sieu-sale')}>
                                <p>  <img src={imgTab3} className="img-responsive" width="48px" height="48" alt="product-tab-item" />
                                </p>
                                Đi Chợ Siêu Sale
                            </button>

                            <button className="tablinks" onClick={(e) => openCity(e, 'hang-moi')}>
                                <p>  <img src={imgTab4} className="img-responsive" width="48px" height="48" alt="product-tab-item" />
                                </p>
                                Hàng Mới
                            </button>

                            <button className="tablinks" onClick={(e) => openCity(e, 'khong-gioi-han')}>
                                <p>  <img src={imgTab6} className="img-responsive" width="48px" height="48" alt="product-tab-item" />
                                </p>
                                Không Giới Hạn
                            </button>

                            <button className="tablinks" onClick={(e) => openCity(e, 'thoi-trang-nu')}>
                                <p>  <img src={imgTab5} className="img-responsive" width="48px" height="48" alt="product-tab-item" />
                                </p>
                                Thời trang nữ
                            </button>
                        </div>

                    </div>

                    <div className="all_product">
                        <div id="danh-cho-ban" className="tabcontent tab_active">
                            <ProductList />
                        </div>

                        <div id="deal-sieu-hot" className="tabcontent">
                            <div className="row">
                                {getAnimalsContent(0, 4)}
                            </div>
                        </div>

                        <div id="re-vo-doi" className="tabcontent ">
                            <div className="row">
                                {getAnimalsContent(0, 2)}
                            </div>
                        </div>


                        <div id="di-cho-sieu-sale" className="tabcontent ">
                            <div className="row">
                                {getAnimalsContent(0, 9)}
                            </div>
                        </div>

                        <div id="hang-moi" className="tabcontent ">
                            <div className="row">
                                {getAnimalsContent(0, 6)}
                            </div>
                        </div>

                        <div id="khong-gioi-han" className="tabcontent ">
                            <div className="row">
                                {getAnimalsContent(0, 5)}
                            </div>
                        </div>

                        <div id="thoi-trang-nu" className="tabcontent">
                            <div className="row">
                                {getAnimalsContent(0, 3)}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Product_tab;
