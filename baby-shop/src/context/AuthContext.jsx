import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {
    
    const [data, setData] = useState({
        first_name: 'Mr kalam',
        last_name: 'khan',
        
    });

    function changeData(properity, value){
    data[properity] = value;
        setData({...data});
    }
    const values={
        data,
        changeData
    };

  return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;