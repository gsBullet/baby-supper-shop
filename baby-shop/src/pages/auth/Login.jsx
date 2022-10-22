import React from 'react'

function Login() {
    
    return (
        <>
            <div>
                {/* --------------------Breadcrumb------------ */}
                <div className="breadcrumb-container">
                    <nav data-depth={2} className="breadcrumb container">
                        <h1 className="h1 category-title breadcrumb-title">Login</h1>
                        <ul>
                            <li>
                                <a href="#">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Login</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* -----------Cart page----------- */}
                <section id="wrapper">
                    <div className="container">
                        <div className="row">
                            <div id="content-wrapper" className="col-12">
                                <section id="main">
                                    <div className="login-page">
                                        <div className="block-title">
                                            <h2 className="title"><span>Login</span></h2>
                                        </div>
                                        <form action="http://demo.ishithemes.com/html/toytown/Layout001/index.html" method="post" encType="multipart/form-data" className="card">
                                            <div className="login-form">
                                                <div className="form-group row ">
                                                    <label className="col-md-3 col-sm-12 form-control-label required">Email</label>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input className="form-control" name="email" type="email" defaultValue />
                                                    </div>
                                                </div>
                                                <div className="form-group row ">
                                                    <label className="col-md-3 col-sm-12 form-control-label">
                                                        Password
                                                    </label>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input className="form-control" name="password" type="password" defaultValue />
                                                    </div>
                                                </div>
                                                <div className="form-group text-center">
                                                    <div className="link">
                                                        <a href="#">Forgot your password?</a>
                                                        <a href="#">Register?</a>
                                                    </div>
                                                </div>
                                                <div className="form-group text-center">
                                                    <input className="btn btn-primary" defaultValue="Sign In" type="submit" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Login