import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { getProducts } from '../../../../../../baby-shop-server-site/controller/product-controller';

function AllProducts() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = () => {
        fetch(`http://localhost:5000/api/products/all`, {
            method: "GET",
            headers: {
                authorization: 'Bearer ' + window.localStorage.getItem('token')
            },
        })
            .then(res => res.json())
            .then(res => {
                setData(res);
            })
    }

    return (

        <div className="card">
            <div className="card-header d-flex flex-wrap align-items-center justify-content-between ">
                <h4 className='m-0'>All Products</h4>
                <div>
                    <Link to="/dashboard/create-products"
                        className='btn btn-sm btn-info rounded'>
                        <i className='fas fa-plus'></i> Create
                    </Link>
                </div>
            </div>
            <div className="card-body table-responsive">
                <table className='table table-bordered text-center'>
                    <thead>
                        <tr>
                            <th width={150} className='text-center'>SI</th>
                            <th className='text-center'>Title</th>
                            <th className='text-center'>Images</th>
                            <th className='text-center'>Category</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Discount</th>
                            <th className='text-center'>Discount Price</th>
                            <th className='text-center'>Creator</th>
                            <th width={250} className='text-center'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((i, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{i._id}</td>
                                        <td>{i.title}</td>
                                        <td>
                                            <img src={'http://localhost:5000/'+i.image} style={{ width: 100 }} />
                                        </td>
                                        <td>{i.category.title}</td>
                                        <td>{i.price}</td>
                                        <td>{i.discount}</td>
                                        <td>{i.discount_price}</td>
                                        <td>{i.creator.username}</td>
                                        <td>
                                            <div className='d-flex flex-wrap justify-content-end' style={{ gap: '5px' }}>
                                                <a href="#" className='btn btn-sm btn-info rounded'> details</a>
                                                <Link to="#" className='btn btn-sm btn-warning rounded'> edit</Link>
                                                <a href="#" className='btn btn-sm btn-danger rounded'> delete</a>
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

export default AllProducts