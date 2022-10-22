import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../frontend/shared/Footer'
import Header from '../frontend/shared/Header'


function FrontendLayout() {
    return (
        <>
            <div id='index'>
                <main>
                     {/* ---------------HEADER OPTION ---------- */}
                     <Header />
                    {/* --------------------hometop------------ */}
                    <Outlet/>
                    
                    
                    {/* -----------------footer-------------------- */}
                    <Footer />
                </main>
            </div>
        </>
    )
}

export default FrontendLayout