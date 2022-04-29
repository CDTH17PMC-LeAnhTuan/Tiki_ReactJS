import React, { useState, useEffect } from 'react';
import carousel1 from '../pages/img/carousel1.png';
import carousel2 from '../pages/img/carousel2.png';
import carousel3 from '../pages/img/carousel3.png';
import Slider from 'react-slick';
import '../pages/css/category.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import queryString from 'query-string';
import CategoryList from './CategoryList';
import PaginationUi from '@mui/material/Pagination';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        '& ul li button': {
            '&:hover': {
                background: 'rgb(193, 231, 255)',
            }
        }
    },
}));

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

const autoplay = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
};


const Category = () => {
    const classes = useStyles();
    const [item, setItem] = useState([]);

    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 8,
        _totalRows: 1
    });

    const [filters, setFilters] = useState({
        _limit: 8,
        _page: 1,
    })


    const handlePageChange = (_, newPage) => {
        setFilters({
            ...filters,
            _page: newPage,
        })
    }
    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramString = queryString.stringify(filters);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();

                const { data, pagination } = responseJSON;
                setItem(data);
                setPagination(pagination);
            } catch (error) {
                console.log("Err", error);
            }
        }
        fetchPostList();
    }, [filters]);



    return (
        <div className="container">
            <div className="container-category">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="container-box">
                            <div className="box">
                                <h4 className="text">Danh mục sản phẩm</h4>
                                <div className="list">
                                    <a href="/#" className="">Điện thoại smartphone</a>
                                    <a href="/#" className="">Điện thoại bàn</a>
                                    <a href="/#" className="">Điện thoại phổ thông</a>
                                    <a href="/#" className="">Máy đọc sách</a>
                                    <a href="/#" className="">Máy tính bảng</a>
                                </div>
                            </div>
                            <div className="box">
                                <h4 className="text">Địa chỉ nhận hàng</h4>
                                <div className="address">Bạn muốn giao hàng tới đâu?</div>
                                <div className="address-change">NHẬP ĐỊA CHỈ</div>
                            </div>
                            <div className="box">
                                <h4 className="text">Dịch vụ</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check1" />
                                            <label className="custom-control-label" htmlFor="check1"> <img src="https://salt.tikicdn.com/ts/upload/f9/ad/0e/a8a97f5ac7661d637942b42796893662.png" alt="tiki" /> Giao siêu tốc 2H</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check2" />
                                            <label className="custom-control-label" htmlFor="check2"> <img src="https://salt.tikicdn.com/ts/upload/af/84/fc/2037c3b93a81767aed21358ebf3f8b8e.png" alt="tiki" /> Không giới hạn</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check3" />
                                            <label className="custom-control-label" htmlFor="check3"> Rẻ hơn hoàn tiền</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">
                                <h4 className="text">Nơi bán</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check4" />
                                            <label className="custom-control-label" htmlFor="check4">Hồ Chí Minh</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check5" />
                                            <label className="custom-control-label" htmlFor="check5">Hà Nội</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check6" />
                                            <label className="custom-control-label" htmlFor="check6">Bến Tre</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check7" />
                                            <label className="custom-control-label" htmlFor="check7">Nghệ An</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check8" />
                                            <label className="custom-control-label" htmlFor="check8">Đà Nẵng</label>
                                        </div>
                                        <a href="/#">Xem thêm</a><i className="fas fa-chevron-down"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">
                                <h4 className="text">Đánh giá</h4>
                                <div className="list">
                                    <a href="/#" className="rating">
                                        <p className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </p>
                                        <span>từ 5 sao</span>
                                    </a>
                                    <a href="/#" className="rating">
                                        <p className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star" style={{ color: '#dddddd' }}></i>
                                        </p>
                                        <span>từ 4 sao</span>
                                    </a>
                                    <a href="/#" className="rating">
                                        <p className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star" style={{ color: '#dddddd' }}></i>
                                            <i className="fas fa-star" style={{ color: '#dddddd' }}></i>
                                        </p>
                                        <span>từ 3 sao</span>
                                    </a>
                                </div>
                            </div>
                            <div className="box">
                                <h4 className="text"> giá</h4>
                                <div className="item">
                                    <span>Dưới 500.000</span>
                                </div>
                                <div className="item">
                                    <span>Từ 500.000 đến 4.500.000</span>
                                </div>
                                <div className="item">
                                    <span>Từ 4.500.000 đến 18.000.000</span>
                                </div>
                                <div className="item">
                                    <span>Trên 18.000.000</span>
                                </div>
                                <div className="price-small-text">Chọn khoảng giá</div>
                                <div className="input-group">
                                    <input pattern="[0-9]*" placeholder="Giá từ" />
                                    <span >-</span>
                                    <input pattern="[0-9]*" placeholder="Giá đến" />
                                </div>
                                <button >Áp dụng</button>
                            </div>
                            <div className="box">
                                <h4 className="text">ROM</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check9" />
                                            <label className="custom-control-label" htmlFor="check1">128GB</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check10" />
                                            <label className="custom-control-label" htmlFor="check10">64GB</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check11" />
                                            <label className="custom-control-label" htmlFor="check11">256GB</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check12" />
                                            <label className="custom-control-label" htmlFor="check12">16GB</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check13" />
                                            <label className="custom-control-label" htmlFor="check13">32GB</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">
                                <h4 className="text">Thương hiệu</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check14" />
                                            <label className="custom-control-label" htmlFor="check14">Samsung</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check15" />
                                            <label className="custom-control-label" htmlFor="check15">Panasonic</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check16" />
                                            <label className="custom-control-label" htmlFor="check16">Apple</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check17" />
                                            <label className="custom-control-label" htmlFor="check17">Xiaomi</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check18" />
                                            <label className="custom-control-label" htmlFor="check18">OPPO</label>
                                        </div>
                                        <a href="/#">Xem thêm</a><i className="fas fa-chevron-down"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">
                                <h4 className="text">Camera sau</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check19" />
                                            <label className="custom-control-label" htmlFor="check19">Từ 11MP đến 13MP</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check20" />
                                            <label className="custom-control-label" htmlFor="check20">Trên 16MP</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check21" />
                                            <label className="custom-control-label" htmlFor="check21">Dưới 8MP</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check22" />
                                            <label className="custom-control-label" htmlFor="check22">Từ 14MP đến 16MP</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check23" />
                                            <label className="custom-control-label" htmlFor="check23">Từ 8MP đến 10MP</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">
                                <h4 className="text">Camera trước</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check24" />
                                            <label className="custom-control-label" htmlFor="check24">Từ 8MP đến 12MP</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check25" />
                                            <label className="custom-control-label" htmlFor="check25">Trên 12MP</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check26" />
                                            <label className="custom-control-label" htmlFor="check26">Dưới 8MP</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check27" />
                                            <label className="custom-control-label" htmlFor="check27">Từ 5MP đến 8MP</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">
                                <h4 className="text">Màu sắc</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check28" />
                                            <label className="custom-control-label" htmlFor="check28">Đen</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check29" />
                                            <label className="custom-control-label" htmlFor="check29">Xanh</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check30" />
                                            <label className="custom-control-label" htmlFor="check30">Xanh dương</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check31" />
                                            <label className="custom-control-label" htmlFor="check31">Bạc</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check32" />
                                            <label className="custom-control-label" htmlFor="check32">Xám</label>
                                        </div>
                                        <a href="/#">Xem thêm</a><i className="fas fa-chevron-down"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">
                                <h4 className="text">Nhà cung cấp</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check33" />
                                            <label className="custom-control-label" htmlFor="check33">Thế Giới Di Động Official</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check34" />
                                            <label className="custom-control-label" htmlFor="check34">Tiki Trading</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check35" />
                                            <label className="custom-control-label" htmlFor="check35">Long Hưng Mobile</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check36" />
                                            <label className="custom-control-label" htmlFor="check36">Hồng Hạnh Mobile</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check37" />
                                            <label className="custom-control-label" htmlFor="check37">THẮNG THAO MOBILE</label>
                                        </div>
                                        <a href="/#">Xem thêm</a><i className="fas fa-chevron-down"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Box className="col-lg-9" >
                        <div className="container-fluid container-item">
                            <div className="title">
                                <h1>Điện Thoại - Máy Tính Bảng </h1>
                            </div>
                            <Slider className="carousel" {...autoplay}>
                                <img className="card-img-top" src={carousel1} alt="card" />
                                <img className="card-img-top" src={carousel2} alt="card" />
                                <img className="card-img-top" src={carousel3} alt="card" />
                                <img className="card-img-top" src={carousel3} alt="card" />
                            </Slider>
                            <div className="sort_link">
                                <a href="/#" className="active link">Phổ biến</a>
                                <a href="/#" className="link">Bán chạy</a>
                                <a href="/#" className="link">Hàng mới</a>
                                <a href="/#" className="link">Giá Thấp</a>
                                <a href="/#" className="link">Giá Cao</a>
                            </div>
                            <div className="filter-items">
                                <p className="item">
                                    <img src="https://salt.tikicdn.com/ts/upload/f9/ad/0e/a8a97f5ac7661d637942b42796893662.png" height="24" width="56" alt="tiki" />
                                </p>
                                <p className="item">
                                    <img src="https://salt.tikicdn.com/ts/upload/af/84/fc/2037c3b93a81767aed21358ebf3f8b8e.png" height="24" width="76" alt="tiki" />
                                </p>
                            </div>
                            <div className="row card-item">
                                <CategoryList posts={item} />
                            </div>
                        </div>
                        <PaginationUi page={pagination._page} color="primary" className={classes.pagination} count={Math.ceil(pagination._totalRows / pagination._limit)} onChange={handlePageChange} hidePrevButton hideNextButton />
                    </Box>
                </div>
            </div>
        </div >
    );
}

export default Category;