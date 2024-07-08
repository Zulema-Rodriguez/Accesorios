import {createGlobalStyle} from "styled-components";

export const GlobalStyles=createGlobalStyle`
    
    :root {
        --orange-bg: #2f2618;
        --orange: #ff9d01;
        --magenta: #ff005c;
        --gray-bg: #2b2b2c;
        --btn-gradient: linear-gradient(82dg,#ffa100, #fb103d);
        --btn-gradient-secondary: linear-gradient(140deg,#3b3022, #3b2329);
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding:0;
        background-color: bage;
        color: white;
        overflow-x:hidden;
    }
    
    a {
        text-decoration: none;
        color: brown;
    }

    a:visited {
        color: brown;
    }

    li {
        list-style: none;
    }
`;