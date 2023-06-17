import React, { useContext, useReducer } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../frontend/shared/Footer'
import Header from '../frontend/shared/Header'
import { FrontendContext } from '../../context/FrontendContext'
// import { listIndexes } from '../../../../baby-shop-server-site/models/modelUser'



function FrontendLayout() { 
    
    const {state, dispatch } = useContext(FrontendContext);
    const {cards,showAlert} = state;
    console.log(state);
    return (
        <>
            <div id='index'>
                {/* <h1>{name.first_name}</h1>
                <h1>{name.last_name}</h1>
                <input type="text" onKeyUp={(e)=>setName({...name,first_name:e.target.value})} placeholder='first_name' />
                <input type="text" onKeyUp={(e)=>setName({...name,last_name:e.target.value})} placeholder='last_name' /> */}
                {/* <button onClick={()=>dispatch({fn:null, type:'insertCard', payload: null})}>add to card</button>
               
                <ul>
                    {
                        cards.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <h1>{item.productId} : {parseInt(item.price*1000)}</h1>
                                    <button onClick={()=>dispatch({fn:null,type:'deleteCard', payload: {index}})}>delete</button>
                                    
                                </li>
                               
                            )
                            
                        })
                        
                    }
                </ul>
                <button onClick={()=>dispatch({fn:'async',type:'toggleAlert', payload:{ method:'saveCard'} })}>toggle</button>
                {
                    showAlert &&
                    <div className='alert alert-danger'> Lorem, ipsum dolor.</div>
                } */}
                
                <main>
                    <div id='menu_wrapper'>
                        {/* ---------------HEADER OPTION ---------- */}
                        <Header />
                        {/* --------------------home page------------ */}
                        <Outlet />
                        {/* -----------------footer-------------------- */}
                        <Footer />

                    </div>
                </main>
            </div>
        </>
    )
}

export default FrontendLayout