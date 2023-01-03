import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import httpRequest from '../../../../../hooks/httpRequest';

function EditCategory() {

    const [data, setData] = useState([]);
    const [category, setCategory] = useState({});
    const { id, title } = useParams();

    useEffect(() => {
        getCategory();
        getCategoryById();
    }, [])
    const getCategoryById = () => {
        httpRequest('/category/get/'+ id)
            .then(res => {
                setCategory(res.data);
            })
    }
    const getCategory = () => {
        httpRequest('/category/all')
            .then(res => {
                // console.log(res);
                setData(res.data);
            })
    }


    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        formData.append('id', id);
        httpRequest('/category/update', 'POST', formData)
            .then(res => {
                window.alert('category successfuly updated');
                getCategoryById();
                getCategory();
            })
    }

    return (
        <div className="card">
            <div className="card-header d-flex flex-wrap align-items-center justify-content-between ">
                <h4 className='m-0'>Edit Category</h4>
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
                        <input type="text" defaultValue={category.title} className='form-control' name='title' />
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
                                        i._id !== category._id ?
                                        <li key={i._id}>
                                            <label htmlFor={i._id}>
                                                {
                                                    i._id === category.parent?._id ?
                                                        <input
                                                            defaultChecked
                                                            value={i._id}
                                                            id={i._id}
                                                            name='parent' type="radio" />
                                                        :
                                                        <input
                                                            value={i._id}
                                                            id={i._id}
                                                            name='parent' type="radio" />
                                                }
                                                &nbsp;{i.title}
                                            </label>
                                        </li>
                                        :
                                        ''
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

export default EditCategory