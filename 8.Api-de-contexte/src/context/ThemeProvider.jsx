import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider(props) {
    const [dark, setDark] = useState(false);

    function toogleTheme(){
        setDark(!dark)
    }
    if(dark){
        document.body.classList.add('dark')
    }else{
        document.body.classList.remove('dark')
    }

    return (
        <ThemeContext.Provider value={{toogleTheme, dark}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
