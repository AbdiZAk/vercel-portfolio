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

  .btn {
     border-color: ${({theme}) => theme.AborderColor};
     color: ${({theme}) => theme.PrimaryColor};
  }

  .btn-primary {
    background: var(--color-primary);
    color: var(--color-bg);
  }
  
  nav {
    background: ${({theme}) => theme.navBg};
    
  }
  
  
`