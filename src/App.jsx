import React, {useState} from 'react';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";

import {notifyToast} from "./components/toastify/Toastify";
// toastify
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// Theme imports
import styled, { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme} from "./components/themes/Themes";
import { GlobalStyles } from './components/themes/globalstyles'
import {ThemeToggler} from './components/themes/ThemeToggler'
import DayNightToggle from 'react-day-and-night-toggle'
// import { BsFillSunFill, BsFillMoonFill, BsToggleOn } from 'react-icons/bs'

const StyledApp =  styled.div`
  
`

const App = () => {

    const localTheme = localStorage.getItem('Theme')
    const [isDarkMode, setIsDarkMode] = useState(localTheme === 'dark' ? true : false)
    console.log(typeof localTheme)
    ThemeToggler(isDarkMode)

    const handleChangeTheme = () => {
        setIsDarkMode(!isDarkMode)
        notifyToast()
        if(!isDarkMode) {
            localStorage.setItem('Theme', 'dark')
            ThemeToggler(isDarkMode)
        } else {
            localStorage.setItem('Theme', 'light')
            ThemeToggler(isDarkMode)
        }
    }

    return (
        <ThemeProvider theme={!isDarkMode ? lightTheme: darkTheme}>
            <GlobalStyles />
            <StyledApp>
                <DayNightToggle
                    className={"toggle"}
                    onChange={handleChangeTheme}
                    checked={isDarkMode}
                    size={28}
                />

                <Header />
                <Nav />
                <About />
                <Experience />
                <Portfolio/>
                <Contact />
                <Footer />
            </StyledApp>
        </ThemeProvider>
    )
}
export default App;

// let localTheme = localStorage.getItem("Theme")
// let initialTheme = localTheme === 'true';
// console.log(typeof  initialTheme + initialTheme)
// const [isDarkMode, setIsDarkMode] = useState(() => {
//
//     if (localTheme !== null){
//         // console.log(`localtheme ${initialTheme}`)
//         return initialTheme
//     }
//     else {
//         // console.log('its null')
//         localStorage.setItem('Theme', 'false')
//         return false
//     }
//
// })

// const changeTheme = () => {
//     setIsDarkMode((s) => !s)
//     // setIsDarkMode(isDarkMode)
//     ThemeToggler(isDarkMode, setIsDarkMode)
//
//     localStorage.setItem("Theme", JSON.stringify(isDarkMode))
//
// }
//
// let currTheme = isDarkMode ?  lightTheme: darkTheme