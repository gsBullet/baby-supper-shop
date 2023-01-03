import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import httpRequest from '../../../../hooks/httpRequest';
// import { getProducts } from '../../../../../../baby-shop-server-site/controller/product-controller';

function AllProducts() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = () => {
        httpRequest('/products/all')
            .then(res => {
                setData(res.data);
            })
    }

    const deleteHandler = (id)=>{
        httpRequest('/products/delete','POST', JSON.stringify({id}),{
            'Content-Type' : 'Application/json'
        })
        .then(res => {
           let temp = [...data].filter(i=> i._id!==id);
           setData(temp);
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
                            <th className='text-center'>SI</th>
                            <th className='text-center'>Title</th>
                            <th className='text-center'>Images</th>
                            <th className='text-center'>Category</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Discount</th>
                            <th className='text-center'>Discount Price</th>
                            <th className='text-center'>Creator</th>
                            <th className='text-center'>Action</th>

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
                                            <img src={process.env.REACT_APP_SERVER_URL+'/' + i.thumb_image} style={{ width: 100,height:60 }} />
                                            <ul className='d-flex' style={{ gap: "5px" }}>
                                                {
                                                    i.related_image?.map((image, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <img src={process.env.REACT_APP_SERVER_URL+'/' + image} style={{ width: 30 }} />
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </td>
                                        <td>{i.category.title}</td>
                                        <td>{i.price}</td>
                                        <td>{i.discount}</td>
                                        <td>{i.discount_price}</td>
                                        <td>{i.creator.username}</td>
                                        <td>
                                            <div className='d-flex flex-wrap justify-content-end' style={{ gap: '5px' }}>
                                                <Link to={`/dashboard/product/details/${i._id}`} className='btn btn-sm btn-info rounded'> details</Link>
                                                <Link to={`/dashboard/product/update/${i._id}/${i.title}`} className='btn btn-sm btn-warning rounded'> edit</Link>
                                                <a onClick={deleteHandler(i._id)} href="#" className='btn btn-sm btn-danger rounded'> delete</a>
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