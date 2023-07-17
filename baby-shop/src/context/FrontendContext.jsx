
import React, { createContext, useReducer, useState } from 'react'
import UseLocalStorageSet from '../hooks/UseLocalStorageSet';
import UseLocalStorageGet from '../hooks/UseLocalStorageGet';


const reducers = (state, { type, payload }) => {
    let tempState = { ...state };
    let { cards, total_cards_amount, wishList, showAlert, showModel } = tempState;
    switch (type) {
        case 'loadCard':
            tempState.cards = UseLocalStorageGet('cards') || [];
            return tempState;
        case 'insertCard':
            // console.log(payload);
            const { _id, price, title, thumb_image, discount_price, discount, discount_date } = payload.product;
            // cards.push({_id, price,title,thumb_image});
            let qty = 1;
            let product = cards.find(i => i._id == _id);
            product ? qty = product.qty++ : qty = 1;

            !product &&
                cards.unshift({ _id, price, title, thumb_image, qty, discount_price, discount, discount_date });

            tempState.total_cards_amount = cards.reduce((total, i) => {
                return i.discount_price ? total += i.discount_price * i.qty : i.price * i.qty
            }, 0);
            UseLocalStorageSet('cards',cards);
            window.s_alert('product added to successfully');
            return tempState;

        case 'updateCardQty':
            console.log(payload);
            cards[payload.index].qty = payload.qty;
            tempState.total_cards_amount = cards.reduce((total, i) => {
                return i.discount_price ? total += i.discount_price * i.qty : i.price * i.qty
            }, 0);
            UseLocalStorageSet('cards',cards);
            window.s_alert('Qty updated successfully');
            return tempState;

        case 'removeCard':
            cards.splice(payload.index, 1);
            tempState.total_cards_amount = cards.reduce((total, i) => {
                return i.discount_price ? total += i.discount_price : i.price;
            }, 0);
            UseLocalStorageSet('cards',cards);
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
        total_cards_amount: 0,
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