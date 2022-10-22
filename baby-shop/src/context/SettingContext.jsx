import React, { createContext, useState } from 'react';

export const SettingContext = createContext(null);

function SettingContextProvider({children}) {
    
    const [setting, setSetting] = useState({
        theme_color: 'blue',
        header_style: 1,
        footer_style: 2
    });

    function changeSetting(properity, value){
        setting[properity] = value;
        setSetting({...setting});
    }
    const values={
        setting,
        changeSetting
    };

  return (
    <SettingContext.Provider value={values}>
        {children}
    </SettingContext.Provider>
  )
}

export default SettingContextProvider;