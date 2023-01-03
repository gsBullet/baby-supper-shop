import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import httpRequest from '../../hooks/httpRequest';

function Register() {

    const [formErrors, setFormErrors] = useState();
    const { checkAuth, setCheckAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (checkAuth.isAuth) {
            navigate('/')
        }
    }, [checkAuth]);

    const registrationHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        setFormErrors({});

        console.log(formData);
        httpRequest('/user/register', 'POST', new FormData(e.target))
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
                                {e.msg}
                            </li>
                        )
                    });
                    setFormErrors(tempErrors);
                }
                if(res.status === 201){
                    e.target.reset();
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
            <div>
                {/* --------------------Breadcrumb------------ */}
                <div className="breadcrumb-container">
                    <nav data-depth={2} className="breadcrumb container">
                        <h1 className="h1 category-title breadcrumb-title">Create Account</h1>
                        <ul>
                            <li>
                                <a href="#">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Create Account</span>
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
                                            <h2 className="title"><span>Create Account</span></h2>
                                            {/* <button className='btn btn-primary m-3' onClick={getUser}>all user</button>
                                            <button className='btn btn-primary m-3' onClick={getUserByEmail}>get user</button>
                                            <button className='btn btn-primary m-3' onClick={deleteUserByEmail}>delete user</button> */}
                                        </div>
                                        <form method="post" onSubmit={(e) => registrationHandler(e)} encType="multipart/form-data" className="card">
                                            <div className="login-form">
                                                <div className="form-group row ">
                                                    <label className="col-md-3 col-sm-12 form-control-label required">Your name</label>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input className="form-control" name="username" type="text" placeholder='Enter your name' />
                                                        <ul>
                                                            {formErrors?.username}
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="form-group row ">
                                                    <label className="col-md-3 col-sm-12 form-control-label required">Email</label>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input className="form-control" name="email" type="email" placeholder='Enter your valid email' />
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
                                                        <input className="form-control" name="password" type="password" placeholder='Strong password please' />
                                                         <ul>
                                                            {formErrors?.password}
                                                        </ul>
                                                        <ul>
                                                            {formErrors?.repassword}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="form-group row ">
                                                    <label className="col-md-3 col-sm-12 form-control-label">
                                                        Re password
                                                    </label>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input className="form-control" name="repassword" type="password" placeholder='Re-type your password' />
                                                    </div>
                                                </div>
                                                <div className="form-group text-center">
                                                    <input className="btn btn-primary" defaultValue="Create Account" type="submit" />
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

export default Register