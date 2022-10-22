import React from 'react'
import { Link } from 'react-router-dom';
import Nav from './Nav';


function Header() {
    return (
        <>
            <header id="header" className="home">
                <div className="header-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 left-nav">
                                {/* Block search  */}
                                <div id="_desktop_seach_widget">
                                    <div id="search_widget" className="search-widget">
                                        <span className="search-logo hidden-lg-up">
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                <symbol id="magnifying-glass" viewBox="0 0 910 910"><title>magnifying-glass</title><path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5 S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9 C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z" /></symbol>
                                            </svg>
                                            <svg className="icon" viewBox="0 0 30 30"><use xlinkHref="#magnifying-glass" x="22%" y="20%" /></svg>
                                        </span>
                                        <form method="get" action="#">
                                            <input name="controller" defaultValue="search" type="hidden" />
                                            <span role="status" aria-live="polite" className="ui-helper-hidden-accessible" /><input name="s" defaultValue placeholder="Search our catalog" className="ui-autocomplete-input" autoComplete="off" type="text" />
                                            <button type="submit">
                                                <i className="material-icons search"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 right-nav">
                                <div className="userinfo-inner">
                                    <ul className="userinfo">
                                        <li className="log-in">
                                            <a href="loginpage.html" id="customer_login_link">Log in</a>
                                        </li>
                                        <li className="create_account">
                                            <a href="user-register.html" id="customer_register_link">Create Account</a>
                                        </li>
                                        <li className="wishlist">
                                            <a href="mywishlistpage.html">Wishlist</a>
                                        </li>
                                        <li className="checkout">
                                            <a href="checkoutpage.html">Checkout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            {/* --------------------desktop_logo------------ */}
                            <div id="desktop_logo" className="col-lg-3 col-md-5 col-sm-12 col-xs-12">
                                <Link to="/">
                                    <img className="logo img-responsive" src="./assets/images/header-logo.png" alt="Demo Shop" />
                                </Link>
                            </div>
                            <div className="header-top-right offset-xl-2 col-xl-7 col-lg-9 col-md-7 col-sm-12 col-xs-12">
                                {/* --------------------services------------ */}
                                <div id="ishiservices" className="ishiservicesblock">
                                    {/* -------------------shopping cart----------- */}
                                    <div id="_desktop_cart" className='desktop_card'>
                                        <div className="blockcart cart-preview inactive">
                                            <div className="header">
                                                <span className="cart-link">
                                                    <span className="cart-img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                            <symbol id="shopping-cart" viewBox="0 0 850 850"><title>shopping-cart</title>
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
                                                        <svg className="icon" viewBox="0 0 40 40"><use xlinkHref="#shopping-cart" x="15%" y="18%" /></svg>
                                                    </span>
                                                    <span className="cart-content">
                                                        <span className="cart-name">
                                                            <span className="cart-products-count">3</span> items
                                                        </span>
                                                        <span className="cart-products-count hidden-lg-up">3</span>
                                                    </span>
                                                </span>
                                                {/* <div className="cart-dropdown">
                                                    <div className="product-container">
                                                        <div className="product">
                                                            <a className="product-image" href="#">
                                                                <img src="./assets/images/product/1.jpg" alt="Simul dolorem voluptaria" />
                                                            </a>
                                                            <div className="product-detail">
                                                                <div className="product-name">
                                                                    <span className="quantity-formated">
                                                                        <span className="quantity">1</span>
                                                                        &nbsp;x&nbsp;
                                                                    </span>
                                                                    <a className="cart_block_product_name" href="#">Simul dolorem voluptaria</a>
                                                                </div>
                                                                <div className="price">$16.51</div>
                                                                <ul className="product-atributes">
                                                                    <li className="atributes">
                                                                        <span className="label">Size:</span>
                                                                        <span className="value">S</span>
                                                                    </li>
                                                                    <li className="atributes">
                                                                        <span className="label">Color:</span>
                                                                        <span className="value">Orange</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="remove-product">
                                                                <a className="remove-from-cart" rel="nofollow" href="#">
                                                                    <i className="material-icons">delete</i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product">
                                                            <a className="product-image" href="#">
                                                                <img src="assets/images/product/3.jpg" alt="Omnis dicam mentitum" />
                                                            </a>
                                                            <div className="product-detail">
                                                                <div className="product-name">
                                                                    <span className="quantity-formated">
                                                                        <span className="quantity">1</span>
                                                                        &nbsp;x&nbsp;
                                                                    </span>
                                                                    <a className="cart_block_product_name" href="#">Omnis dicam mentitum</a>
                                                                </div>
                                                                <div className="price">$25.99</div>
                                                                <ul className="product-atributes">
                                                                    <li className="atributes">
                                                                        <span className="label">Size:</span>
                                                                        <span className="value">S</span>
                                                                    </li>
                                                                    <li className="atributes">
                                                                        <span className="label">Color:</span>
                                                                        <span className="value">Orange</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="remove-product">
                                                                <a className="remove-from-cart" rel="nofollow" href="#">
                                                                    <i className="material-icons">delete</i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product">
                                                            <a className="product-image" href="#">
                                                                <img src="assets/images/product/5.jpg" alt="Eled doming deserunt" />
                                                            </a>
                                                            <div className="product-detail">
                                                                <div className="product-name">
                                                                    <span className="quantity-formated">
                                                                        <span className="quantity">1</span>
                                                                        &nbsp;x&nbsp;
                                                                    </span>
                                                                    <a className="cart_block_product_name" href="#">Eled doming deserunt</a>
                                                                </div>
                                                                <div className="price">$28.98</div>
                                                                <ul className="product-atributes">
                                                                    <li className="atributes">
                                                                        <span className="label">Size:</span>
                                                                        <span className="value">S</span>
                                                                    </li>
                                                                    <li className="atributes">
                                                                        <span className="label">Color:</span>
                                                                        <span className="value">Yellow</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="remove-product">
                                                                <a className="remove-from-cart" rel="nofollow" href="#">
                                                                    <i className="material-icons">delete</i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="billing-info">
                                                        <div className="billing subtotal-info">
                                                            <span className="label">Subtotal</span>
                                                            <span className="value">$71.48</span>
                                                        </div>
                                                        <div className="billing shipping-info">
                                                            <span className="label">Shipping</span>
                                                            <span className="value">$7.00</span>
                                                        </div>
                                                        <div className="billing tax-info">
                                                            <span className="label">Taxes</span>
                                                            <span className="value">$0.00</span>
                                                        </div>
                                                        <div className="billing total-info">
                                                            <span className="label">Total</span>
                                                            <span className="value">$78.48</span>
                                                        </div>
                                                    </div>
                                                    <div className="cart-btn col-xs-12">
                                                        <a href="checkoutpage.html" className="btn btn-primary checkout">Checkout</a>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* -------------------headercontact----------- */}
                                    <div className="contact-num">
                                        <a href="contactpage.html">
                                            <div className="call-img">
                                                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                    <symbol id="call" viewBox="0 0 50 50"><title>call</title>
                                                        <path d="M16.333,0C7.327,0,0,7.327,0,16.334c0,9.006,7.326,16.333,16.333,16.333c0.557,0,1.007-0.451,1.007-1.006 c0-0.556-0.45-1.007-1.007-1.007c-7.896,0-14.318-6.424-14.318-14.319c0-7.896,6.422-14.32,14.318-14.32 c7.896,0,14.317,6.424,14.317,14.32c0,3.299-1.756,6.571-4.269,7.955c-0.913,0.502-1.903,0.751-2.959,0.761 c0.634-0.378,1.183-0.887,1.591-1.531c0.08-0.121,0.186-0.226,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.516 c0.243-1.066-4.658-3.143-5.084-1.815c-0.154,0.493-0.39,2.048-0.699,2.458c-0.275,0.365-0.953,0.193-1.377-0.168 c-1.117-0.952-2.364-2.352-3.458-3.457l0.002-0.001c-0.028-0.029-0.062-0.062-0.092-0.091c-0.031-0.03-0.062-0.062-0.093-0.092l0,0 c-1.106-1.093-2.506-2.338-3.457-3.458c-0.36-0.424-0.534-1.1-0.168-1.376c0.41-0.31,1.966-0.543,2.458-0.698 c1.326-0.425-0.75-5.329-1.816-5.084c-0.832,0.195-1.727,0.225-2.516,0.552c-0.134,0.056-0.238,0.16-0.359,0.24 c-2.799,1.775-3.16,6.083-0.428,9.292c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09 c0.03,0.031,0.059,0.062,0.088,0.095l0.006-0.006c1.16,1.118,2.535,2.764,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098 c3.67-2.021,5.312-6.338,5.312-9.719C32.667,7.327,25.339,0,16.333,0z" />
                                                    </symbol>
                                                </svg>
                                                <svg className="icon" viewBox="0 0 40 40"><use xlinkHref="#call" x="20%" y="18%" /></svg>
                                            </div>
                                            <div className="call-num">+00 900 123456789</div>
                                        </a>
                                    </div>
                                    {/* ------------------mobile media--------- */}
                                    <div id="menu-icon" className="menu-icon hidden-lg-up">
                                        <i className="fa fa-bars" aria-hidden="true" />
                                    </div>
                                    <div id="_mobile_cart" />
                                    <div id="_mobile_seach_widget" />
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------------NAV BAR ------------------- */}
                <Nav />
            </header>
            {/* -------------------mobile media---------- */}
            <div id="mobile_top_menu_wrapper" className="hidden-lg-up" style={{ display: 'none' }}>
                <div id="top_menu_closer">
                    <i className="material-icons"></i>
                </div>
                <div className="js-top-menu mobile" id="_mobile_top_menu" />
            </div>
        </>
    )
}

export default Header;