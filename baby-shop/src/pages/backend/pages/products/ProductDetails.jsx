import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import moment from 'moment';
import httpRequest from '../../../../hooks/httpRequest';



function ProductDetails() {
    const [data, setData] = useState(null);
    const param = useParams();

    useEffect(() => {
        getAllProduct();
    }, [])

    const getAllProduct = () => {
        httpRequest(`/products/get/${param.id}`)
            .then(res => {
                setData(res.data);
            })
    }

    
    return (
        data ?
            <div className="card">
                <div className="card-header d-flex flex-wrap align-items-center justify-content-between ">
                    <h4 className='m-0'>Products Details</h4>
                    <div>
                        <Link to="/dashboard/all-products"
                            className='btn btn-sm btn-info rounded'>
                            <i className='fas fa-arrow-left'></i> Back
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <img className='img-fluid' src={process.env.REACT_APP_SERVER_URL+'/'+ data.thumb_image} alt="" />

                            </div>
                            <ul className='d-flex my-2' style={{ gap: 10 }}>
                                {
                                    data.related_image?.map((image, index) => {
                                        return (
                                            <li key={index}>
                                                <img src={process.env.REACT_APP_SERVER_URL+'/' + image} style={{ width: 50 }} />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td style={{ width: 150 }}>Title</td>
                                        <td style={{ width: 3 }}>:</td>
                                        <td>{data.title}</td>
                                    </tr>
                                    <tr>
                                        <td>Category</td>
                                        <td>:</td>
                                        <td>{data.category.title}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>:</td>
                                        <td>{data.price}</td>
                                    </tr>
                                    <tr>
                                        <td>Discount</td>
                                        <td>:</td>
                                        <td>{data.discount}</td>
                                    </tr>
                                    <tr>
                                        <td>Discount Price</td>
                                        <td>:</td>
                                        <td>{data.discount_price}</td>
                                    </tr>
                                    <tr>
                                        <td>Discount Date</td>
                                        <td>:</td>
                                        <td>{moment(data.discount_date).format('DD MMMM YYYY hh:mm a')}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="col-12">
                            <h2>Description</h2>
                            {parse(data.description)}
                        </div>
                    </div>
                </div>
            </div>
            :
            <h3>...loading</h3>
    )
}

export default ProductDetails