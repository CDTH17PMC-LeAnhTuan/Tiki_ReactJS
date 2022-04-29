import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-1">
                <div className="container footer-container">
                    <div className="f-block">
                        <h4>Hỗ trợ khách hàng</h4>
                        <p className="hotline">
                            Hotline chăm sóc khách hàng:
                            <a href="tel:1900-6035"> 1900-6035</a>
                            <span className="small-text">(1000đ/phút, 8-21h kể cả T7,CN)</span>
                        </p>
                        <a href="/#" className="small-text">Các câu hỏi thường gặp</a>
                        <a href="/#" className="small-text">Gửi yêu cầu hỗ trợ</a>
                        <a href="/#" className="small-text">Hướng dẫn đặt hàng</a>
                        <a href="/#" className="small-text">Phương thức vận chuyển</a>
                        <a href="/#" className="small-text">Chính sách đổi trả</a>
                        <a href="/#" className="small-text">Hướng dẫn trả góp</a>
                        <a href="/#" className="small-text">Chính sách hàng nhập khẩu</a>
                        <a href="/#" className="small-text">Hỗ trợ khách hàng: hotro@tiki.vn</a>
                        <a href="/#" className="small-text">Báo lỗi bảo mật: security@tiki.vn</a>
                    </div>
                    <div className="f-block">
                        <h4>Về tiki</h4>
                        <a href="/#" className="small-text">Giới thiệu Tiki</a>
                        <a href="/#" className="small-text">Tuyển dụng</a>
                        <a href="/#" className="small-text">Chính sách bảo mật thanh toán</a>
                        <a href="/#" className="small-text">Chính sách bảo mật thông tin cá nhân</a>
                        <a href="/#" className="small-text">Chính sách giải quyết khiếu nại</a>
                        <a href="/#" className="small-text">Điều khoản sử dụng</a>
                        <a href="/#" className="small-text">Giới thiệu Tiki Xu</a>
                        <a href="/#" className="small-text">Bán hàng doanh nghiệp</a>
                    </div>
                    <div className="f-block">
                        <h4>Hợp tác và liên kết</h4>
                        <a href="/#" className="small-text">Quy chế hoạt động Sàn GDTMĐT</a>
                        <a href="/#" className="small-text">Bán hàng cùng tiki</a>
                    </div>
                    <div className="f-block">
                        <h4>Phương thức thanh toán</h4>
                        <p className="pttt">
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/visa.svg" width="54" alt="" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/mastercard.svg" width="54" alt="" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/jcb.svg" width="54" alt="" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/cash.svg" width="54" alt="" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/internet-banking.svg" width="54" alt="" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/installment.svg" width="54" alt="" />
                        </p>
                        <h4>Dịch vụ giao hàng</h4>
                        <p><a href="/#"><img className="icon" src="https://salt.tikicdn.com/ts/upload/2b/1f/30/56d878ea9235fea0753f3d04e2d81de6.png" width="54" alt="" /></a></p>
                    </div>
                    <div className="f-block block1">
                        <h4>Kết nối với chúng tôi</h4>
                        <p>
                            <a href="https://www.facebook.com/tiki.vn/" className="icon" title="Facebook">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/fb.svg" width="32" alt="" />
                            </a>
                            <a href="https://www.youtube.com/user/TikiVBlog" className="icon" title="Youtube">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/youtube.svg" width="32" alt="" /></a>

                            <a href="https://www.youtube.com/user/TikiVBlog" className="icon" title="Youtube">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/fb.svg" width="32" alt="" /></a>
                        </p>
                        <h4 className="store-title">TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</h4>
                        <p className="p">
                            <a href="https://itunes.apple.com/vn/app/id958100553" className="icon" >
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png" width="134" alt="" style={{ display: 'block', paddingBottom: '15px' }} />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=vn.tiki.app.tikiandroid" className="icon" >
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png" width="134" alt="" />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-2">
                <div className="container footer2-container">
                    <div className="mobile-icon" style={{ display: 'flex', borderTop: '1px solid #dddddd' }}>
                        <div className="address" style={{ paddingBottom: '10px' }}>
                            <i className="tikicon icon-location"></i>
                            <div className="address-info">
                                <p className="address-title small-text">
                                    Địa chỉ văn phòng: 52 Út Tịch, phường 4, quận Tân Bình, thành phố Hồ Chí Minh</p>
                                <p className="address-text small-text">
                                    Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-3">
                <div className="container footer3-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px' }}>
                    <div>
                        <h5>© 2016 - Bản quyền của Công Ty Cổ Phần Ti Ki - Tiki.vn</h5>
                        <p>Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 06/01/2010</p>
                    </div>
                    <div className="f-block">
                        <a href="https://hotro.tiki.vn/hc/vi/articles/115005575826">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="36" alt="" />
                        </a>
                        <a href="http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=21201">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg" width="120" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-mobile">
                <Link to="/" className="mobile-icon">
                    <div className="mobile-nav">
                        <i className="fa fa-home"></i>
                        <span>Trang chủ</span>
                    </div>
                </Link>
                <Link to="/category/menu" className="mobile-icon">
                    <div className="mobile-nav">
                        <i className="far fa-list-alt"></i>
                        <span>Danh mục</span>
                    </div>
                </Link>
                <a href="/#" className="mobile-icon">
                    <div className="mobile-nav">
                        <i className="fas fa-fire"></i>
                        <span>Lướt</span>
                    </div>
                </a>
                <a href="/#" className="mobile-icon">
                    <div className="mobile-nav">
                        <i className="far fa-comment"></i>
                        <span>Chat</span>
                    </div>
                </a>
                <a href="/#" className="mobile-icon">
                    <div className="mobile-nav">
                        <i className="far fa-user"></i>
                        <span>Cá nhân</span>
                    </div>
                </a>
            </div>
        </footer >

    );
}

export default Footer;