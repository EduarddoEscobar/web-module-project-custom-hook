import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        if(localStorage.getItem(key)){
            return(localStorage.getItem(key));
        }else{
            localStorage.setItem(key, initialValue)
            return(initialValue);
        }
    })

    const setStoredValue = (newValue) => {
        localStorage.setItem(key, newValue);
        setValue(newValue);
    }
    return [value, setStoredValue];
}

export default useLocalStorage;