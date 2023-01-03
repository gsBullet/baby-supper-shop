import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import httpRequest from '../hooks/httpRequest';


export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {

    const [checkAuth, setCheckAuth] = useState(false);

    const [data, setData] = useState({
        first_name: 'Mr kalam',
        last_name: 'khan',

    });

    function changeData(properity, value) {
        data[properity] = value;
        setData({ ...data });
    }
    async function check_user(params) {
        let res = await httpRequest('/user/check-user');
        let status = await res.status;
        if (status == 200) {
            setCheckAuth({
                isAuth: true,
                token: window.localStorage.getItem('token'),
                data:{
                    email: res.data.email,
                    username: res.data.username,
                    role: res.data.role,
                }
            })
        } else {
            setCheckAuth(false);
        }

    }

    useEffect(() => {
        check_user();
    },[])

    const logout = () => {
        setCheckAuth(false);
        window.localStorage.removeItem('token');

    }


    const values = {
        data,
        changeData,
        checkAuth,
        setCheckAuth,
        logout
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;