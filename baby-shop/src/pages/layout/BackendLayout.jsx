import React from 'react'
import { Outlet } from 'react-router-dom';
import BackendHeader from '../backend/shared/BackendHeader';
import BackendNav from '../backend/shared/BackendNav';


function BackendLayout() {
    return (
        <>
            <div>
               <BackendHeader></BackendHeader>
                <div className="container-fluid">
                    <div className="row">
                        <BackendNav></BackendNav>
                        <main role="main" className="col-md-8 ml-sm-auto col-lg-9 px-md-3">
                            <Outlet/>
                        </main>
                    </div>
                </div>
            </div>



        </>
    )
}

export default BackendLayout;