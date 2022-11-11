import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'

function AllCategory() {
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

    return (
        <div className="card">
            <div className="card-header d-flex flex-wrap align-items-center justify-content-between ">
                <h4 className='m-0'>All Category</h4>
                <div>
                    <Link to="/dashboard/categories/create"
                        className='btn btn-sm btn-info'>
                        <i className='fas fa-plus'></i> Create
                    </Link>
                </div>
            </div>
            <div className="card-body table-responsive">
                <table className='table table-bordered text-center'>
                    <thead className='text-center'>
                        <tr>
                            <th className='text-center'>SI</th>
                            <th className='text-center'>Title</th>
                            <th className='text-center'>Product</th>
                            <th style={{ width: '250px' }} className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(i => {
                                return (
                                    <tr key={i._id}>
                                        <td>{i._id}</td>
                                        <td>{i.title}</td>
                                        <td>0</td>
                                        <td>
                                            <div className='d-flex gap-1 flex-wrap justify-content-end'>
                                                <a href="#" className='btn btn-sm btn-info'>details</a>
                                                <a href="#" className='btn btn-sm btn-warning'>edit</a>
                                                <a href="#" className='btn btn-sm btn-danger'>delete</a>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllCategory