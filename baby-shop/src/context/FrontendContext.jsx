
import React, { createContext, useReducer, useState } from 'react'


const reducers = (state, { type, payload }) => {
    let tempState = { ...state };
    let { cards, wishList, showAlert, showModel } = tempState;
    switch (type) {
        case 'insertCard':
            // console.log(payload);
            const {_id, price,title,thumb_image} = payload.product;
            // cards.push({_id, price,title,thumb_image});
            let qty=1;
            cards.unshift({_id, price,title,thumb_image,qty});
            window.s_alert('product added to successfully');
            return tempState;
        case 'removeCard':
            cards.splice(payload.index, 1)
            return tempState;
        case 'toggleAlert':
            tempState.showAlert = !showAlert;
            return tempState;
        default:
            return state;
    }
}
export const FrontendContext = createContext({});
function FrontendContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducers, {
        cards: [],
        wishList: [],
        showAlert: false,
        showModel: false,
    })

    const thunkDispatch = ({ fn, type, payload }) => {
        if (fn == 'async') {
            console.log("async calls", payload);
            eval(payload.method)(dispatch, type, payload);
        } else {
            dispatch({ type, payload });
        }
    }

    return (
        <FrontendContext.Provider value={{ state, dispatch: thunkDispatch }}>
            {children}
        </FrontendContext.Provider>
    )
}

export default FrontendContextProvider