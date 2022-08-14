import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        
        font-family: 'Inter', sans-serif;    
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        margin: 0;
        padding: 0 ;

    }

    #root {
        height: 100vh;
    }

    body {
        background-color: #E0E0E0;
    }
    
`;