import React, { useContext } from 'react'
// import { AuthContext } from '../../../context/AuthContext';
import useFrontendContext from '../../../hooks/useFrontendContext';
import resourcelink from '../../../hooks/resourcelink';

function WishList() {
    const { state, dispatch } = useFrontendContext();

    let cards = [];

    if (state?.cards) {
        cards = state.cards;
    }
    const { totla_cards_amount } = state;
    return (
        <>
            <div className="cotainer my-5 py-5">
                <div className="card">
                    <div className="card-body">
                        <table className='table table-bordered text-center'>
                            <thead>
                                <tr >
                                    <th className='text-center'>Quantity</th>
                                    <th className='text-center'>Name</th>
                                    <th className='text-center'>Price</th>
                                    <th className='text-center'>Discount</th>
                                    <th className='text-center' style={{ width: 200 }}>Discount Price</th>
                                    <th className='text-center'>Valid date</th>
                                    <th className='text-center' style={{ width: '250px' }}>Product Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cards.map((product, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{product.qty}</td>
                                                <td>{product.title}</td>
                                                <td>${product.price}</td>
                                                <td>{product.discount}%</td>
                                                <td>${product.discount_price}</td>
                                                <td>{product.discount_date}</td>
                                                <td>
                                                    <a className="product-image" href="#">
                                                        <img src={resourcelink(product.thumb_image)} alt="Simul dolorem voluptaria" style={{ width: '50px' }} />
                                                    </a>
                                                </td>

                                            </tr>
                                        )
                                    })

                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishList