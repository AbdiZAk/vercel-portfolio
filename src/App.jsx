import React, {useState} from 'react';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";

// Toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Theme imports
import styled, { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme} from "./components/themes/Themes";
import { GlobalStyles } from './components/themes/globalstyles'
import {ThemeToggler} from './components/themes/ThemeToggler'
import DayNightToggle from 'react-day-and-night-toggle'

const StyledApp =  styled.div`
  
`

const App = () => {
    const localTheme = localStorage.getItem('Theme')
    const [isDarkMode, setIsDarkMode] = useState(localTheme === 'dark')

    ThemeToggler(isDarkMode)

    const handleChangeTheme = () => {
        toast.success('Theme Changed', {
            position: 'bottom-left',
        })
        setIsDarkMode(!isDarkMode)

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