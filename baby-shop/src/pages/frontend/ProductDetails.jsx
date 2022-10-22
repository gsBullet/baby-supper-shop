import React from 'react'

function ProductDetails() {
    return (
        <>
            <div>
                <div className="breadcrumb-container">
                    <nav data-depth={5} className="breadcrumb container">
                        <h1 className="h1 product-title breadcrumb-title">Simul dolorem voluptaria</h1>
                        <ol>
                            <li>
                                <a href="#">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Women</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Tops</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>T-shirts</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Simul dolorem voluptaria</span>
                                </a>
                            </li>
                        </ol>
                    </nav>
                </div>
                {/* ---------------section-------------------- */}
                <section id="wrapper">
                    <div className="container">
                        <div className="row">
                            <div id="content-wrapper" className="col-12">
                                <section id="main">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <section className="page-content" id="content">
                                                <ul className="product-flags">
                                                    <li className="product-flag new">New</li>
                                                </ul>
                                                <div className="images-container">
                                                    <div className="product-cover">
                                                        <div id="product-zoom">
                                                            <img className="js-qv-product-cover" src="assets/images/product/1.jpg" alt="product-image" title="product-image" style={{ width: '100%' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="js-qv-mask mask">
                                                            <ul className="qv-carousel product-images owl-carousel">
                                                                <li className="thumb-container item">
                                                                    <img className="thumb js-thumb  selected " src="assets/images/product/2.jpg" alt="related-items" title data-image-large-src="assets/images/product/2.jpg" width={100} itemProp="image" />
                                                                </li>
                                                                <li className="thumb-container item">
                                                                    <img className="thumb js-thumb " src="assets/images/product/3.jpg" alt="related-items" title data-image-large-src="assets/images/product/3.jpg" width={100} itemProp="image" />
                                                                </li>
                                                                <li className="thumb-container item">
                                                                    <img className="thumb js-thumb " src="assets/images/product/5.jpg" alt="related-items" title data-image-large-src="assets/images/product/5.jpg" width={100} itemProp="image" />
                                                                </li>
                                                                <li className="thumb-container item">
                                                                    <img className="thumb js-thumb " src="assets/images/product/6.jpg" alt="related-items" title data-image-large-src="assets/images/product/6.jpg" width={100} itemProp="image" />
                                                                </li>
                                                                <li className="thumb-container item">
                                                                    <img className="thumb js-thumb " src="assets/images/product/7.jpg" alt="related-items" title data-image-large-src="assets/images/product/7.jpg" width={100} itemProp="image" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="scroll-box-arrows">
                                                    <i className="material-icons left"></i>
                                                    <i className="material-icons right"></i>
                                                </div>
                                            </section>
                                        </div>
                                        <div className="col-md-6 productfullldetails">
                                            <h1 className="h1 product-title">Aroma Mocha</h1>
                                            <div className="product-information">
                                                <div id="product-description-short-1">
                                                    <p>Faded short sleeves t-shirt with high neckline. Soft and stretchy
                                                        material for a comfortable fit. Accessorize with a straw hat and you're
                                                        ready for summer!</p>
                                                </div>
                                                <div className="product-comments display_comments">
                                                    <div className="star_content">
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                        <div className="star star_on" />
                                                    </div>
                                                    <div className="comment_advice">
                                                        <a href="#tab-review" className="read_comment scrollLink"><i className="material-icons comments" aria-hidden="true"></i>Read
                                                            Reviews</a>
                                                        <a href="#tab-review" className="write_comment scrollLink"><i className="material-icons comments" aria-hidden="true"></i>Write
                                                            Review</a>
                                                    </div>
                                                    <span>5 review</span>
                                                </div>
                                                <div className="product-actions">
                                                    <form action="#" method="post" id="add-to-cart-or-refresh">
                                                        <input type="hidden" name="token" defaultValue="3d2187fdc78a54510e1e1670c3ff42b0" />
                                                        <input type="hidden" name="id_product" defaultValue={1} id="product_page_product_id" />
                                                        <input type="hidden" name="id_customization" defaultValue={0} id="product_customization_id" />
                                                        <div className="product-variants">
                                                            <div className="clearfix product-variants-item">
                                                                <span className="control-label">Size</span>
                                                                <select className=" form-control-select" id="group_1" data-product-attribute={1} name="group[1]">
                                                                    <option value={1} title="S" selected="selected">S</option>
                                                                    <option value={2} title="M">M</option>
                                                                    <option value={3} title="L">L</option>
                                                                </select>
                                                            </div>
                                                            <div className="clearfix product-variants-item">
                                                                <span className="control-label">Color</span>
                                                                <ul id="group_3">
                                                                    <li className="float-xs-left input-container">
                                                                        <label>
                                                                            <input className="input-color" type="radio" data-product-attribute={3} name="group[3]" defaultValue={13} defaultChecked="checked" />
                                                                            <span className="color" style={{ backgroundColor: '#F39C11' }}>
                                                                                <span className="sr-only">Orange</span></span>
                                                                        </label>
                                                                    </li>
                                                                    <li className="float-xs-left input-container">
                                                                        <label>
                                                                            <input className="input-color" type="radio" data-product-attribute={3} name="group[3]" defaultValue={14} />
                                                                            <span className="color" style={{ backgroundColor: '#5D9CEC' }}>
                                                                                <span className="sr-only">Blue</span></span>
                                                                        </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <section className="product-discounts">
                                                        </section>
                                                        <div className="product-prices">
                                                            <div className="product-price h5">
                                                                <link href="#" />
                                                                <meta itemProp="priceCurrency" content="USD" />
                                                                <div className="current-price">
                                                                    <span itemProp="price">$50.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-add-to-cart">
                                                            <div className="product-quantity-selector form-control-select">
                                                                <p>Quantity</p>
                                                                <div className="quantity-counter">
                                                                    <i className="fa fa-caret-left dec button qtyminus "><span>-</span></i>
                                                                    <input name="quantity" defaultValue={1} className="quantity" />
                                                                    <i className="fa fa-caret-right inc button qtyplus"><span>+</span></i>
                                                                </div>
                                                            </div>
                                                            <div className="product-quantity clearfix">
                                                                <div className="add">
                                                                    <button className="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                        <i className="material-icons shopping-cart"></i>
                                                                        Add to cart
                                                                    </button>
                                                                </div>
                                                                <div className="buttons_bottom_block no-print wishlist_login">
                                                                    <a className="wishlist_button" href="#" title="Add to my wishlist">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="wishlist-outline" viewBox="0 0 1200 1200">
                                                                                <title>wishlist-outline</title>
                                                                                <path d="M511.825,170.191c-0.14-1.786-0.298-3.155-0.44-4.095C504.22,84.955,444.691,20.73,367.434,20.73
                                        c-44.758,0-85.66,21.18-112.442,55.516C228.835,41.679,189.491,20.73,144.97,20.73C67.976,20.73,8.584,84.52,0.937,166.557
                                        c-0.147,0.956-0.295,2.12-0.43,3.489C-0.8,183.3,0.287,200.862,5.338,222.26c10.732,45.463,35.828,86.871,71.224,118.958
                                        l164.828,144.92c8.028,7.059,20.042,7.085,28.101,0.062l166.037-144.683c39.134-40.728,62.393-77.366,71.616-119.584
                                        C511.771,200.731,512.848,183.284,511.825,170.191z M465.46,212.833c-7.254,33.204-26.552,63.603-59.352,97.843L255.545,441.771
                                        l-150.569-132.38c-28.881-26.184-49.406-60.051-58.113-96.933c-3.953-16.747-4.747-29.585-3.895-38.225
                                        c0.075-0.764,0.393-3.072,0.393-3.072C48.849,109.384,91.478,63.397,144.97,63.397c39.823,0,73.704,24.287,90.17,63.294
                                        c7.338,17.382,31.97,17.382,39.308,0c16.136-38.225,52.419-63.294,92.986-63.294c53.494,0,96.121,45.99,101.609,107.786
                                        c0.147,1.242,0.187,1.586,0.245,2.333C469.993,182.541,469.174,195.811,465.46,212.833z">
                                                                                </path>
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#wishlist-outline" x="29%" y="30%">
                                                                            </use>
                                                                        </svg>
                                                                        <span>Add to wishlist</span>
                                                                    </a>
                                                                </div>
                                                                <div id="product-availability">
                                                                    <i className="material-icons product-available"></i>
                                                                    In stock
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-additional-info">
                                                            <div className="social-sharing">
                                                                <span>Share</span>
                                                                <ul>
                                                                    <li className="facebook icon-gray">
                                                                        <a href="#" className="text-hide" title="Share" target="_blank">Share</a>
                                                                    </li>
                                                                    <li className="twitter icon-gray">
                                                                        <a href="#" className="text-hide" title="Tweet" target="_blank">Tweet</a>
                                                                    </li>
                                                                    <li className="googleplus icon-gray">
                                                                        <a href="#" className="text-hide" title="Google+" target="_blank">Google+</a>
                                                                    </li>
                                                                    <li className="pinterest icon-gray"><a href="#" className="text-hide" title="Pinterest" target="_blank">Pinterest</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 paymentlogo-container">
                                                                <span>Payment</span>
                                                                <img src="assets/images/paymenticon/1.png" alt="Discover" />
                                                                <img src="assets/images/paymenticon/2.png" alt="Visa" />
                                                                <img src="assets/images/paymenticon/3.png" alt="JCB" />
                                                                <img src="assets/images/paymenticon/4.png" alt="PayPal" />
                                                                <img src="assets/images/paymenticon/5.png" alt="Master Card" />
                                                                <img src="assets/images/paymenticon/6.png" alt="American Express" />
                                                            </div>
                                                        </div>
                                                        <div id="block-reassurance">
                                                            <ul>
                                                                <li>
                                                                    <div className="block-reassurance-item">
                                                                        <img src="assets/images/block-reassurance/1.png" alt="Security policy (edit with Customer reassurance module)" />
                                                                        <span className="h6">Security policy (edit with Customer
                                                                            reassurance module)</span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="block-reassurance-item">
                                                                        <img src="assets/images/block-reassurance/2.png" alt="Delivery policy (edit with Customer reassurance module)" />
                                                                        <span className="h6">Delivery policy (edit with Customer
                                                                            reassurance module)</span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="block-reassurance-item">
                                                                        <img src="assets/images/block-reassurance/3.png" alt="Return policy (edit with Customer reassurance module)" />
                                                                        <span className="h6">Return policy (edit with Customer
                                                                            reassurance module)</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row product-block-information">
                                        <div className="col-12 product-details">
                                            <div className="tabs">
                                                <ul className="nav nav-tabs" role="tablist">
                                                    <li className="nav-item active">
                                                        <a className="nav-link" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" data-toggle="tab" href="#product-details" role="tab" aria-controls="product-details">Product Details</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" data-toggle="tab" href="#tab-review" role="tab" aria-controls="product-details">reviews</a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content" id="tab-content">
                                                    <div className="tab-pane fade show active" id="description" role="tabpanel">
                                                        <div className="product-description">
                                                            <p>Fashion has been creating well-designed collections since 2010.
                                                                The brand offers feminine designs delivering stylish separates
                                                                and statement dresses which have since evolved into a full
                                                                ready-to-wear collection in which every item is a vital part of
                                                                a woman's wardrobe. The result? Cool, easy, chic looks with
                                                                youthful elegance and unmistakable signature style. All the
                                                                beautiful pieces are made in Italy and manufactured with the
                                                                greatest attention. Now Fashion extends to a range of
                                                                accessories including shoes, hats, belts and more!</p>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="product-details" role="tabpanel">
                                                        <div className="product-manufacturer">
                                                            <a href="#">
                                                                <img src="assets/images/product-brandlogo.png" className="img img-thumbnail manufacturer-logo" alt="Fashion Manufacturer 1" />
                                                            </a>
                                                        </div>
                                                        <div className="product-reference">
                                                            <label className="label">Reference </label>
                                                            <span itemProp="sku">demo_1</span>
                                                        </div>
                                                        <div className="product-quantities">
                                                            <label className="label">In stock</label>
                                                            <span data-stock={294} data-allow-oosp={0}>294 Items</span>
                                                        </div>
                                                        <div className="product-out-of-stock" />
                                                        <section className="product-features">
                                                            <h3 className="h6">Data sheet</h3>
                                                            <dl className="data-sheet">
                                                                <dt className="name">Compositions</dt>
                                                                <dd className="value">Cotton</dd>
                                                                <dt className="name">Styles</dt>
                                                                <dd className="value">Casual</dd>
                                                                <dt className="name">Properties</dt>
                                                                <dd className="value">Short Sleeve</dd>
                                                            </dl>
                                                        </section>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-review" role="tabpanel">
                                                        <form className="form-horizontal " id="form-review">
                                                            <div id="review">
                                                                <p>There are no reviews for this product.</p>
                                                            </div>
                                                            <h2>Write a review</h2>
                                                            <div className="form-group required">
                                                                <div className="col-sm-12">
                                                                    <input name="name" defaultValue id="input-name" className="form-control" type="text" placeholder="Your Name" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group required">
                                                                <div className="col-sm-12">
                                                                    <textarea name="text" rows={5} id="input-review" className="form-control" placeholder="Your Review" defaultValue={""} />
                                                                    <div className="help-block"> HTML is not translated!</div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group required">
                                                                <div className="col-sm-12">
                                                                    <label className="control-label">Rating</label>
                                                                    <span className="custom-radio">
                                                                        <input name="rating" defaultValue={1} type="radio" />
                                                                        <span />
                                                                    </span>
                                                                    <span className="custom-radio">
                                                                        <input name="rating" defaultValue={2} type="radio" />
                                                                        <span />
                                                                    </span>
                                                                    <span className="custom-radio">
                                                                        <input name="rating" defaultValue={3} type="radio" />
                                                                        <span />
                                                                    </span>
                                                                    <span className="custom-radio">
                                                                        <input name="rating" defaultValue={4} type="radio" />
                                                                        <span />
                                                                    </span>
                                                                    <span className="custom-radio">
                                                                        <input name="rating" defaultValue={5} type="radio" />
                                                                        <span />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="buttons clearfix">
                                                                <div className="pull-right">
                                                                    <button type="button" id="button-review" data-loading-text="Loading..." className="btn btn-primary">Continue</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <section className="product-accessories-block clearfix">
                                            <h3 className="home-title"><span className="title-icon"><span /></span>You might also
                                                like</h3>
                                            <div className="block_content">
                                                <div id="ishi-product-accessories" className="owl-carousel">
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
                                                                    The 30-inch Apple Cinema HD Display delivers an amazing 2560
                                                                    x 1600 pixel resolution. Designed sp..</p>
                                                                <p className="price">
                                                                    <span className="price-sale">$80.00</span>
                                                                </p>
                                                                <div className="btn-cart">
                                                                    <a data-button-action="add-to-cart" className="button sold-out">
                                                                        <i className="fa fa-shopping-cart" />
                                                                        <span className="lblcart">SOLD OUT</span>
                                                                    </a>
                                                                </div>
                                                                <div className="button-group">
                                                                    <div className="btn-quickview">
                                                                        <a className="quickbox" href="#">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                                <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                    <title>eye-open</title>
                                                                                    <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#eye-open" x="28%" y="28%">
                                                                                </use>
                                                                            </svg>
                                                                            <span className="lblcart">Quick View</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="btn-wishlist">
                                                                        <a href="#">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                    <title>heart-shape-outline</title>
                                                                                    <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-thumb">
                                                        <div className="item">
                                                            <div className="product-desc">
                                                                <div className="product-title"><a href="#">Skillofun Junior</a>
                                                                </div>
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
                                                                    The 30-inch Apple Cinema HD Display delivers an amazing 2560
                                                                    x 1600 pixel resolution. Designed sp..</p>
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
                                                                                <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                    <title>eye-open</title>
                                                                                    <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#eye-open" x="28%" y="28%">
                                                                                </use>
                                                                            </svg>
                                                                            <span className="lblcart">Quick View</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="btn-wishlist">
                                                                        <a href="#">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                    <title>heart-shape-outline</title>
                                                                                    <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                            </svg>
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
                                                                    The 30-inch Apple Cinema HD Display delivers an amazing 2560
                                                                    x 1600 pixel resolution. Designed sp..</p>
                                                                <p className="price">
                                                                    <span className="price-sale">$60.00 </span>
                                                                </p>
                                                                <div className="btn-cart">
                                                                    <a data-button-action="add-to-cart" className="button sold-out">
                                                                        <i className="fa fa-shopping-cart" />
                                                                        <span className="lblcart">Add to cart</span>
                                                                    </a>
                                                                </div>
                                                                <div className="button-group">
                                                                    <div className="btn-quickview">
                                                                        <a className="quickbox" href="#">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                                <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                    <title>eye-open</title>
                                                                                    <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#eye-open" x="28%" y="28%">
                                                                                </use>
                                                                            </svg>
                                                                            <span className="lblcart">Quick View</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="btn-wishlist">
                                                                        <a href="#">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                    <title>heart-shape-outline</title>
                                                                                    <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-thumb">
                                                        <div className="item">
                                                            <div className="product-desc">
                                                                <div className="product-title"><a href="#">corporis suscipit</a>
                                                                </div>
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
                                                                    The 30-inch Apple Cinema HD Display delivers an amazing 2560
                                                                    x 1600 pixel resolution. Designed sp..</p>
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
                                                                                <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                    <title>eye-open</title>
                                                                                    <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#eye-open" x="28%" y="28%">
                                                                                </use>
                                                                            </svg>
                                                                            <span className="lblcart">Quick View</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="btn-wishlist">
                                                                        <a href="#">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                    <title>heart-shape-outline</title>
                                                                                    <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                            </svg>
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
                                                                    The 30-inch Apple Cinema HD Display delivers an amazing 2560
                                                                    x 1600 pixel resolution. Designed sp..</p>
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
                                                                                <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                    <title>eye-open</title>
                                                                                    <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#eye-open" x="28%" y="28%">
                                                                                </use>
                                                                            </svg>
                                                                            <span className="lblcart">Quick View</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="btn-wishlist">
                                                                        <a href="#">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                    <title>heart-shape-outline</title>
                                                                                    <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section id="ishispecialproducts">
                                            <h3 className="home-title"><span className="title-icon"><span /></span>Special Products
                                            </h3>
                                            <div className="block_content">
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
                                                                    The 30-inch Apple Cinema HD Display delivers an amazing 2560
                                                                    x 1600 pixel resolution. Designed sp..</p>
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
                                                                                <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                    <title>eye-open</title>
                                                                                    <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#eye-open" x="28%" y="28%">
                                                                                </use>
                                                                            </svg>
                                                                            <span className="lblcart">Quick View</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="btn-wishlist">
                                                                        <a href="#">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                    <title>heart-shape-outline</title>
                                                                                    <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                            </svg>
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
                                                                    The 30-inch Apple Cinema HD Display delivers an amazing 2560
                                                                    x 1600 pixel resolution. Designed sp..</p>
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
                                                                                <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                    <title>eye-open</title>
                                                                                    <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#eye-open" x="28%" y="28%">
                                                                                </use>
                                                                            </svg>
                                                                            <span className="lblcart">Quick View</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="btn-wishlist">
                                                                        <a href="#">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                    <title>heart-shape-outline</title>
                                                                                    <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-thumb">
                                                        <div className="item">
                                                            <div className="product-desc">
                                                                <div className="product-title"><a href="#">Link 'n Go Pack</a></div>
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
                                                                    The 30-inch Apple Cinema HD Display delivers an amazing 2560
                                                                    x 1600 pixel resolution. Designed sp..</p>
                                                                <p className="price">
                                                                    <span className="regular price-old">$20.00</span>
                                                                    <span className="price-discount">25%</span>
                                                                    <span className="price-sale">$15.00 </span>
                                                                </p>
                                                                <div className="btn-cart">
                                                                    <a data-button-action="add-to-cart" className="button sold-out">
                                                                        <i className="fa fa-shopping-cart" />
                                                                        <span className="lblcart">Add to cart</span>
                                                                    </a>
                                                                </div>
                                                                <div className="button-group">
                                                                    <div className="btn-quickview">
                                                                        <a className="quickbox" href="#">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                                <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                    <title>eye-open</title>
                                                                                    <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#eye-open" x="28%" y="28%">
                                                                                </use>
                                                                            </svg>
                                                                            <span className="lblcart">Quick View</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="btn-wishlist">
                                                                        <a href="#">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                    <title>heart-shape-outline</title>
                                                                                    <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                            </svg>
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
                                                                    The 30-inch Apple Cinema HD Display delivers an amazing 2560
                                                                    x 1600 pixel resolution. Designed sp..</p>
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
                                                                                <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                    <title>eye-open</title>
                                                                                    <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#eye-open" x="28%" y="28%">
                                                                                </use>
                                                                            </svg>
                                                                            <span className="lblcart">Quick View</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="btn-wishlist">
                                                                        <a href="#">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                    <title>heart-shape-outline</title>
                                                                                    <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                            </svg>
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
                                                                    The 30-inch Apple Cinema HD Display delivers an amazing 2560
                                                                    x 1600 pixel resolution. Designed sp..</p>
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
                                                                                <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                    <title>eye-open</title>
                                                                                    <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#eye-open" x="28%" y="28%">
                                                                                </use>
                                                                            </svg>
                                                                            <span className="lblcart">Quick View</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="btn-wishlist">
                                                                        <a href="#">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                    <title>heart-shape-outline</title>
                                                                                    <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                                </symbol>
                                                                            </svg>
                                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                                <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div id="_mobile_left_column" className="row" />
                    <div id="_mobile_right_column" className="row" />
                    <div className="clearfix" />
                </div>
            </div>
        </>
    )
}

export default ProductDetails