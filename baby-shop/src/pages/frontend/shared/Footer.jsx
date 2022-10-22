import React from 'react'

function Footer() {
    return (
        <>
            <footer id="footer">
                        <div className="footer-container">
                            <div className="container">
                                <div className="row">
                                    {/* -------------------storeinfo---------- */}
                                    <div id="ishistoreinfo" className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                        <div id="ishistoreinfo-container" className="ishistoreinfo-inner">
                                            <a href="index.html" className="store-logo">
                                                <img src="assets/images/footer-logo.png" alt="footer-logo" />
                                            </a>
                                            <div className="store-description">
                                                <p>This is Photoshops version of Lorem fenIpsum. Proin gravida nibh sagitt sem nibh id elit.Proin gravida nibh sagitt sem nibh id elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="_mobile_storeinfo" className="block-contact col-md-12 col-sm-12 col-xs-12 footer-block" />
                                    {/* -------------------myaccount---------- */}
                                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 links wrapper footer-block">
                                        <h3 className="h3 title_block hidden-md-down">Your account</h3>
                                        <div className="footer-title clearfix hidden-lg-up collapsed" data-target="#footer_account_list" data-toggle="collapse">
                                            <span className="h3">Your account</span>
                                            <span className="float-xs-right">
                                                <span className="navbar-toggler collapse-icons">
                                                    <i className="material-icons add"></i>
                                                    <i className="material-icons remove"></i>
                                                </span>
                                            </span>
                                        </div>
                                        <ul id="footer_account_list" className="footer-dropdown collapse">
                                            <li>
                                                <a className="cms-page-link" href="#">
                                                    Personal info
                                                </a>
                                            </li>
                                            <li>
                                                <a className="cms-page-link" href="#">
                                                    Orders
                                                </a>
                                            </li>
                                            <li>
                                                <a className="cms-page-link" href="#">
                                                    Credit slips
                                                </a>
                                            </li>
                                            <li>
                                                <a className="cms-page-link" href="#">
                                                    Addresses
                                                </a>
                                            </li>
                                            <li>
                                                <a className="cms-page-link" href="#">
                                                    My Wishlists
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* -------------------linklist---------- */}
                                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 links wrapper footer-block">
                                        <h3 className="h3 title_block hidden-md-down">Product</h3>
                                        <div className="footer-title clearfix hidden-lg-up collapsed" data-target="#footer_sub_menu_83280" data-toggle="collapse">
                                            <span className="h3 title_block">Product</span>
                                            <span className="navbar-toggler collapse-icons">
                                                <i className="material-icons add"></i>
                                                <i className="material-icons remove"></i>
                                            </span>
                                        </div>
                                        <ul id="footer_sub_menu_83280" className="footer-dropdown collapse">
                                            <li>
                                                <a className="cms-page-link" href="#">
                                                    Delivery
                                                </a>
                                            </li>
                                            <li>
                                                <a className="cms-page-link" href="#">
                                                    Legal Notice
                                                </a>
                                            </li>
                                            <li>
                                                <a className="cms-page-link" href="#">
                                                    Prices drop
                                                </a>
                                            </li>
                                            <li>
                                                <a className="cms-page-link" href="#">
                                                    New products
                                                </a>
                                            </li>
                                            <li>
                                                <a className="cms-page-link" href="#">
                                                    Best sales
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* -------------------contactblock ---------- */}
                                    <div id="_desktop_storeinfo" className="block-contact col-lg-3 col-md-12 col-sm-12 col-xs-12 footer-block">
                                        <h3 className="h3 title_block hidden-md-down">Store information</h3>
                                        <div id="contact-info-container" className="footer-contact">
                                            <div className="block address col-lg-12 col-md-4 col-sm-4 col-xs-12">
                                                <span className="icon"><i className="material-icons"></i></span>
                                                <div className="content">Demo Shop<br />01 Demo Street<br />France</div>
                                            </div>
                                            <div className="block phone col-lg-12 col-md-4 col-sm-4 col-xs-12">
                                                <span className="icon phone"><i className="material-icons"></i></span>
                                                <div className="content">
                                                    <a href="#">+00 900 123456789</a>
                                                </div>
                                            </div>
                                            <div className="block email col-lg-12 col-md-4 col-sm-4 col-xs-12">
                                                <span className="icon"><i className="material-icons"></i></span>
                                                <div className="content">
                                                    <a href="#">admin@gmail.com</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-after">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-xs-12">
                                        {/* -------------------copyrights---------- */}
                                        <p className="footer-aftertext">
                                            <a className="_blank" href="#" target="_blank">
                                                Copyright 2020 All Rights Reserved
                                            </a>
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-xs-12">
                                        {/* -------------------payment block---------- */}
                                        <div className="paymentlogo-container">
                                            <img src="assets/images/paymenticon/1.png" alt="Discover" />
                                            <img src="assets/images/paymenticon/2.png" alt="Visa" />
                                            <img src="assets/images/paymenticon/3.png" alt="JCB" />
                                            <img src="assets/images/paymenticon/4.png" alt="PayPal" />
                                            <img src="assets/images/paymenticon/5.png" alt="Master Card" />
                                            <img src="assets/images/paymenticon/6.png" alt="American Express" />
                                        </div>
                                    </div>
                                    <div id="ishispecialdeals-icon">
                                        <div id="ishispecialdeal" className="ishispecialdeals">
                                            <div id="ishispecialdeals-carousel" className="owl-carousel">
                                                <div className="item product-thumb" data-countdowntime="2020-11-30">
                                                    <div className="row">
                                                        <div className="image col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/1.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/2.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="caption col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                                            <div className="product-title"><a href="#">Aroma Mocha</a></div>
                                                            <p className="price">
                                                                <span className="regular price-old">$55.00</span>
                                                                <span className="price-discount">9%</span>
                                                                <span className="price-sale">$50.00 </span>
                                                            </p>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                            <div className="countdown-container">
                                                                <div className="countdown-text">The offer ends in : </div>
                                                                <div className="countdown-days counter">
                                                                    <span className="data" />
                                                                    <span className="lbl">Days</span>
                                                                </div>
                                                                <div className="countdown-hours counter">
                                                                    <span className="data" />
                                                                    <span className="lbl">Hours</span>
                                                                </div>
                                                                <div className="countdown-minutes counter">
                                                                    <span className="data" />
                                                                    <span className="lbl">Min</span>
                                                                </div>
                                                                <div className="countdown-seconds counter">
                                                                    <span className="data" />
                                                                    <span className="lbl">Sec</span>
                                                                </div>
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
                                                                <div className="btn-cart">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="addtocart" viewBox="0 0 1200 1200"><title>addtocart</title>
                                                                                <path d="M194.59,382.711c-35.646,0-64.646,29-64.646,64.646s29,64.646,64.646,64.646c35.646,0,64.646-29,64.646-64.646
                                S230.235,382.711,194.59,382.711z M194.59,473.215c-14.261,0-25.858-11.597-25.858-25.858c0-14.261,11.597-25.858,25.858-25.858
                                c14.254,0,25.858,11.597,25.858,25.858C220.448,461.617,208.851,473.215,194.59,473.215z" />
                                                                                <path d="M385.941,382.711c-35.646,0-64.646,29-64.646,64.646s29,64.646,64.646,64.646c35.646,0,64.646-29,64.646-64.646
                                S421.587,382.711,385.941,382.711z M385.941,473.215c-14.261,0-25.858-11.597-25.858-25.858
                                c0-14.261,11.597-25.858,25.858-25.858c14.261,0,25.858,11.597,25.858,25.858C411.799,461.617,400.202,473.215,385.941,473.215z" />
                                                                                <path d="M498.088,126.274c-3.685-4.629-9.27-7.324-15.179-7.324H143.326l-17.629-89.095c-1.545-7.803-7.699-13.873-15.528-15.308
                                L32.594,0.325C22.038-1.621,11.953,5.368,10.02,15.905s5.042,20.641,15.58,22.574l64.607,11.843l56.914,287.667
                                c1.797,9.083,9.768,15.631,19.025,15.631h271.512c9.031,0,16.86-6.225,18.896-15.037l45.252-195.876
                                C503.137,136.947,501.767,130.896,498.088,126.274z M422.233,314.833H182.074l-31.075-157.089h307.519L422.233,314.833z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#addtocart" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Add to Cart</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item product-thumb" data-countdowntime="2020-12-30">
                                                    <div className="row">
                                                        <div className="image col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/4.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/5.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="caption col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                                            <div className="product-title"><a href="#">Comdaq Stroller</a></div>
                                                            <p className="price">
                                                                <span className="regular price-old">$20.00</span>
                                                                <span className="price-discount">25%</span>
                                                                <span className="price-sale">$15.00 </span>
                                                            </p>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                            <div className="countdown-container">
                                                                <div className="countdown-text">The offer ends in : </div>
                                                                <div className="countdown-days counter">
                                                                    <span className="data" />
                                                                    <span className="lbl">Days</span>
                                                                </div>
                                                                <div className="countdown-hours counter">
                                                                    <span className="data" />
                                                                    <span className="lbl">Hours</span>
                                                                </div>
                                                                <div className="countdown-minutes counter">
                                                                    <span className="data" />
                                                                    <span className="lbl">Min</span>
                                                                </div>
                                                                <div className="countdown-seconds counter">
                                                                    <span className="data" />
                                                                    <span className="lbl">Sec</span>
                                                                </div>
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
                                                                <div className="btn-cart">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="addtocart" viewBox="0 0 1200 1200"><title>addtocart</title>
                                                                                <path d="M194.59,382.711c-35.646,0-64.646,29-64.646,64.646s29,64.646,64.646,64.646c35.646,0,64.646-29,64.646-64.646
                                S230.235,382.711,194.59,382.711z M194.59,473.215c-14.261,0-25.858-11.597-25.858-25.858c0-14.261,11.597-25.858,25.858-25.858
                                c14.254,0,25.858,11.597,25.858,25.858C220.448,461.617,208.851,473.215,194.59,473.215z" />
                                                                                <path d="M385.941,382.711c-35.646,0-64.646,29-64.646,64.646s29,64.646,64.646,64.646c35.646,0,64.646-29,64.646-64.646
                                S421.587,382.711,385.941,382.711z M385.941,473.215c-14.261,0-25.858-11.597-25.858-25.858
                                c0-14.261,11.597-25.858,25.858-25.858c14.261,0,25.858,11.597,25.858,25.858C411.799,461.617,400.202,473.215,385.941,473.215z" />
                                                                                <path d="M498.088,126.274c-3.685-4.629-9.27-7.324-15.179-7.324H143.326l-17.629-89.095c-1.545-7.803-7.699-13.873-15.528-15.308
                                L32.594,0.325C22.038-1.621,11.953,5.368,10.02,15.905s5.042,20.641,15.58,22.574l64.607,11.843l56.914,287.667
                                c1.797,9.083,9.768,15.631,19.025,15.631h271.512c9.031,0,16.86-6.225,18.896-15.037l45.252-195.876
                                C503.137,136.947,501.767,130.896,498.088,126.274z M422.233,314.833H182.074l-31.075-157.089h307.519L422.233,314.833z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#addtocart" x="28%" y="28%" /></svg>
                                                                        <span className="lblcart">Add to Cart</span>
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
                        </div>
                        <a id="slidetop" href="#" />
                    </footer>
        </>
    )
}

export default Footer