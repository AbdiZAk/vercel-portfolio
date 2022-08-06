

export const ThemeToggler = (isDarkMode, setIsDarkMode) => {
    setIsDarkMode(!isDarkMode)
    if(!isDarkMode){
        document.documentElement.style.setProperty('--color-bg-variant', '#292931');
        document.documentElement.style.setProperty('--color-white', '#707E86FF');
        document.documentElement.style.setProperty('--color-gold', '#8f83f8');
        document.documentElement.style.setProperty('--color-light', '#bcb66b');

    }
    else {
        document.documentElement.style.setProperty('--color-bg-variant', '#2c2c6c');
        document.documentElement.style.setProperty('--color-white', '#fff');
        document.documentElement.style.setProperty('--color-gold', '#fcfc9f');
        document.documentElement.style.setProperty('--color-light', 'rgba(253, 250, 250, 0.79)');
    }

}
