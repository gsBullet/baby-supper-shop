import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Editor } from '@tinymce/tinymce-react';

function CreateProducts() {
    const [formErrors, setFormErrors] = useState();
    const [categories, setCategories] = useState([]);
    const [previewImage, setPreviewImage] = useState([]);

    const editorRef = useRef(null);
    const discount_field = useRef(null);
    const discount_price_field = useRef(null);
    const price_field = useRef(null);


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
                // console.log(res);
                setCategories(res);
            })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setFormErrors({});

        let formData = new FormData(e.target);
        formData.append('description', editorRef.current.getContent());

        fetch(`http://localhost:5000/api/products/create`, {
            method: "POST",
            headers: {
                authorization: 'Bearer ' + window.localStorage.getItem('token')
            },
            body: formData,
        })
            .then(async (res) => {
                let data = await res.json();
                // console.log(data);
                return {
                    status: res.status,
                    data

                };
            })
            .then(res => {
                // console.log(res);
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
                    e.target.reset();
                    window.alert("New Product Created");
                }
            })
    }

    // const log = () => {
    //     if (editorRef.current) {
    //         console.log(editorRef.current.getContent());
    //     }
    // }

    const discountHandler = () => {
        let discount = +discount_field.current.value;
        let price = +price_field.current.value;
        if(discount >= 100){
            discount_field.current.value = 100;
            discount =100;
        }
        if(discount <= 0){
            discount_field.current.value = 0;
        }
        if(discount > 0){
            let discount_price = price - ((price*discount)/100);
            discount_price_field.current.value = discount_price;
            // console.log(price, discount,discount_price);
        }
        else{
            discount_field.current.value = '';
            discount_price_field.current.value = ''
            // price_field.current.value = '';
        }
       
    }

    const previewHandler = async (e) =>{
        let files =await e.target.files;
        let tempImages = [];
        let index = 1;
        for (const element of files) {
                tempImages.push(
                <img key={index++} 
                style={{width:30, margin:5}} 
                src={window.URL.createObjectURL(element)} />
            )
        }
        setPreviewImage(tempImages);
        console.log(files);
    }
    return (
        <div className="card">
            <div className="card-header d-flex flex-wrap align-items-center justify-content-between ">
                <h4 className='m-0'>Create Category</h4>
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
                        <input className='form-control' type="text" name='title' placeholder='Products Title' />
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
                        <input ref={price_field} className='form-control' type="number" name='price' placeholder='Products price' />
                        <ul>
                            {formErrors?.price}
                        </ul>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Discount</label> <br />
                        <input max={100} onKeyUp={discountHandler} ref={discount_field} className='form-control' type="number" name='discount' placeholder='Discount' />
                        <ul>
                            {formErrors?.discount}
                        </ul>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Discount Price</label> <br />
                        <input readOnly step="2" ref={discount_price_field} className='form-control' type="number" name='discount_price' placeholder='Discount price' />
                        <ul>
                            {formErrors?.discount_price}
                        </ul>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Discount Date</label> <br />
                        <input className='form-control' type="date" name='discount_data' placeholder='Discount date' />
                        <ul>
                            {formErrors?.discount_date}
                        </ul>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Image</label> <br />
                        <input
                            onChange={previewHandler}
                            type="file"
                            multiple
                            className='form-control'
                            name='image[]' />
                            {previewImage}
                        <ul>
                            {formErrors?.image}
                        </ul>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Description</label> <br />
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue="<p>Current description of your product.</p>"
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
    )
}

export default CreateProducts;