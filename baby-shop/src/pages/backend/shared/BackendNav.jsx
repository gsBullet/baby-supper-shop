import React from 'react'
import { Link } from 'react-router-dom';

function BackendNav() {
    return (
        <>
            <nav id="sidebarMenu" className="col-md-3 col-lg-3 d-md-block bg-light sidebar collapse">
                <div className="sidebar-sticky col-lg-11">
                    <div className='text-center'>
                        <div className='rounded-circle overflow-hidden  border border-primary p-1'>
                            <img className='rounded-circle border-primary img-fluid img-thumbnail' src="https://prodrive-technologies.com/media/ms3ohf5l/placeholderman.jpg?mode=crop&width=800&height=600" alt="" />
                        </div>
                        <h4 className='m-2'>
                        <i className='fas fa-user'></i> &nbsp;
                            Mr Jhon</h4>
                    </div>
                    <div className='nav flex-column pt-3 '>
                        <div className='card'>
                            <ul className="text-left">
                                <li className="nav-item">
                                    <Link className="nav-link active " to="./dashboard">
                                        <i className='fas fa-home'></i> &nbsp;
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="">
                                        <i class="fa-solid fa-edit"></i>&nbsp;
                                        User Management  
                                    </Link>
                                </li> 
                                <li className="nav-item">
                                    <Link className="nav-link" to="./contact">
                                        <i class="fa-solid fa-edit"></i>&nbsp;
                                        Contact Message
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="./contact">
                                        <i class="fa-solid fa-edit"></i>&nbsp;
                                        Subscribers
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="./card">
                                        <i class="fa-solid fa-edit"></i>&nbsp;
                                        Orders
                                    </Link>
                                </li>
                                {/* Products management */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i class="fa-solid fa-edit"></i>&nbsp;
                                        Products management
                                    </a>
                                    <ul>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/dashboard/all-products">
                                                <i class="fa-solid fa-list"></i>&nbsp;
                                                All Products
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/dashboard/categories">
                                                <i class="fa-solid fa-list"></i>&nbsp;
                                                All Category
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="./card">
                                                <i class="fa-solid fa-list"></i>&nbsp;
                                                Reporting
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                {/* Blog management */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i class="fa-solid fa-edit"></i>&nbsp;
                                        Blog management
                                    </a>
                                    <ul>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="./card">
                                                <i class="fa-solid fa-list"></i>&nbsp;
                                                All Blogs
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="./card">
                                                <i class="fa-solid fa-list"></i>&nbsp;
                                                Blog Category
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="./card">
                                                <i class="fa-solid fa-list"></i>&nbsp;
                                                Comments
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                {/* Frontend management */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i class="fa-solid fa-edit"></i>&nbsp;
                                        Frontend management
                                    </a>
                                    <ul>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="./card">
                                                <i class="fa-solid fa-list"></i>&nbsp;
                                                Banners
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="./card">
                                                <i class="fa-solid fa-list"></i>&nbsp;
                                                Basic Info 
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="./card">
                                                <i class="fa-solid fa-list"></i>&nbsp;
                                                Featuers
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="./card">
                                                <i class="fa-solid fa-list"></i>&nbsp;
                                                Review
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="./card">
                                                <i class="fa-solid fa-list"></i>&nbsp;
                                                Advertise
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="./card">
                                                <i class="fa-solid fa-list"></i>&nbsp;
                                                DiscountProducts
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="./card">
                                                <i class="fa-solid fa-list"></i>&nbsp;
                                                Brands
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        <i className='fas fa-globe'></i>&nbsp;
                                        Goto Website
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default BackendNav