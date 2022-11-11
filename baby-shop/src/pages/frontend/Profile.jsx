import React from 'react'
import { Link, Outlet } from 'react-router-dom';
// import Header from './shared/Header';

function Profile() {
    return (
        <>
            <div className='row'>
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">

                    <div className="sidebar-sticky">
                        <div className='rounded-circle border border-primary m-3'>
                            <div className='rounded-circle overflow-hidden  border border-primary p-1'>
                                <img className='rounded-circle img-thumbnail' src="https://prodrive-technologies.com/media/ms3ohf5l/placeholderman.jpg?mode=crop&width=800&height=600" alt="" />
                            </div>

                        </div>
                        <div className='nav flex-column pt-3 '>
                            <div className='card-body border'>
                                <ul className="text-left">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="./dashboard">
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="./orderlist">
                                            Orders
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="./cardlist">
                                            Card
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="./wishlist">
                                            Wish List
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" to="./payment">
                                            Payment
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="./settings">
                                            Setting
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="./logout">
                                            Logout
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">
                                            Goto Website
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='col-md-9 ml-sm-auto col-lg-10 px-md-4'>
                    <Outlet />

                </div>
            </div>


        </>
    )
}

export default Profile;