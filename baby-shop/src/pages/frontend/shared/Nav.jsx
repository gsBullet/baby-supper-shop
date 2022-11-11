import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

function Nav() {
    const { checkAuth, logout } = useContext(AuthContext);
    async function tokenCheck() {
        let req = await fetch("http://localhost:5000/api/user/get/635bb605e9d0af29a76857ae", {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token')
            }
        });

        let res = await req.json();
        // console.log(res);

    }
    return (
        <>
            <div className="nav-full-width">
                <div className="container">
                    <div className="row">
                        {/* ------------------mega menu----------- */}
                        <div id="_desktop_top_menu" className="menu js-top-menu hidden-sm-down">
                            <ul className="top-menu" id="top-menu">
                                <li className="cms-page" id="category-12">
                                    <Link className="dropdown-item" to="/" >
                                        Home
                                    </Link>
                                </li>
                                <li className="category" id="category-13">
                                    <Link className="dropdown-item" to="/allproducts" >
                                        All Products
                                    </Link>
                                </li>
                                <li className="cms-page" id="cms-page-4">
                                    <Link className="dropdown-item" to="/product-details">
                                        products Details
                                    </Link>
                                </li>

                                <li className="cms-page" id="cms-page-4">
                                    <Link className="dropdown-item" to="/about-us" >
                                        About us
                                    </Link>
                                </li>

                                <li className="cms-page" id="cms-page-1">
                                    <Link className="dropdown-item" to="/contact">
                                        Contact us
                                    </Link>
                                </li>
                                <li className="cms-page" id="cms-page-1">
                                    <Link className="dropdown-item" to="/profile">
                                        Profile
                                    </Link>
                                </li>
                                <li className="cms-page" id="cms-page-1">
                                    <a onClick={tokenCheck} className="dropdown-item" href="#">
                                        token test
                                    </a>
                                </li>
                                <li className="cms-page" id="cms-page-1">
                                    {
                                        !checkAuth.isAuth ?
                                            <Link className="dropdown-item" to="/login">
                                                Login
                                            </Link>
                                            :
                                            <a href="#"
                                                onClick={() => window.confirm('logout') && logout()}
                                                className="dropdown-item">Logout</a>
                                    }

                                </li>
                                <li className="cms-page" id="cms-page-1">
                                    <Link className="dropdown-item" to="/dashboard">
                                        Dashboard
                                    </Link>
                                </li>
                            </ul>
                            <div className="clearfix" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;