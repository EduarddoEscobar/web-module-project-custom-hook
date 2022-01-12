import useLocalStorage from './useLocalStorage';

const useDarkMode = () =>{
    const [darkMode, setDarkMode] = useLocalStorage('Dark Mode', false);

    return [darkMode, setDarkMode];
}

export default useDarkMode;