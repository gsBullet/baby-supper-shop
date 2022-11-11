import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CreateCategory() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getCategory();
    }, [])

    const getCategory = () => {
        fetch('http://localhost:5000/api/category/all', {
            method: "GET",
            headers: {
                authorization: 'Bearer ' + window.localStorage.getItem('token')
            },
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setData(res);
            })
    }


    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        fetch('http://localhost:5000/api/category/create', {
            method: "POST",
            headers: {
                authorization: 'Bearer ' + window.localStorage.getItem('token')
            },
            body: formData,
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                window.alert('category successfuly created');
                e.target.reset();
            })
    }
    return (
        <div className="card">
            <div className="card-header d-flex flex-wrap align-items-center justify-content-between ">
                <h4 className='m-0'>Create Category</h4>
                <div>
                    <Link to="/dashboard/categories"
                        className='btn btn-sm btn-info'>
                        <i className='fas fa-arrow-left'></i> Back
                    </Link>
                </div>
            </div>
            <div className="card-body">
                <form action="" onSubmit={submitHandler}>
                    <div className="form-group mb-3">
                        <label htmlFor="">Title</label>
                        <input type="text" className='form-control' name='title' />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Parent</label>
                        <ul>
                            <li>
                                <label htmlFor="none">
                                    <input defaultChecked value="none" id='none' name='parent' type="radio" />
                                    &nbsp;none
                                </label>
                            </li>
                            {
                                data.map(i => {
                                    return (
                                        <li key={i._id}>
                                            <label htmlFor={i._id}>
                                                <input value={i._id} id={i._id} name='parent' type="radio" />
                                                &nbsp;{i.title}
                                            </label>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <button className='btn btn-secondary'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateCategory