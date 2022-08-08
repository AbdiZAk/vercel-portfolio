import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    transition: var(--transition);
  }

  h5 {
    color: ${({theme}) => theme.h5};
    font-weight: bold;
  }
  
  nav {
    background: ${({theme}) => theme.navBg};
    
  }
  
  
`