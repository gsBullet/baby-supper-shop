import React from 'react'
import Header from '../../frontend/shared/Header'

function BackendHeader() {
    function toggleMenu() {
        document.getElementById('sidebarMenu').classList.toggle('show');
    }
    return (
        <>
            <div>
                <Header />
                <header className="navbar-dark bg-dark d-flex p-0 shadow">
                    <div className='dashboard_logo '>
                        <a className="navbar-brand inline-block ml-0 p-3" href="#">Company name</a>
                        <button onClick={toggleMenu}
                            className='navbar-toggler' type='button'>
                            <span className='fa fa-align-left' />
                        </button>

                    </div>

                    {/* <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" /> */}
                    <div className="navbar navbar-nav">
                        <div className="nav-item text-nowrap">
                            <a className="nav-link sign-out-btn px-3" href="#">Sign out</a>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default BackendHeader