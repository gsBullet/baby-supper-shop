import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import OrderLIst from './profilePages/OrderList';
// import Header from './shared/Header';

function Profile() {
    const { checkAuth, logout } = useContext(AuthContext);
    return (
        <>
            <div className='bg-success p-3 text-center'>
                <ul className="top-menu" id="top-menu">
                <li className="cms-page" id="category-12">
                        <Link className="nav-link" to="/profile">
                            Profile
                        </Link>
                    </li>
                    <li className="cms-page" id="category-12">
                        <Link className="nav-link" to={'orderlist'}>
                            Orders
                        </Link>
                    </li>
                    <li className="cms-page" id="category-12">
                        <Link className="nav-link" to={"card"}>
                            Card
                        </Link>
                    </li>
                    <li className="cms-page" id="category-12">
                        <Link className="nav-link" to="./wishlist">
                            Wish List
                        </Link>
                    </li>
                    <li className="cms-page" id="category-12">
                        <a className="nav-link" to="./payment">
                            Payment
                        </a>
                    </li>
                    <li className="cms-page" id="category-12">
                        <Link className="nav-link" to="/settings">
                            Setting
                        </Link>
                    </li>
                    <li className="cms-page" id="category-12">
                        {
                            checkAuth.isAuth && checkAuth.data.role === 'customer' ?

                                <a href="#"
                                    onClick={() => window.confirm('logout') && logout()}
                                    className="nav-link">
                                    Logout
                                </a>
                                :
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                        }
                    </li>
                    <li className="cms-page" id="category-12">
                        <Link className="nav-link" to="/">
                            Goto Website
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Profile;