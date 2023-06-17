import React from 'react'
import { Outlet } from 'react-router-dom';
import BackendHeader from '../backend/shared/BackendHeader';
import BackendNav from '../backend/shared/BackendNav';


function BackendLayout() {
    return (
        <>
            <div>
                <div id='backend_body'>
                    <BackendHeader />
                    <div className="container-fluid">
                        <div className="row">
                            <BackendNav />
                            <main role="main" className="col-md-8 ml-sm-auto col-lg-9 px-md-3">
                                <Outlet />
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BackendLayout;