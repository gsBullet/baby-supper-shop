import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import httpRequest from '../../hooks/httpRequest';

function Login() {
    const [formErrors, setFormErrors] = useState();
    const { checkAuth, setCheckAuth } = useContext(AuthContext);
    const navigate = useNavigate();


    useEffect(() => {
        let pathName = window?.authPrevlink?.pathname;
        delete window?.authPrevlink;
        if(checkAuth.isAuth && pathName){
            navigate(pathName);
        }
        else if (checkAuth.isAuth && checkAuth.data.role === 'customer') {
            navigate('/profile')
        }
        else if (checkAuth.isAuth && checkAuth.data.role === 'admin') {
            navigate('/dashboard')
        }
        else{

        }
    }, [checkAuth]);


    function loginHandler(e) {
        e.preventDefault();

        setFormErrors({});
        httpRequest('/user/login','POST', new FormData(e.target))
            .then(res => {
                if (res.status === 422) {
                    let tempErrors = {
                        username: [],
                        email: [],
                        password: [],
                        repassword: []
                    };
                    res.data.errors.forEach((e, index) => {
                        tempErrors[e.param].push(
                            <li key={index} className='text-danger'>
                                {
                                    e.msg
                                }
                            </li>
                        )
                    });
                    setFormErrors(tempErrors);
                }
                if (res.status === 200) {
                    window.localStorage.setItem('token', res.data.token);
                    setCheckAuth({
                        isAuth: true,
                        token: res.data.token,
                        data:{
                            email: res.data.email,
                            username: res.data.username,
                            role: res.data.role,
                        }
                    })
                    
                }
            })
    }
    return (
        <>
            {
                !checkAuth?.isAuth ?

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
                                                <form action="#" onSubmit={loginHandler} method="post" encType="multipart/form-data" className="card">
                                                    <div className="login-form">
                                                        <div className="form-group row ">
                                                            <label className="col-md-3 col-sm-12 form-control-label required">Email</label>
                                                            <div className="col-md-9 col-sm-12">
                                                                <input className="form-control" name="email" type="email" />
                                                                <ul>
                                                                    {formErrors?.email}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row ">
                                                            <label className="col-md-3 col-sm-12 form-control-label">
                                                                Password
                                                            </label>
                                                            <div className="col-md-9 col-sm-12">
                                                                <input className="form-control" name="password" type="password" />
                                                                <ul>
                                                                    {formErrors?.password}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="form-group text-center">
                                                            <div className="link">
                                                                <a href="#">Forgot your password?</a>
                                                                <Link to="/register">Register?</Link>
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
                    :
                    ' '
            }
        </>
    )
}

export default Login