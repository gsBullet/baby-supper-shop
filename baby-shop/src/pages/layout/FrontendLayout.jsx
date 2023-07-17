import { Outlet } from 'react-router-dom'
import Footer from '../frontend/shared/Footer'
import Header from '../frontend/shared/Header'
import useFrontendContext from '../../hooks/useFrontendContext'
import { useEffect } from 'react';



function FrontendLayout() {
    const { state, dispatch } = useFrontendContext();
    useEffect(() => {
        dispatch({ fn: '', type: "loadCard", payload: null })
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div id='index'>
                        <main>
                            {/* ---------------HEADER OPTION ---------- */}
                            <Header />
                            {/* --------------------home page------------ */}
                            <Outlet />
                            {/* -----------------footer-------------------- */}
                            <Footer />
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FrontendLayout