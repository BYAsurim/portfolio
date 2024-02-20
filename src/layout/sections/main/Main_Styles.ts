import {font} from "../../../styles/Common";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Main = styled.section`
    min-height: 100vh;
    background-color: aqua;
    display: flex;
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 1;

    &::before {
        content: '';
        width: 310px;
        height: 440px;
        border: 5px solid ${theme.colors.accent};

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
        @media ${theme.media.mobile} {
            top: -17px;
            left: 15px;
        }
    }
`
const Photo = styled.img`
    width: 300px;
    height: 400px;
    object-fit: cover;
    margin-right: 20px;
`
const SmallText = styled.span`
    font-weight: 400;
    font-size: 14px;
`
const Name = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})}
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 1;

        
        &::before {
            content: '';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};

            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`
const MainTitle = styled.h1`
    ${font({Fmax: 27, Fmin: 20})}
`
export const S = {
    Main,
    PhotoWrapper,
    Photo,
    SmallText,
    Name,
    MainTitle
}