import React from 'react'
import useFrontendContext from '../../hooks/useFrontendContext';
import resourcelink from '../../hooks/resourcelink';


function Card() {
    const { state, dispatch } = useFrontendContext();

    let cards = [];

    if (state?.cards) {
        cards = state.cards;
    }
    const {total_cards_amount} = state;
    
    return (
        <div className='container my-5 py-5'>
            <div className="card">
                <div className="card-body">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cards.map((product, index) => {
                                    return <tr key={index}>
                                        <td width={150}>
                                            <a className='text-info px-1' href="">Details</a>
                                            <a className='text-danger '
                                             onClick={() => dispatch({ fn: null, type: 'removeCard', payload: { index } })}
                                            href="#">Remove</a>
                                        </td>
                                        <td className='d-flex flex-wrap align-items-center' style={{gap:10}}>
                                            <img src={resourcelink(product.thumb_image)} alt="Simul dolorem voluptaria" width={100} />
                                            <h3>{product.title}</h3>
                                        </td>
                                        <td className='text-right'>
                                            ${product.discount_price || product.price}
                                        </td>
                                        <td width={120}>
                                        <input onChange={(e)=> dispatch({fn: null, type:"updateCardQty", payload:{
                                            product,
                                            index,
                                            qty: +e.target.value
                                        }})} 

                                        className='form-control'
                                         type="number" min={1} 
                                         defaultValue={product.qty} />
                                        </td>
                                        <td className='text-right'> 
                                            ${product.qty * (product.discount_price || product.price)}
                                        </td>
                                    </tr>
                                })
                            }

                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan={4} className='text-right'>Total</th>
                                <th className='text-right'>${total_cards_amount}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Card