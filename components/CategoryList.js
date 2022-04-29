import React from 'react';
import PropTypes from 'prop-types';
import freeship from '../pages/img/tikiship.png';
import product1 from '../pages/img/product1.jpg';


CategoryList.propTypes = {
    posts: PropTypes.array,
};

CategoryList.defaultProps = {
    posts: [],
}

function CategoryList(props) {
    const { posts } = props;
    return (
        posts.map(post => (
            <div className="col-lg-3 col-6" key={post.id}>
                <div className="card">
                    <div className="card-image">
                        <img className="card-img-top" src={product1} alt="Card cap" />
                        <img className="card-tikiship" src={freeship} width="136" height="24" alt="Card cap" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <div className="rating">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="buyed">{post.id}</span>
                        </div>
                        <p className="cost"> 215.000đ  <span> -3% </span></p>
                        <img width="124" height="18" src="https://salt.tikicdn.com/ts/upload/51/ac/cc/528e80fe3f464f910174e2fdf8887b6f.png" alt="tiki" />
                        <div className="item">
                            <img width="18" height="16" src="https://salt.tikicdn.com/ts/upload/ba/4e/6e/26e9f2487e9f49b7dcf4043960e687dd.png" alt="tiki" />
                            <span>Trả góp</span>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default CategoryList;