const UseLocalStorageSet =(key,data)=>{
    return window.localStorage.setItem(key, JSON.stringify(data));

}

export default UseLocalStorageSet;