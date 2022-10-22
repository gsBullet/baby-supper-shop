import React from 'react'


function Home() {
    return (
        <>
            <div id="top_home">
                        {/* -------------------slider----------- */}
                        <section id="ishislider" className="ishislider-container owl-carousel">
                            <div className="item">
                                <a href="#">
                                    <img src="./assets/images/slider/slide-1.png" alt="Slide-1" className="img-responsive" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <img src="./assets/images/slider/slide-2.png" alt="Slide-2" className="img-responsive" />
                                </a>
                            </div>
                        </section>
                        {/* -------------------category----------- */}
                        <section id="ishicategory" className="ishicategoryblock">
                            <h3 className="home-title"><span className="title-icon"><span /></span>Shop By Category</h3>
                            <div className="ishicategoryblock-carousel owl-carousel">
                                <div className="image-container">
                                    <div className="item">
                                        <a href="#">
                                            <img src="./assets/images/category/1.png" alt="category-1" className="img-responsive" />
                                        </a>
                                        <div className="text-container">
                                            Toys
                                        </div>
                                    </div>
                                </div>
                                <div className="image-container">
                                    <div className="item">
                                        <a href="#">
                                            <img src="./assets/images/category/2.png" alt="category-2" className="img-responsive" />
                                        </a>
                                        <div className="text-container">
                                            Girls
                                        </div>
                                    </div>
                                </div>
                                <div className="image-container">
                                    <div className="item">
                                        <a href="#">
                                            <img src="./assets/images/category/3.png" alt="category-3" className="img-responsive" />
                                        </a>
                                        <div className="text-container">
                                            Kids
                                        </div>
                                    </div>
                                </div>
                                <div className="image-container">
                                    <div className="item">
                                        <a href="#">
                                            <img src="./assets/images/category/4.png" alt="category-4" className="img-responsive" />
                                        </a>
                                        <div className="text-container">
                                            Boys
                                        </div>
                                    </div>
                                </div>
                                <div className="image-container">
                                    <div className="item">
                                        <a href="#">
                                            <img src="./assets/images/category/5.png" alt="category-5" className="img-responsive" />
                                        </a>
                                        <div className="text-container">
                                            Shoes
                                        </div>
                                    </div>
                                </div>
                                <div className="image-container">
                                    <div className="item">
                                        <a href="#">
                                            <img src="./assets/images/category/6.png" alt="category-6" className="img-responsive" />
                                        </a>
                                        <div className="text-container">
                                            Accessories
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* -------------------fourbanner---------- */}
                        <section id="ishifourbanner" className="ishifourbannerblock">
                            <div className="container">
                                <div className="row">
                                    <div className="bannerleft col-md-4 col-sm-12">
                                        <div className="bannerblock">
                                            <a href="#" className="ishi-customhover-fadeinrotate3D">
                                                <img src="assets/images/banner/1.png" alt="banner" className="img-responsive" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bannercenter col-md-4 col-sm-12">
                                        <div className="bannerblock">
                                            <a href="#" className="ishi-customhover-fadeinrotate3D ">
                                                <img src="assets/images/banner/2.png" alt="banner" className="img-responsive" />
                                            </a>
                                        </div>
                                        <div className="bannerblock">
                                            <a href="#" className="ishi-customhover-fadeinrotate3D ">
                                                <img src="assets/images/banner/3.png" alt="banner" className="img-responsive" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bannerright col-md-4 col-sm-12">
                                        <div className="bannerblock">
                                            <a href="#" className="ishi-customhover-fadeinrotate3D ">
                                                <img src="assets/images/banner/4.png" alt="banner" className="img-responsive" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* ------------------product block---------- */}
                        <section id="ishiproductsblock" className="ishiproductsblock container">
                            <h3 className="home-title"><span className="title-icon"><span /></span>Trending Products</h3>
                            <ul id="ishiproductstab" className="nav nav-tabs clearfix">
                                <li className="nav-item first_item active">
                                    <a className="nav-link" href="#featured-products-block" data-toggle="tab">Featured</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="#new-products-block" data-toggle="tab">Latest</a>
                                </li>
                                <li className="nav-item last_item">
                                    <a className="nav-link " href="#bestseller-products-block" data-toggle="tab">Best sellers</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="featured-products-block" className="tab-pane active">
                                    <div className="block_content row">
                                        <div id="ishi-featured-products" className="owl-carousel">
                                            <div className="product-thumb">
                                                <div className="item">
                                                    <div className="product-desc">
                                                        <div className="product-title"><a href="#">Aroma Mocha</a></div>
                                                        <div className="product-comments">
                                                            <div className="star_content">
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image">
                                                        <a href="#" className="thumbnail product-thumbnail">
                                                            <img src="assets/images/product/1.jpg" alt="product-img" />
                                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/2.jpg" />
                                                        </a>
                                                        <span className="outstock-overlay">SOLD OUT</span>
                                                        <div className="product-flags">
                                                            <div className="sale">Sale</div>
                                                        </div>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="description">
                                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                        <p className="price">
                                                            <span className="regular price-old">$55.00</span>
                                                            <span className="price-discount">9%</span>
                                                            <span className="price-sale">$50.00 </span>
                                                        </p>
                                                        <div className="btn-cart">
                                                            <a data-button-action="add-to-cart" className="button sold-out">
                                                                <i className="fa fa-shopping-cart" />
                                                                <span className="lblcart">Sold Out</span>
                                                            </a>
                                                        </div>
                                                        <div className="button-group">
                                                            <div className="btn-quickview">
                                                                <a className="quickbox" href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                    <span className="lblcart">Quick View</span>
                                                                </a>
                                                            </div>
                                                            <div className="btn-wishlist">
                                                                <a href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-thumb">
                                                <div className="item">
                                                    <div className="product-desc">
                                                        <div className="product-title"><a href="#">autem euaiure</a></div>
                                                        <div className="product-comments">
                                                            <div className="star_content">
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image">
                                                        <a href="#" className="thumbnail product-thumbnail">
                                                            <img src="assets/images/product/3.jpg" alt="product-img" />
                                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/4.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="description">
                                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                        <p className="price">
                                                            <span className="price-sale">$45.00 </span>
                                                        </p>
                                                        <div className="btn-cart">
                                                            <a data-button-action="add-to-cart" className="button">
                                                                <i className="fa fa-shopping-cart" />
                                                                <span className="lblcart">Add to cart</span>
                                                            </a>
                                                        </div>
                                                        <div className="button-group">
                                                            <div className="btn-quickview">
                                                                <a className="quickbox" href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                    <span className="lblcart">Quick View</span>
                                                                </a>
                                                            </div>
                                                            <div className="btn-wishlist">
                                                                <a href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-thumb">
                                                <div className="item">
                                                    <div className="product-desc">
                                                        <div className="product-title"><a href="#">Authletic Stud</a></div>
                                                        <div className="product-comments">
                                                            <div className="star_content">
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image">
                                                        <a href="#" className="thumbnail product-thumbnail">
                                                            <img src="assets/images/product/14.jpg" alt="product-img" />
                                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/15.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="description">
                                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                        <p className="price">
                                                            <span className="price-sale">$80.00 </span>
                                                        </p>
                                                        <div className="btn-cart">
                                                            <a data-button-action="add-to-cart" className="button">
                                                                <i className="fa fa-shopping-cart" />
                                                                <span className="lblcart">Add to cart</span>
                                                            </a>
                                                        </div>
                                                        <div className="button-group">
                                                            <div className="btn-quickview">
                                                                <a className="quickbox" href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                    <span className="lblcart">Quick View</span>
                                                                </a>
                                                            </div>
                                                            <div className="btn-wishlist">
                                                                <a href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-thumb">
                                                <div className="item">
                                                    <div className="product-desc">
                                                        <div className="product-title"><a href="#">Black Tour Bag</a></div>
                                                        <div className="product-comments">
                                                            <div className="star_content">
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image">
                                                        <a href="#" className="thumbnail product-thumbnail">
                                                            <img src="assets/images/product/5.jpg" alt="product-img" />
                                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/6.jpg" />
                                                        </a>
                                                        <div className="product-flags">
                                                            <div className="sale">Sale</div>
                                                        </div>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="description">
                                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                        <p className="price">
                                                            <span className="regular price-old">$42.00</span>
                                                            <span className="price-discount">4%</span>
                                                            <span className="price-sale">$40.00 </span>
                                                        </p>
                                                        <div className="btn-cart">
                                                            <a data-button-action="add-to-cart" className="button">
                                                                <i className="fa fa-shopping-cart" />
                                                                <span className="lblcart">Add to cart</span>
                                                            </a>
                                                        </div>
                                                        <div className="button-group">
                                                            <div className="btn-quickview">
                                                                <a className="quickbox" href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                    <span className="lblcart">Quick View</span>
                                                                </a>
                                                            </div>
                                                            <div className="btn-wishlist">
                                                                <a href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-thumb">
                                                <div className="item">
                                                    <div className="product-desc">
                                                        <div className="product-title"><a href="#">Brown cushion</a></div>
                                                        <div className="product-comments">
                                                            <div className="star_content">
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image">
                                                        <a href="#" className="thumbnail product-thumbnail">
                                                            <img src="assets/images/product/7.jpg" alt="product-img" />
                                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/8.jpg" />
                                                        </a>
                                                        <div className="product-flags">
                                                            <div className="sale">Sale</div>
                                                        </div>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="description">
                                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                        <p className="price">
                                                            <span className="regular price-old">$25.00</span>
                                                            <span className="price-discount">20%</span>
                                                            <span className="price-sale">$20.00 </span>
                                                        </p>
                                                        <div className="btn-cart">
                                                            <a data-button-action="add-to-cart" className="button">
                                                                <i className="fa fa-shopping-cart" />
                                                                <span className="lblcart">Add to cart</span>
                                                            </a>
                                                        </div>
                                                        <div className="button-group">
                                                            <div className="btn-quickview">
                                                                <a className="quickbox" href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                    <span className="lblcart">Quick View</span>
                                                                </a>
                                                            </div>
                                                            <div className="btn-wishlist">
                                                                <a href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="new-products-block" className="tab-pane">
                                    <div className="block_content row">
                                        <div id="ishi-new-products" className="owl-carousel">
                                            <div className="product-thumb">
                                                <div className="item">
                                                    <div className="product-desc">
                                                        <div className="product-title"><a href="#">Authletic Stud</a></div>
                                                        <div className="product-comments">
                                                            <div className="star_content">
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image">
                                                        <a href="#" className="thumbnail product-thumbnail">
                                                            <img src="assets/images/product/9.jpg" alt="product-img" />
                                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/10.jpg" />
                                                        </a>
                                                        <span className="outstock-overlay">SOLD OUT</span>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="description">
                                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                        <p className="price">
                                                            <span className="price-sale">$80.00</span>
                                                        </p>
                                                        <div className="btn-cart">
                                                            <a data-button-action="add-to-cart" className="button sold-out">
                                                                <i className="fa fa-shopping-cart" />
                                                                <span className="lblcart">Sold Out</span>
                                                            </a>
                                                        </div>
                                                        <div className="button-group">
                                                            <div className="btn-quickview">
                                                                <a className="quickbox" href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                    <span className="lblcart">Quick View</span>
                                                                </a>
                                                            </div>
                                                            <div className="btn-wishlist">
                                                                <a href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-thumb">
                                                <div className="item">
                                                    <div className="product-desc">
                                                        <div className="product-title"><a href="#">Skillofun  Junior</a></div>
                                                        <div className="product-comments">
                                                            <div className="star_content">
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image">
                                                        <a href="#" className="thumbnail product-thumbnail">
                                                            <img src="assets/images/product/11.jpg" alt="product-img" />
                                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/12.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="description">
                                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                        <p className="price">
                                                            <span className="price-sale">$64.00 </span>
                                                        </p>
                                                        <div className="btn-cart">
                                                            <a data-button-action="add-to-cart" className="button">
                                                                <i className="fa fa-shopping-cart" />
                                                                <span className="lblcart">Add to cart</span>
                                                            </a>
                                                        </div>
                                                        <div className="button-group">
                                                            <div className="btn-quickview">
                                                                <a className="quickbox" href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                    <span className="lblcart">Quick View</span>
                                                                </a>
                                                            </div>
                                                            <div className="btn-wishlist">
                                                                <a href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-thumb">
                                                <div className="item">
                                                    <div className="product-desc">
                                                        <div className="product-title"><a href="#">Crinkle Leaf</a></div>
                                                        <div className="product-comments">
                                                            <div className="star_content">
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image">
                                                        <a href="#" className="thumbnail product-thumbnail">
                                                            <img src="assets/images/product/16.jpg" alt="product-img" />
                                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/17.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="description">
                                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                        <p className="price">
                                                            <span className="price-sale">$60.00 </span>
                                                        </p>
                                                        <div className="btn-cart">
                                                            <a data-button-action="add-to-cart" className="button sold-out">
                                                                <i className="fa fa-shopping-cart" />
                                                                <span className="lblcart">Sold Out</span>
                                                            </a>
                                                        </div>
                                                        <div className="button-group">
                                                            <div className="btn-quickview">
                                                                <a className="quickbox" href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                    <span className="lblcart">Quick View</span>
                                                                </a>
                                                            </div>
                                                            <div className="btn-wishlist">
                                                                <a href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-thumb">
                                                <div className="item">
                                                    <div className="product-desc">
                                                        <div className="product-title"><a href="#">corporis suscipit</a></div>
                                                        <div className="product-comments">
                                                            <div className="star_content">
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image">
                                                        <a href="#" className="thumbnail product-thumbnail">
                                                            <img src="assets/images/product/18.jpg" alt="product-img" />
                                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/19.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="description">
                                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                        <p className="price">
                                                            <span className="price-sale">$50.00 </span>
                                                        </p>
                                                        <div className="btn-cart">
                                                            <a data-button-action="add-to-cart" className="button">
                                                                <i className="fa fa-shopping-cart" />
                                                                <span className="lblcart">Add to cart</span>
                                                            </a>
                                                        </div>
                                                        <div className="button-group">
                                                            <div className="btn-quickview">
                                                                <a className="quickbox" href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                    <span className="lblcart">Quick View</span>
                                                                </a>
                                                            </div>
                                                            <div className="btn-wishlist">
                                                                <a href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-thumb">
                                                <div className="item">
                                                    <div className="product-desc">
                                                        <div className="product-title"><a href="#">Aroma Mocha</a></div>
                                                        <div className="product-comments">
                                                            <div className="star_content">
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image">
                                                        <a href="#" className="thumbnail product-thumbnail">
                                                            <img src="assets/images/product/20.jpg" alt="product-img" />
                                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/1.jpg" />
                                                        </a>
                                                        <div className="product-flags">
                                                            <div className="sale">Sale</div>
                                                        </div>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="description">
                                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                        <p className="price">
                                                            <span className="regular price-old">$55.00</span>
                                                            <span className="price-discount">9%</span>
                                                            <span className="price-sale">$50.00 </span>
                                                        </p>
                                                        <div className="btn-cart">
                                                            <a data-button-action="add-to-cart" className="button">
                                                                <i className="fa fa-shopping-cart" />
                                                                <span className="lblcart">Add to cart</span>
                                                            </a>
                                                        </div>
                                                        <div className="button-group">
                                                            <div className="btn-quickview">
                                                                <a className="quickbox" href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                    <span className="lblcart">Quick View</span>
                                                                </a>
                                                            </div>
                                                            <div className="btn-wishlist">
                                                                <a href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="bestseller-products-block" className="tab-pane">
                                    <div className="block_content row">
                                        <div id="ishi-bestseller-products" className="owl-carousel">
                                            <div className="product-thumb">
                                                <div className="item">
                                                    <div className="product-desc">
                                                        <div className="product-title"><a href="#">Shake Spin Lion</a></div>
                                                        <div className="product-comments">
                                                            <div className="star_content">
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image">
                                                        <a href="#" className="thumbnail product-thumbnail">
                                                            <img src="assets/images/product/1.jpg" alt="product-img" />
                                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/2.jpg" />
                                                        </a>
                                                        <div className="product-flags">
                                                            <div className="sale">Sale</div>
                                                        </div>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="description">
                                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                        <p className="price">
                                                            <span className="regular price-old">$55.00</span>
                                                            <span className="price-discount">9%</span>
                                                            <span className="price-sale">$50.00 </span>
                                                        </p>
                                                        <div className="btn-cart">
                                                            <a data-button-action="add-to-cart" className="button">
                                                                <i className="fa fa-shopping-cart" />
                                                                <span className="lblcart">Add to cart</span>
                                                            </a>
                                                        </div>
                                                        <div className="button-group">
                                                            <div className="btn-quickview">
                                                                <a className="quickbox" href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                    <span className="lblcart">Quick View</span>
                                                                </a>
                                                            </div>
                                                            <div className="btn-wishlist">
                                                                <a href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-thumb">
                                                <div className="item">
                                                    <div className="product-desc">
                                                        <div className="product-title"><a href="#">Sensory Sweet</a></div>
                                                        <div className="product-comments">
                                                            <div className="star_content">
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image">
                                                        <a href="#" className="thumbnail product-thumbnail">
                                                            <img src="assets/images/product/8.jpg" alt="product-img" />
                                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/9.jpg" />
                                                        </a>
                                                        <div className="product-flags">
                                                            <div className="sale">Sale</div>
                                                        </div>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="description">
                                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                        <p className="price">
                                                            <span className="regular price-old">$30.00</span>
                                                            <span className="price-discount">16%</span>
                                                            <span className="price-sale">$25.00 </span>
                                                        </p>
                                                        <div className="btn-cart">
                                                            <a data-button-action="add-to-cart" className="button">
                                                                <i className="fa fa-shopping-cart" />
                                                                <span className="lblcart">Add to cart</span>
                                                            </a>
                                                        </div>
                                                        <div className="button-group">
                                                            <div className="btn-quickview">
                                                                <a className="quickbox" href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                    <span className="lblcart">Quick View</span>
                                                                </a>
                                                            </div>
                                                            <div className="btn-wishlist">
                                                                <a href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-thumb">
                                                <div className="item">
                                                    <div className="product-desc">
                                                        <div className="product-title"><a href="#">Link 'n Go  Pack</a></div>
                                                        <div className="product-comments">
                                                            <div className="star_content">
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image">
                                                        <a href="#" className="thumbnail product-thumbnail">
                                                            <img src="assets/images/product/14.jpg" alt="product-img" />
                                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/15.jpg" />
                                                        </a>
                                                        <div className="product-flags">
                                                            <div className="sale">Sale</div>
                                                        </div>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="description">
                                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                        <p className="price">
                                                            <span className="regular price-old">$20.00</span>
                                                            <span className="price-discount">25%</span>
                                                            <span className="price-sale">$15.00 </span>
                                                        </p>
                                                        <div className="btn-cart">
                                                            <a data-button-action="add-to-cart" className="button sold-out">
                                                                <i className="fa fa-shopping-cart" />
                                                                <span className="lblcart">Sold Out</span>
                                                            </a>
                                                        </div>
                                                        <div className="button-group">
                                                            <div className="btn-quickview">
                                                                <a className="quickbox" href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                    <span className="lblcart">Quick View</span>
                                                                </a>
                                                            </div>
                                                            <div className="btn-wishlist">
                                                                <a href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-thumb">
                                                <div className="item">
                                                    <div className="product-desc">
                                                        <div className="product-title"><a href="#">Critter Teddy</a></div>
                                                        <div className="product-comments">
                                                            <div className="star_content">
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                                <div className="star star_on" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image">
                                                        <a href="#" className="thumbnail product-thumbnail">
                                                            <img src="assets/images/product/5.jpg" alt="product-img" />
                                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/6.jpg" />
                                                        </a>
                                                        <div className="product-flags">
                                                            <div className="sale">Sale</div>
                                                        </div>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="description">
                                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                        <p className="price">
                                                            <span className="regular price-old">$35.00</span>
                                                            <span className="price-discount">14%</span>
                                                            <span className="price-sale">$30.00 </span>
                                                        </p>
                                                        <div className="btn-cart">
                                                            <a data-button-action="add-to-cart" className="button">
                                                                <i className="fa fa-shopping-cart" />
                                                                <span className="lblcart">Add to cart</span>
                                                            </a>
                                                        </div>
                                                        <div className="button-group">
                                                            <div className="btn-quickview">
                                                                <a className="quickbox" href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                    <span className="lblcart">Quick View</span>
                                                                </a>
                                                            </div>
                                                            <div className="btn-wishlist">
                                                                <a href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                    </svg>
                                                                    <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* ------------------gallery block---------- */}
                        <section id="ishigallery" className="ishibannerblock ishigalleryblock">
                            <h3 className="home-title"><span className="title-icon"><span /></span>Kid’s Gallery</h3>
                            <div className="bannerblock col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <div className="image-container">
                                    <a href="#" className="ishi-customhover-fadeoutcenter ">
                                        <img src="assets/images/gallery/1.jpg" alt="banner-img" className="img-responsive" />
                                    </a>
                                </div>
                            </div>
                            <div className="bannerblock col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <div className="image-container">
                                    <a href="#" className="ishi-customhover-fadeoutcenter ">
                                        <img src="assets/images/gallery/2.jpg" alt="banner-img" className="img-responsive" />
                                    </a>
                                </div>
                            </div>
                            <div className="bannerblock col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <div className="image-container">
                                    <a href="#" className="ishi-customhover-fadeoutcenter ">
                                        <img src="assets/images/gallery/3.jpg" alt="banner-img" className="img-responsive" />
                                    </a>
                                </div>
                            </div>
                            <div className="bannerblock col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <div className="image-container">
                                    <a href="#" className="ishi-customhover-fadeoutcenter ">
                                        <img src="assets/images/gallery/4.jpg" alt="banner-img" className="img-responsive" />
                                    </a>
                                </div>
                            </div>
                            <div className="bannerblock col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <div className="image-container">
                                    <a href="#" className="ishi-customhover-fadeoutcenter ">
                                        <img src="assets/images/gallery/5.jpg" alt="banner-img" className="img-responsive" />
                                    </a>
                                </div>
                            </div>
                            <div className="bannerblock col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <div className="image-container">
                                    <a href="#" className="ishi-customhover-fadeoutcenter ">
                                        <img src="assets/images/gallery/6.jpg" alt="banner-img" className="img-responsive" />
                                    </a>
                                </div>
                            </div>
                            <div className="bannerblock col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <div className="image-container">
                                    <a href="#" className="ishi-customhover-fadeoutcenter ">
                                        <img src="assets/images/gallery/7.jpg" alt="banner-img" className="img-responsive" />
                                    </a>
                                </div>
                            </div>
                            <div className="bannerblock col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <div className="image-container">
                                    <a href="#" className="ishi-customhover-fadeoutcenter ">
                                        <img src="assets/images/gallery/8.jpg" alt="banner-img" className="img-responsive" />
                                    </a>
                                </div>
                            </div>
                        </section>
                        {/* -------------------manufacture---------- */}
                        <section id="ishimanufacturerblock" className="clearfix container">
                            <div id="manufacturer-carousel" className="owl-carousel">
                                <div className="item">
                                    <div className="image-container">
                                        <a href="#">
                                            <img src="assets/images/brand/logo1.png" title="Fashion Manufacturer 1" alt="Fashion Manufacturer 1" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="image-container">
                                        <a href="#">
                                            <img src="assets/images/brand/logo2.png" title="Fashion Manufacturer 2" alt="Fashion Manufacturer 2" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="image-container">
                                        <a href="#">
                                            <img src="assets/images/brand/logo3.png" title="Fashion Manufacturer 3" alt="Fashion Manufacturer 3" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="image-container">
                                        <a href="#">
                                            <img src="assets/images/brand/logo4.png" title="Fashion Manufacturer 4" alt="Fashion Manufacturer 4" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="image-container">
                                        <a href="#">
                                            <img src="assets/images/brand/logo5.png" title="Fashion Manufacturer 5" alt="Fashion Manufacturer 5" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="image-container">
                                        <a href="#">
                                            <img src="assets/images/brand/logo6.png" title="Fashion Manufacturer 6" alt="Fashion Manufacturer 6" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* -------------------testimonial---------- */}
                        <section id="ishitesimonial" className="ishitestimonialsblock">
                            <div className="container">
                                <h3 className="home-title"><span className="title-icon"><span /></span>Our Client Say’s</h3>
                                <div id="ishitestimonials-carousel" className="owl-carousel">
                                    <div className="item ishitestimonials-container">
                                        <div className="testimonial-img">
                                            <img src="assets/images/testimonial/testimonial-1.png" alt="Marko Westin" />
                                        </div>
                                        <div className="testimonial-info">
                                            <span className="quote">
                                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 298.7 298.7" style={{ enableBackground: 'new 0 0 298.7 298.7' }} xmlSpace="preserve">
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <polygon points="298.7,128 234.7,128 277.3,42.7 213.3,42.7 170.7,128 170.7,256 298.7,256      " />
                                                                <polygon points="128,256 128,128 64,128 106.7,42.7 42.7,42.7 0,128 0,256      " />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                            <div className="user-description">
                                                Lorem ipsum dolor sit amet, consectetur adipiselit. Mauris non tortor nec eros digniim dapibus Etiam vitae magna sed urna t
                                            </div>
                                            <h3 className="user-name">
                                                Marko Westin
                                            </h3>
                                            <div className="user-designation">
                                                Co-Founder
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item ishitestimonials-container">
                                        <div className="testimonial-img">
                                            <img src="assets/images/testimonial/testimonial-2.png" alt="John Duff" />
                                        </div>
                                        <div className="testimonial-info">
                                            <span className="quote">
                                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 298.7 298.7" style={{ enableBackground: 'new 0 0 298.7 298.7' }} xmlSpace="preserve">
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <polygon points="298.7,128 234.7,128 277.3,42.7 213.3,42.7 170.7,128 170.7,256 298.7,256      " />
                                                                <polygon points="128,256 128,128 64,128 106.7,42.7 42.7,42.7 0,128 0,256      " />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                            <div className="user-description">
                                                Lorem ipsum dolor sit amet, consectetur adipiselit. Mauris non tortor nec eros digniim dapibus Etiam vitae magna sed urna t
                                            </div>
                                            <h3 className="user-name">
                                                John Duff
                                            </h3>
                                            <div className="user-designation">
                                                Web Developer
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item ishitestimonials-container">
                                        <div className="testimonial-img">
                                            <img src="assets/images/testimonial/testimonial-3.png" alt="Marko Westin" />
                                        </div>
                                        <div className="testimonial-info">
                                            <span className="quote">
                                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 298.7 298.7" style={{ enableBackground: 'new 0 0 298.7 298.7' }} xmlSpace="preserve">
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <polygon points="298.7,128 234.7,128 277.3,42.7 213.3,42.7 170.7,128 170.7,256 298.7,256      " />
                                                                <polygon points="128,256 128,128 64,128 106.7,42.7 42.7,42.7 0,128 0,256      " />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                            <div className="user-description">
                                                Lorem ipsum dolor sit amet, consectetur adipiselit. Mauris non tortor nec eros digniim dapibus Etiam vitae magna sed urna t
                                            </div>
                                            <h3 className="user-name">
                                                Marko Westin
                                            </h3>
                                            <div className="user-designation">
                                                Co-Founder
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item ishitestimonials-container">
                                        <div className="testimonial-img">
                                            <img src="assets/images/testimonial/testimonial-4.png" alt="Marko Westin" />
                                        </div>
                                        <div className="testimonial-info">
                                            <span className="quote">
                                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 298.7 298.7" style={{ enableBackground: 'new 0 0 298.7 298.7' }} xmlSpace="preserve">
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <polygon points="298.7,128 234.7,128 277.3,42.7 213.3,42.7 170.7,128 170.7,256 298.7,256      " />
                                                                <polygon points="128,256 128,128 64,128 106.7,42.7 42.7,42.7 0,128 0,256      " />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                            <div className="user-description">
                                                Lorem ipsum dolor sit amet, consectetur adipiselit. Mauris non tortor nec eros digniim dapibus Etiam vitae magna sed urna t
                                            </div>
                                            <h3 className="user-name">
                                                Marko Westin
                                            </h3>
                                            <div className="user-designation">
                                                Co-Founder
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item ishitestimonials-container">
                                        <div className="testimonial-img">
                                            <img src="assets/images/testimonial/testimonial-5.png" alt="Marko Westin" />
                                        </div>
                                        <div className="testimonial-info">
                                            <span className="quote">
                                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 298.7 298.7" style={{ enableBackground: 'new 0 0 298.7 298.7' }} xmlSpace="preserve">
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <polygon points="298.7,128 234.7,128 277.3,42.7 213.3,42.7 170.7,128 170.7,256 298.7,256      " />
                                                                <polygon points="128,256 128,128 64,128 106.7,42.7 42.7,42.7 0,128 0,256      " />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                            <div className="user-description">
                                                Lorem ipsum dolor sit amet, consectetur adipiselit. Mauris non tortor nec eros digniim dapibus Etiam vitae magna sed urna t
                                            </div>
                                            <h3 className="user-name">
                                                Marko Westin
                                            </h3>
                                            <div className="user-designation">
                                                Co-Founder
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* -------------------special product---------- */}
                        <section id="ishispecialproducts" className="container">
                            <h3 className="home-title"><span className="title-icon"><span /></span>Special Products</h3>
                            <div className="block_content row">
                                <div id="ishispecialproducts-carousel" className="owl-carousel products">
                                    <div className="product-thumb">
                                        <div className="item">
                                            <div className="product-desc">
                                                <div className="product-title"><a href="#">Shake Spin Lion</a></div>
                                                <div className="product-comments">
                                                    <div className="star_content">
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="image">
                                                <a href="#" className="thumbnail product-thumbnail">
                                                    <img src="assets/images/product/1.jpg" alt="product-img" />
                                                    <img className="product-img-extra change" alt="product-img" src="assets/images/product/2.jpg" />
                                                </a>
                                                <div className="product-flags">
                                                    <div className="sale">Sale</div>
                                                </div>
                                            </div>
                                            <div className="caption">
                                                <p className="description">
                                                    The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                <p className="price">
                                                    <span className="regular price-old">$55.00</span>
                                                    <span className="price-discount">9%</span>
                                                    <span className="price-sale">$50.00 </span>
                                                </p>
                                                <div className="btn-cart">
                                                    <a data-button-action="add-to-cart" className="button">
                                                        <i className="fa fa-shopping-cart" />
                                                        <span className="lblcart">Add to cart</span>
                                                    </a>
                                                </div>
                                                <div className="button-group">
                                                    <div className="btn-quickview">
                                                        <a className="quickbox" href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                            <span className="lblcart">Quick View</span>
                                                        </a>
                                                    </div>
                                                    <div className="btn-wishlist">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-thumb">
                                        <div className="item">
                                            <div className="product-desc">
                                                <div className="product-title"><a href="#">Sensory Sweet</a></div>
                                                <div className="product-comments">
                                                    <div className="star_content">
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="image">
                                                <a href="#" className="thumbnail product-thumbnail">
                                                    <img src="assets/images/product/8.jpg" alt="product-img" />
                                                    <img className="product-img-extra change" alt="product-img" src="assets/images/product/9.jpg" />
                                                </a>
                                                <div className="product-flags">
                                                    <div className="sale">Sale</div>
                                                </div>
                                            </div>
                                            <div className="caption">
                                                <p className="description">
                                                    The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                <p className="price">
                                                    <span className="regular price-old">$30.00</span>
                                                    <span className="price-discount">16%</span>
                                                    <span className="price-sale">$25.00 </span>
                                                </p>
                                                <div className="btn-cart">
                                                    <a data-button-action="add-to-cart" className="button">
                                                        <i className="fa fa-shopping-cart" />
                                                        <span className="lblcart">Add to cart</span>
                                                    </a>
                                                </div>
                                                <div className="button-group">
                                                    <div className="btn-quickview">
                                                        <a className="quickbox" href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                            <span className="lblcart">Quick View</span>
                                                        </a>
                                                    </div>
                                                    <div className="btn-wishlist">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-thumb">
                                        <div className="item">
                                            <div className="product-desc">
                                                <div className="product-title"><a href="#">Link 'n Go  Pack</a></div>
                                                <div className="product-comments">
                                                    <div className="star_content">
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="image">
                                                <a href="#" className="thumbnail product-thumbnail">
                                                    <img src="assets/images/product/14.jpg" alt="product-img" />
                                                    <img className="product-img-extra change" alt="product-img" src="assets/images/product/15.jpg" />
                                                </a>
                                                <span className="outstock-overlay">SOLD OUT</span>
                                                <div className="product-flags">
                                                    <div className="sale">Sale</div>
                                                </div>
                                            </div>
                                            <div className="caption">
                                                <p className="description">
                                                    The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                <p className="price">
                                                    <span className="regular price-old">$20.00</span>
                                                    <span className="price-discount">25%</span>
                                                    <span className="price-sale">$15.00 </span>
                                                </p>
                                                <div className="btn-cart">
                                                    <a data-button-action="add-to-cart" className="button sold-out">
                                                        <i className="fa fa-shopping-cart" />
                                                        <span className="lblcart">Sold Out</span>
                                                    </a>
                                                </div>
                                                <div className="button-group">
                                                    <div className="btn-quickview">
                                                        <a className="quickbox" href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                            <span className="lblcart">Quick View</span>
                                                        </a>
                                                    </div>
                                                    <div className="btn-wishlist">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-thumb">
                                        <div className="item">
                                            <div className="product-desc">
                                                <div className="product-title"><a href="#">Critter Teddy</a></div>
                                                <div className="product-comments">
                                                    <div className="star_content">
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="image">
                                                <a href="#" className="thumbnail product-thumbnail">
                                                    <img src="assets/images/product/5.jpg" alt="product-img" />
                                                    <img className="product-img-extra change" alt="product-img" src="assets/images/product/6.jpg" />
                                                </a>
                                                <div className="product-flags">
                                                    <div className="sale">Sale</div>
                                                </div>
                                            </div>
                                            <div className="caption">
                                                <p className="description">
                                                    The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                <p className="price">
                                                    <span className="regular price-old">$35.00</span>
                                                    <span className="price-discount">14%</span>
                                                    <span className="price-sale">$30.00 </span>
                                                </p>
                                                <div className="btn-cart">
                                                    <a data-button-action="add-to-cart" className="button">
                                                        <i className="fa fa-shopping-cart" />
                                                        <span className="lblcart">Add to cart</span>
                                                    </a>
                                                </div>
                                                <div className="button-group">
                                                    <div className="btn-quickview">
                                                        <a className="quickbox" href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                            <span className="lblcart">Quick View</span>
                                                        </a>
                                                    </div>
                                                    <div className="btn-wishlist">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-thumb">
                                        <div className="item">
                                            <div className="product-desc">
                                                <div className="product-title"><a href="#">Comfort Vibe</a></div>
                                                <div className="product-comments">
                                                    <div className="star_content">
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="image">
                                                <a href="#" className="thumbnail product-thumbnail">
                                                    <img src="assets/images/product/16.jpg" alt="product-img" />
                                                    <img className="product-img-extra change" alt="product-img" src="assets/images/product/17.jpg" />
                                                </a>
                                                <div className="product-flags">
                                                    <div className="sale">Sale</div>
                                                </div>
                                            </div>
                                            <div className="caption">
                                                <p className="description">
                                                    The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                <p className="price">
                                                    <span className="regular price-old">$30.00</span>
                                                    <span className="price-discount">16%</span>
                                                    <span className="price-sale">$25.00 </span>
                                                </p>
                                                <div className="btn-cart">
                                                    <a data-button-action="add-to-cart" className="button">
                                                        <i className="fa fa-shopping-cart" />
                                                        <span className="lblcart">Add to cart</span>
                                                    </a>
                                                </div>
                                                <div className="button-group">
                                                    <div className="btn-quickview">
                                                        <a className="quickbox" href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                            <span className="lblcart">Quick View</span>
                                                        </a>
                                                    </div>
                                                    <div className="btn-wishlist">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* ------------------parallax block ---------- */}
                        <section id="ishiparallaxbanner" className="clearfix">
                            <div className="parallax" data-source-url="assets/images/parallax.jpg" style={{ backgroundImage: 'url(https://ishithemes.com/)' }}>
                                <div className="container">
                                    <div className="parallax-list">
                                        <div className="parallax-discount">Welcome Baby Born</div>
                                        <div className="parallax-title">Care Your Baby</div>
                                        <div className="parallax-subtitle">Flat 20% Off All Type Plant &amp; Accessories </div>
                                        <div className="parallax-btn"><a href="#" className="btn btn-primary theme-button">SHOP NOW</a></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* -------------------category featured product---------- */}
                        <section id="ishiproductsblock" className="ishiproductsblock container">
                            <h3 className="home-title"><span className="title-icon"><span /></span>Our Categories</h3>
                            <ul id="ishiproductstab" className="nav nav-tabs clearfix">
                                <li className="nav-item first_item active">
                                    <a className="nav-link" href="#linkproductcategoryblock1" data-toggle="tab">Women</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="#linkproductcategoryblock2" data-toggle="tab">Kids</a>
                                </li>
                                <li className="nav-item last_item">
                                    <a className="nav-link " href="#linkproductcategoryblock3" data-toggle="tab">Men</a>
                                </li>
                                <li className="nav-item last_item">
                                    <a className="nav-link " href="#linkproductcategoryblock4" data-toggle="tab">Accessories</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="linkproductcategoryblock1" className="tab-pane active">
                                    <div className="row">
                                        <div className="banner_productblock col-lg-3 col-md-3 hidden-md-down">
                                            <a className="ishi-customhover-fadeinrotate" href="#">
                                                <img src="assets/images/category_product-1.png" alt="banner" />
                                            </a>
                                        </div>
                                        <div className="block_content col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                            <div id="ishi-products-category" className="owl-carousel">
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Aroma Mocha</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/1.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/2.jpg" />
                                                            </a>
                                                            <span className="outstock-overlay">SOLD OUT</span>
                                                            <div className="product-flags">
                                                                <div className="sale">Sale</div>
                                                            </div>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="regular price-old">$55.00</span>
                                                                <span className="price-discount">9%</span>
                                                                <span className="price-sale">$50.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button sold-out">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Sold Out</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">autem euaiure</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/3.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/4.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="price-sale">$45.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Authletic Stud</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/14.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/15.jpg" />
                                                            </a>
                                                            <span className="outstock-overlay">SOLD OUT</span>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="price-sale">$80.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button sold-out">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Sold Out</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Black Tour Bag</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/5.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/6.jpg" />
                                                            </a>
                                                            <div className="product-flags">
                                                                <div className="sale">Sale</div>
                                                            </div>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="regular price-old">$42.00</span>
                                                                <span className="price-discount">4%</span>
                                                                <span className="price-sale">$40.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Brown cushion</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/7.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/8.jpg" />
                                                            </a>
                                                            <div className="product-flags">
                                                                <div className="sale">Sale</div>
                                                            </div>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="regular price-old">$25.00</span>
                                                                <span className="price-discount">20%</span>
                                                                <span className="price-sale">$20.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="linkproductcategoryblock2" className="tab-pane">
                                    <div className="row">
                                        <div className="banner_productblock col-lg-3 col-md-3 hidden-md-down">
                                            <a className="ishi-customhover-fadeinrotate" href="#">
                                                <img src="assets/images/category_product-2.png" alt="banner" />
                                            </a>
                                        </div>
                                        <div className="block_content col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                            <div id="ishi-products-category" className="owl-carousel">
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Authletic Stud</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/9.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/10.jpg" />
                                                            </a>
                                                            <span className="outstock-overlay">SOLD OUT</span>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="price-sale">$80.00</span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button sold-out">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Sold Out</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Skillofun  Junior</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/11.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/12.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="price-sale">$64.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Crinkle Leaf</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/16.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/17.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="price-sale">$60.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button sold-out">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Sold Out</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">corporis suscipit</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/18.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/19.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="price-sale">$50.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Aroma Mocha</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/20.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/1.jpg" />
                                                            </a>
                                                            <div className="product-flags">
                                                                <div className="sale">Sale</div>
                                                            </div>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="regular price-old">$55.00</span>
                                                                <span className="price-discount">9%</span>
                                                                <span className="price-sale">$50.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="linkproductcategoryblock3" className="tab-pane">
                                    <div className="row">
                                        <div className="banner_productblock col-lg-3 col-md-3 hidden-md-down">
                                            <a className="ishi-customhover-fadeinrotate" href="#">
                                                <img src="assets/images/category_product-3.png" alt="banner" />
                                            </a>
                                        </div>
                                        <div className="block_content col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                            <div id="ishi-products-category" className="owl-carousel">
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Shake Spin Lion</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/1.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/2.jpg" />
                                                            </a>
                                                            <div className="product-flags">
                                                                <div className="sale">Sale</div>
                                                            </div>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="regular price-old">$55.00</span>
                                                                <span className="price-discount">9%</span>
                                                                <span className="price-sale">$50.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Sensory Sweet</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/8.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/9.jpg" />
                                                            </a>
                                                            <div className="product-flags">
                                                                <div className="sale">Sale</div>
                                                            </div>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="regular price-old">$30.00</span>
                                                                <span className="price-discount">16%</span>
                                                                <span className="price-sale">$25.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Link 'n Go  Pack</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/14.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/15.jpg" />
                                                            </a>
                                                            <div className="product-flags">
                                                                <div className="sale">Sale</div>
                                                            </div>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="regular price-old">$20.00</span>
                                                                <span className="price-discount">25%</span>
                                                                <span className="price-sale">$15.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button sold-out">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Sold Out</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Critter Teddy</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/5.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/6.jpg" />
                                                            </a>
                                                            <div className="product-flags">
                                                                <div className="sale">Sale</div>
                                                            </div>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="regular price-old">$35.00</span>
                                                                <span className="price-discount">14%</span>
                                                                <span className="price-sale">$30.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="linkproductcategoryblock4" className="tab-pane">
                                    <div className="row">
                                        <div className="banner_productblock col-lg-3 col-md-3 hidden-md-down">
                                            <a className="ishi-customhover-fadeinrotate" href="#">
                                                <img src="assets/images/category_product-4.png" alt="banner" />
                                            </a>
                                        </div>
                                        <div className="block_content col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                            <div id="ishi-products-category" className="owl-carousel">
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Shake Spin Lion</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/1.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/2.jpg" />
                                                            </a>
                                                            <div className="product-flags">
                                                                <div className="sale">Sale</div>
                                                            </div>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="regular price-old">$55.00</span>
                                                                <span className="price-discount">9%</span>
                                                                <span className="price-sale">$50.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Sensory Sweet</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/8.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/9.jpg" />
                                                            </a>
                                                            <div className="product-flags">
                                                                <div className="sale">Sale</div>
                                                            </div>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="regular price-old">$30.00</span>
                                                                <span className="price-discount">16%</span>
                                                                <span className="price-sale">$25.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Link 'n Go  Pack</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/14.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/15.jpg" />
                                                            </a>
                                                            <div className="product-flags">
                                                                <div className="sale">Sale</div>
                                                            </div>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="regular price-old">$20.00</span>
                                                                <span className="price-discount">25%</span>
                                                                <span className="price-sale">$15.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button sold-out">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Sold Out</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Critter Teddy</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/5.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/6.jpg" />
                                                            </a>
                                                            <div className="product-flags">
                                                                <div className="sale">Sale</div>
                                                            </div>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="regular price-old">$35.00</span>
                                                                <span className="price-discount">14%</span>
                                                                <span className="price-sale">$30.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-thumb">
                                                    <div className="item">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Comfort Vibe</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/16.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/17.jpg" />
                                                            </a>
                                                            <div className="product-flags">
                                                                <div className="sale">Sale</div>
                                                            </div>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                                                            <p className="price">
                                                                <span className="regular price-old">$30.00</span>
                                                                <span className="price-discount">16%</span>
                                                                <span className="price-sale">$25.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190"><title>eye-open</title><path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#eye-open" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400"><title>heart-shape-outline</title><path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" /></symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#heart-shape-outline" x="32%" y="33%" /></svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* -------------------smartblock---------- */}
                        <section id="smartblog_block" className="smartblog_block clearfix container">
                            <h3 className="home-title"><span className="title-icon"><span /></span>Latest Blog</h3>
                            <div className="block_content">
                                <div id="smartblog-carousel" className="smartblog-carousel owl-carousel">
                                    <div className="item blog_post">
                                        <div className="news_module_image_holder">
                                            <a href="blog_post.html">
                                                <img alt="Upon of seasons earth dominion" className="feat_img_small" src="assets/images/blog/1.jpg" />
                                                <span className="blog-hover" />
                                            </a>
                                            <div className="date-comment">
                                                <span className="blog_date"> <i className="fa fa-calendar" /> 27 July 2020</span>
                                                <span className="write-comment"> <a href="#"><i className="fa fa-comment" /> 1 Comments</a></span>
                                            </div>
                                        </div>
                                        <div className="blog_content">
                                            <div className="blog_inner">
                                                <h4 className="blog_title"><a href="blog_post.html">Upon of seasons earth dominion</a></h4>
                                                <p className="blog-desc"> Nascetur ridiculus mus upon of seasons earth dominion. Gathering brought brought... </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item blog_post">
                                        <div className="news_module_image_holder">
                                            <a href="blog_post.html">
                                                <img alt="Lorem ipsum dolor sit amet" className="feat_img_small" src="assets/images/blog/2.jpg" />
                                                <span className="blog-hover" />
                                            </a>
                                            <div className="date-comment">
                                                <span className="blog_date"> <i className="fa fa-calendar" /> 27 July 2020</span>
                                                <span className="write-comment"> <a href="#"><i className="fa fa-comment" /> 1 Comments</a></span>
                                            </div>
                                        </div>
                                        <div className="blog_content">
                                            <div className="blog_inner">
                                                <h4 className="blog_title"><a href="blog_post.html">Lorem ipsum dolor sit amet</a></h4>
                                                <p className="blog-desc">
                                                    Nascetur ridiculus mus upon of seasons earth dominion. Gathering brought brought...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item blog_post">
                                        <div className="news_module_image_holder">
                                            <a href="blog_post.html">
                                                <img alt="Upon of seasons earth dominion" className="feat_img_small" src="assets/images/blog/3.jpg" />
                                                <span className="blog-hover" />
                                            </a>
                                            <div className="date-comment">
                                                <span className="blog_date"> <i className="fa fa-calendar" /> 27 July 2020</span>
                                                <span className="write-comment"> <a href="#"><i className="fa fa-comment" /> 1 Comments</a></span>
                                            </div>
                                        </div>
                                        <div className="blog_content">
                                            <div className="blog_inner">
                                                <h4 className="blog_title"><a href="blog_post.html">Upon of seasons earth dominion</a></h4>
                                                <p className="blog-desc">
                                                    Nascetur ridiculus mus upon of seasons earth dominion. Gathering brought light...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item blog_post">
                                        <div className="news_module_image_holder">
                                            <a href="blog_post.html">
                                                <img alt="Christmas Sale is here 7" className="feat_img_small" src="assets/images/blog/4.jpg" />
                                                <span className="blog-hover" />
                                            </a>
                                            <div className="date-comment">
                                                <span className="blog_date"> <i className="fa fa-calendar" /> 27 July 2020</span>
                                                <span className="write-comment"> <a href="#"><i className="fa fa-comment" /> 1 Comments</a></span>
                                            </div>
                                        </div>
                                        <div className="blog_content">
                                            <div className="blog_inner">
                                                <h4 className="blog_title"><a href="blog_post.html">Christmas Sale is here 7</a></h4>
                                                <p className="blog-desc">
                                                    Nascetur ridiculus mus upon of seasons earth dominion. Gathering brought light...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item blog_post">
                                        <div className="news_module_image_holder">
                                            <a href="blog_post.html">
                                                <img alt="Nostro expetenda voluptatum sit ex" className="feat_img_small" src="assets/images/blog/5.jpg" />
                                                <span className="blog-hover" />
                                            </a>
                                            <div className="date-comment">
                                                <span className="blog_date"> <i className="fa fa-calendar" /> 27 July 2020</span>
                                                <span className="write-comment"> <a href="#"><i className="fa fa-comment" /> 1 Comments</a></span>
                                            </div>
                                        </div>
                                        <div className="blog_content">
                                            <div className="blog_inner">
                                                <h4 className="blog_title"><a href="blog_post.html">Nostro expetenda voluptatum</a></h4>
                                                <p className="blog-desc">
                                                    Nascetur ridiculus mus upon of seasons earth dominion. Gathering brought light...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item blog_post">
                                        <div className="news_module_image_holder">
                                            <a href="blog_post.html">
                                                <img alt="Viderer voluptatum te eum" className="feat_img_small" src="assets/images/blog/6.jpg" />
                                                <span className="blog-hover" />
                                            </a>
                                            <div className="date-comment">
                                                <span className="blog_date"> <i className="fa fa-calendar" /> 27 July 2020</span>
                                                <span className="write-comment"> <a href="#"><i className="fa fa-comment" /> 1 Comments</a></span>
                                            </div>
                                        </div>
                                        <div className="blog_content">
                                            <div className="blog_inner">
                                                <h4 className="blog_title"><a href="blog_post.html">Viderer voluptatum te eum</a></h4>
                                                <p className="blog-desc">
                                                    Nascetur ridiculus mus upon of seasons earth dominion. Gathering brought light...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item blog_post">
                                        <div className="news_module_image_holder">
                                            <a href="blog_post.html">
                                                <img alt="Nec intellegat deseruisse te" className="feat_img_small" src="assets/images/blog/7.jpg" />
                                                <span className="blog-hover" />
                                            </a>
                                            <div className="date-comment">
                                                <span className="blog_date"> <i className="fa fa-calendar" /> 27 July 2020</span>
                                                <span className="write-comment"> <a href="#"><i className="fa fa-comment" /> 1 Comments</a></span>
                                            </div>
                                        </div>
                                        <div className="blog_content">
                                            <div className="blog_inner">
                                                <h4 className="blog_title"><a href="blog_post.html">Nec intellegat deseruisse te</a></h4>
                                                <p className="blog-desc">
                                                    Nascetur ridiculus mus upon of seasons earth dominion. Gathering brought light...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item blog_post">
                                        <div className="news_module_image_holder">
                                            <a href="blog_post.html">
                                                <img alt="Scelerisque vestibulum urna" className="feat_img_small" src="assets/images/blog/8.jpg" />
                                                <span className="blog-hover" />
                                            </a>
                                            <div className="date-comment">
                                                <span className="blog_date"> <i className="fa fa-calendar" /> 27 July 2020</span>
                                                <span className="write-comment"> <a href="#"><i className="fa fa-comment" /> 1 Comments</a></span>
                                            </div>
                                        </div>
                                        <div className="blog_content">
                                            <div className="blog_inner">
                                                <h4 className="blog_title"><a href="blog_post.html">Scelerisque vestibulum urna</a></h4>
                                                <p className="blog-desc">
                                                    Nascetur ridiculus mus upon of seasons earth dominion. Gathering brought light...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* -------------------newsletter---------- */}
                        <section className="block_newsletter container">
                            <div className="row">
                                <div className="bannerimage bannerblock col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                    <a href="#" className="ishi-customhover-fadeinnormal scale">
                                        <img src="assets/images/banner/5.png" alt="banner" className="img-responsive" />
                                    </a>
                                </div>
                                <div id="newsletter-container" className="bannerblock box-content col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                    <h3 className="home-title"><span className="title-icon"><span /></span>Newsletter</h3>
                                    <p className="block-newsletter-label">Subscribe Now For Exclusive Offers</p>
                                    <div className="newsletter_form">
                                        <form action="#" method="post">
                                            <input name="email" defaultValue placeholder="Your email address" type="text" />
                                            <a className="button btn-submit" />
                                        </form>
                                    </div>
                                    {/* -------------------socialmedia---------- */}
                                    <div className="block-social">
                                        <div id="block-container">
                                            <ul className="social-inner">
                                                <li className="facebook">
                                                    <a href="#" target="_blank">
                                                        <i className="fa fa-facebook" /><span className="socialicon-label">Facebook</span>
                                                    </a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="#" target="_blank">
                                                        <i className="fa fa-twitter" /><span className="socialicon-label">Twitter</span>
                                                    </a>
                                                </li>
                                                <li className="rss">
                                                    <a href="#" target="_blank">
                                                        <i className="fa fa-pinterest-p" /><span className="socialicon-label">Pinterest</span>
                                                    </a>
                                                </li>
                                                <li className="youtube">
                                                    <a href="#" target="_blank">
                                                        <i className="fa fa-youtube" /><span className="socialicon-label">YouTube</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="bannerimage bannerblock col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                    <a href="#" className="ishi-customhover-fadeinnormal scale">
                                        <img src="assets/images/banner/6.png" alt="banner" className="img-responsive" />
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>

        </>
    )
}

export default Home;