"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    // console.log("Value of theme after getting it is ; ", value);
    return value || "light";
  }
};
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(()=> getFromLocalStorage());
  //   useEffect(()=>{
  //     setTheme(getFromLocalStorage());
  //   })
    const toggle = () => {
        setTheme(theme==='light'?'dark':'light');
    }
    useEffect(()=>{
        localStorage.setItem("theme", theme);
    },[theme])
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
  );
};
