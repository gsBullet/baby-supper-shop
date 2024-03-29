import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom';
import Nav from './Nav';
import useFrontendContext from '../../../hooks/useFrontendContext';
import resourcelink from '../../../hooks/resourcelink';
import { AuthContext } from '../../../context/AuthContext';
import Profile from '../Profile';
import CardList from '../profilePages/CardList';
// import Card from '../Card';


function Header() {
    const { checkAuth } = useContext(AuthContext);
    const { state, dispatch } = useFrontendContext();
    // console.log(state);
    let cards = [];

    if (state?.cards) {
        cards = state.cards;
    }
    const { total_cards_amount} = state;
    return (
        <>
            <header id="header" className="home">
                <div>
                    <div className="row">
                        <div className="header-nav">

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
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 float-right text-right">
                            {
                                checkAuth.isAuth && checkAuth.data.role === 'customer' ?
                                    <div className="userinfo-inner">
                                        <ul className="userinfo">
                                            <li className="checkout">
                                                <Link to="/checkout" id="customer_register_link">Checkout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    :
                                    <div className="userinfo-inner ">
                                        <ul className="userinfo">
                                            <li className="log-in">
                                                <Link to="/login" id="customer_login_link">Log in</Link>
                                            </li>
                                            <li className="create_account">
                                                <Link to="/register" id="customer_register_link">Create Account</Link>
                                            </li>
                                        </ul>
                                    </div>
                            }

                        </div>


                        </div>
                    
                        <div className="header-top">

                            {/* --------------------desktop_logo------------ */}
                            <div id="desktop_logo" className="col-lg-3 col-md-5 col-sm-12 col-xs-12">
                                <Link to="/">
                                    <img className="logo img-responsive" src="/assets/images/header-logo.png" alt="Demo Shop" />
                                </Link>
                            </div>
                            <div className="header-top-right offset-xl-2 col-xl-7 col-lg-9 col-md-7 col-sm-12 col-xs-12">
                                {/* --------------------services------------ */}
                                <div id="ishiservices" className="ishiservicesblock">
                                    {/* -------------------shopping cart----------- */}
                                    <div id="_desktop_cart" className='desktop_card '>
                                        <div className="blockcart cart-preview inactive">
                                            <div className="header">
                                                <span className="cart-link">
                                                    <span className="cart-content">
                                                        <span className="cart-name">
                                                            <span className='p-1'>
                                                                <i className='fa fa-shopping-cart'></i>
                                                            </span>
                                                            <span className="cart-products-count">{cards?.length}</span> items
                                                        </span>
                                                        <span className="cart-products-count hidden-lg-up">{cards?.length}</span>
                                                    </span>
                                                </span>
                                                <div className="cart-dropdown">
                                                    <div className="product-container">
                                                        {
                                                            cards?.map((product, index) => {
                                                                return <div key={index} className="product">
                                                                    <a className="product-image" href="#">
                                                                        <img src={resourcelink(product.thumb_image)} alt="Simul dolorem voluptaria" />
                                                                    </a>
                                                                    <div className="product-detail">
                                                                        <div className="product-name">
                                                                            <a className="cart_block_product_name" href="#">
                                                                                {product.title}
                                                                            </a>
                                                                        </div>
                                                                        <div className="price">
                                                                            <span className="quantity-formated">
                                                                                <span className="quantity">{product.qty}</span>
                                                                                &nbsp;x&nbsp;
                                                                            </span>
                                                                            ${product.discount_price || product.price} = ${product.qty * (product.discount_price || product.price)}
                                                                        </div>
                                                                        {/* <ul className="product-atributes">
                                                        <li className="atributes">
                                                            <span className="label">Size:</span>
                                                            <span className="value">S</span>
                                                        </li>
                                                        <li className="atributes">
                                                            <span className="label">Color:</span>
                                                            <span className="value">Orange</span>
                                                        </li>
                                                    </ul> */}
                                                                    </div>
                                                                    <div className="remove-product">
                                                                        <a className="remove-from-cart text-danger p-2 m-3"
                                                                            onClick={() => dispatch({ fn: null, type: 'removeCard', payload: { index } })}
                                                                            rel="nofollow" href="#">
                                                                            <i className="fa-solid fa-trash"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            })
                                                        }


                                                    </div>
                                                    <div className="billing-info">
                                                        {/* <div className="billing subtotal-info">
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
                                    </div> */}
                                                        <div className="billing total-info">
                                                            <span className="label">Total</span>
                                                            <span className="value">${total_cards_amount}</span>
                                                        </div>
                                                    </div>
                                                    <div className="cart-btn col-xs-12">
                                                        <a href="checkoutpage.html" className="btn btn-primary checkout">Checkout</a>
                                                        <Link to={'card'} className="btn btn-primary">Card</Link>
                                                    </div>
                                                </div>
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
                        {/* ----------------NAV BAR ------------------- */}
                        {
                            checkAuth.isAuth && checkAuth.data.role === 'customer' ?
                                <Profile />
                                :
                                <Nav />
                        }
                    </div>
                </div>
            </header >

        </>
    )
}

export default Header;