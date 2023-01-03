import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import httpRequest from '../../../../../hooks/httpRequest';

function AllCategory() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getCategory();
    }, [])

    const getCategory = () => {
        httpRequest('/category/all')
            .then(res => {
                setData(res.data);
            })
    }

    const deleteItem = (e,id)=>{
            e.preventDefault();
            if(window.confirm('Are you sure to Delete Item ?')){
                httpRequest('/category/delete','POST', JSON.stringify({id}),{
                    'Content-Type' : 'Application/json'
                })
                .then(res=>{
                    getCategory();
                })
            }
    }

    return (
        <div className="card">
            <div className="card-header d-flex flex-wrap align-items-center justify-content-between ">
                <h4 className='m-0'>All Category</h4>
                <div>
                    <Link to="/dashboard/categories/create"
                        className='btn btn-sm btn-info rounded'>
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
                            <th className='text-center'>parent</th>
                            <th className='text-center'>Creator</th>
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
                                        <td>{i.parent?.title}</td>
                                        <td>{i.creator?.username}</td>
                                        <td>
                                            <div className='d-flex gap-1 flex-wrap justify-content-end'>
                                                <a href="#" className='btn btn-sm btn-info rounded'>details</a>
                                                <Link to={`/dashboard/categories/edit/${i._id}/${encodeURI(i.title.replaceAll(' ', '-'))}`} className='btn btn-sm btn-warning rounded'>edit</Link>
                                                <a onClick={(e) => deleteItem(e, i._id)} href="#" className='btn btn-sm btn-danger rounded'>delete</a>
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