import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Editor } from '@tinymce/tinymce-react';
import httpRequest from '../../../../hooks/httpRequest';


function UpdateProducts() {
    const [data, setData] = useState(null);
    const [formErrors, setFormErrors] = useState();
    const [categories, setCategories] = useState([]);
    const [previewImage, setPreviewImage] = useState({});

    const editorRef = useRef(null);
    const discount_field = useRef(null);
    const discount_price_field = useRef(null);
    const price_field = useRef(null);

    const param = useParams();
   



    useEffect(() => {
        getCategory();
        getAllProduct();
    }, [])

    const getCategory = () => {
        httpRequest('/category/all')
            .then(res => {
                setCategories(res.data);
            })
    }

    const getAllProduct = () => {
        httpRequest(`/products/get/${param.id}`)
            .then(res => {
                setData(res.data);

                let temp_image ={};
                temp_image.thumb_image = <img
                    height={120} width={120}
                    src={process.env.REACT_APP_SERVER_URL+'/'+res.data.thumb_image} />
                
                temp_image.related_image =[];
                let index = 1;

                res.data.related_image.forEach(image => {
                    temp_image.related_image.push(
                        <img key={index++}
                            style={{ width: 30, margin: 5 }}
                            src={process.env.REACT_APP_SERVER_URL+'/'+image} />
                    )
                });
                setPreviewImage(temp_image);
            })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setFormErrors({});

        let formData = new FormData(e.target);
        formData.append('description', editorRef.current.getContent());
        formData.append('_id', param.id);

        httpRequest('/products/update','POST',formData)
            .then(res => {
                if (res.status === 422) {
                    let tempErrors = {
                        title: [],
                        category: [],
                        price: [],
                        image: [],
                        description: []
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
                if (res.status === 201) {
                    console.log(res);
                    window.alert("Product Updated Successfully");
                }
            })
    }
    const discountHandler = () => {
        let discount = +discount_field.current.value;
        let price = +price_field.current.value;
        if (discount >= 100) {
            discount_field.current.value = 100;
            discount = 100;
        }
        if (discount <= 0) {
            discount_field.current.value = 0;
        }
        if (discount > 0) {
            let discount_price = price - ((price * discount) / 100);
            discount_price_field.current.value = discount_price;
            // console.log(price, discount,discount_price);
        }
        else {
            discount_field.current.value = '';
            discount_price_field.current.value = ''
            // price_field.current.value = '';
        }

    }

    const previewHandler = async (e, type) => {
        let files = await e.target.files;
        let tempImages = {...previewImage};
        if (type === 'related_image') {
            tempImages.related_image= [];
            let index = 1;
            for (const element of files) {
                tempImages.related_image.push(
                    <img key={index++}
                        style={{ width: 30, margin: 5 }}
                        src={window.URL.createObjectURL(element)} />
                )
            }
        }
        if(type === 'thumb_image'){
            tempImages.thumb_image = <img height={120} width={120} src={window.URL.createObjectURL(e.target.files[0])} />
        }
        setPreviewImage(tempImages);

        
    }
    return (
        data ?
            <div className="card">
                <div className="card-header d-flex flex-wrap align-items-center justify-content-between ">
                    <h4 className='m-0'>Update Product</h4>
                    <div>
                        <Link to="/dashboard/all-products"
                            className='btn btn-sm btn-info rounded'>
                            <i className='fas fa-arrow-left'></i> Back
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <form action="" encType='multipart/form-data' onSubmit={submitHandler}>
                        <div className="form-group mb-3">
                            <label htmlFor="">Title</label> <br />
                            <input className='form-control' defaultValue={data.title} type="text" name='title' placeholder='Products Title' />
                            <ul>
                                {
                                    formErrors?.title
                                }
                            </ul>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="">Category</label> <br />
                            <select className='form-control' name="category">
                                {
                                    categories.map(i => {
                                        return <option key={i._id} value={i._id}>{i.title}</option>
                                    })
                                }
                            </select>
                            <ul>
                                {formErrors?.category}
                            </ul>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="">Price</label> <br />
                            <input defaultValue={data.price} ref={price_field} className='form-control' type="number" name='price' placeholder='Products price' />
                            <ul>
                                {formErrors?.price}
                            </ul>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="">Discount</label> <br />
                            <input defaultValue={data.discount} max={100} onKeyUp={discountHandler} ref={discount_field} className='form-control' type="number" name='discount' placeholder='Discount' />
                            <ul>
                                {formErrors?.discount}
                            </ul>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="">Discount Price</label> <br />
                            <input defaultValue={data.discount_price} readOnly step="2" ref={discount_price_field} className='form-control' type="number" name='discount_price' placeholder='Discount price' />
                            <ul>
                                {formErrors?.discount_price}
                            </ul>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="">Discount Date</label> <br />
                            <input defaultValue={data.discount_date?.split('T')[0]} className='form-control' type="date" name='discount_date' placeholder='Discount date' />
                            <ul>
                                {formErrors?.discount_date}
                            </ul>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="">Thumb Image</label> <br />
                            <input
                                onChange={(e) => previewHandler(e,'thumb_image')}
                                type="file"
                                className='form-control'
                                name='thumb_image' />
                            {previewImage?.thumb_image}
                            <ul>
                                {formErrors?.thumb_image}
                            </ul>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="">Related Image</label> <br />
                            <input
                                onChange={(e) => previewHandler(e, 'related_image')}
                                type="file"
                                multiple
                                className='form-control'
                                name='related_image[]' />
                            {previewImage?.related_image}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="">Description</label> <br />
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                initialValue={data.description}
                                init={{
                                    height: 250,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar: 'undo redo | formatselect | ' +
                                        'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />
                            {/* <textarea className='form-control' name="description" > </textarea> */}
                            <ul>
                                {formErrors?.description}
                            </ul>
                        </div>
                        <button className='btn btn-secondary'>Submit</button>
                    </form>
                </div>
            </div>
            :
            <h4>..Loading</h4>
    )
}

export default UpdateProducts;