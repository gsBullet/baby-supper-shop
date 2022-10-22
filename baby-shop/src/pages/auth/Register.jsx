import React from 'react'

function Register() {
    const registrationHandler = (e)=>{
            e.preventDefault();

            // let info = {
            //     Userame: e.target.username.value,
            //     Email: e.target.email.value,
            //     Password: e.target.password.value,
            //     Repassword: e.target.repassword.value
                
            // }
            console.log(e.target);

            let formData = new FormData(e.target);

            // console.log(formData);

            fetch("http://localhost:5000/api/user/register", {
                method: "POST",
                headers: {
                    // 'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                // body:JSON.stringify(info)
                body: formData
               
            })
            .then(res => res.json())
            .then(res =>{
                console.log(res);
            })

    }
    function getUser(){
        fetch("http://localhost:5000/api/user/all")
        .then(res => res.json())
        .then(res =>{
            console.log(res);
        })
    }
    function getUserByEmail(){
        let email ='hasan@gmail.com';
        fetch("http://localhost:5000/api/user/get/"+email)
        .then(res => res.json())
        .then(res =>{
            console.log(res);
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
                                            <button className='btn btn-primary m-3' onClick={getUser}>all user</button>
                                            <button className='btn btn-primary m-3' onClick={getUserByEmail}>get user</button>
                                        </div>
                                        <form  method="post" onSubmit={(e)=>registrationHandler(e)} encType="multipart/form-data" className="card">
                                            <div className="login-form">
                                                <div className="form-group row ">
                                                    <label className="col-md-3 col-sm-12 form-control-label required">Your name</label>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input className="form-control" name="username" type="text" placeholder='Enter your name' />
                                                    </div>
                                                </div>
                                               
                                                <div className="form-group row ">
                                                    <label className="col-md-3 col-sm-12 form-control-label required">Email</label>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input className="form-control" name="email" type="email" placeholder='Enter your valid email' />
                                                    </div>
                                                </div>
                                                <div className="form-group row ">
                                                    <label className="col-md-3 col-sm-12 form-control-label">
                                                        Password
                                                    </label>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input className="form-control" name="password" type="password" placeholder='Strong password please' />
                                                    </div>
                                                </div>
                                                <div className="form-group row ">
                                                    <label className="col-md-3 col-sm-12 form-control-label">
                                                        Re password
                                                    </label>
                                                    <div className="col-md-9 col-sm-12">
                                                        <input className="form-control" name="repassword" type="password" placeholder='Re type please' />
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