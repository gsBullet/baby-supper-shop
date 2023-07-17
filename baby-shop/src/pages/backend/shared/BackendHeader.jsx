import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';

import Header from '../../frontend/shared/Header'

function BackendHeader() {
    function toggleMenu() {
        document.getElementById('sidebarMenu').classList.toggle('show');
    }
    const { checkAuth, logout } = useContext(AuthContext);
    return (
        <>
            <div className='backendHeader col-12'>
                {/* <Header /> */}
                <header className=" bg-light bg-gradient d-flex p-0 shadow ">
                    <div className='dashboard_logo col-8'>

                        <Link  to='/'>
                            <img className="logo img-responsive" src="/assets/images/header-logo.png" alt="Demo Shop" />
                        </Link>
                        <button onClick={toggleMenu}
                            className='navbar-toggler btn-secondary ml-5' type='button'>
                            <span className='fa fa-align-left' />
                        </button>

                    </div>

                    {/* <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" /> */}
                    <div className="navbar navbar-nav col-4 pt-3">
                        <div className="nav-item text-nowrap">
                            {/* <a className="nav-link sign-out-btn px-3" href="#">Sign out</a> */}

                            {
                                !checkAuth.isAuth ?
                                    <Link className="dropdown-item" to="/login">
                                        Login
                                    </Link>
                                    :
                                    <a href="#"
                                        onClick={() => window.confirm('logout') && logout()}
                                        className="btn btn-secondary px-3">Logout</a>
                            }
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default BackendHeader