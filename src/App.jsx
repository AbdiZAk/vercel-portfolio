import React, {useState} from 'react';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";

// Theme imports
import styled, { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme} from "./components/themes/Themes";
import { GlobalStyles } from './components/themes/globalstyles'
import {ThemeToggler} from './components/themes/ThemeToggler'
import DayNightToggle from 'react-day-and-night-toggle'

const StyledApp =  styled.div`
  
`

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const changeTheme = () => {
        ThemeToggler(isDarkMode, setIsDarkMode)
    }
    return (
        <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyledApp>
                <DayNightToggle
                    className={"toggle"}
                    onChange={changeTheme}
                    checked={!isDarkMode}
                    animationInactive={false}
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