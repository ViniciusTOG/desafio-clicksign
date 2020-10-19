import { createGlobalStyle } from "styled-components";
import {animateTr} from './components/table/styles/table'
export const GlobalStyles = createGlobalStyle`
  * {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f8f9fd;
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }


    .invisivel {
      display: none;
    }

    .animar td {
      animation: ${animateTr} 10s;
    }

    .animar {
      border: solid 1px #e1e1e1;
    }

`;
