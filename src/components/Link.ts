import {theme} from "../styles/Theme";
import styled from "styled-components";

export const Link = styled.a `
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding:10px;
    position: relative;
    z-index: 0;
    
    &::before {
        content: '';
        display: inline-block;
        width: 100%;
        background-color: ${theme.colors.accent};

        position: absolute;
        bottom: 5px;
        left: 0;
        z-index: -1;
    }


    &:hover{
        &::before{
            height: 10px;
        }
    }
`