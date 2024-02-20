import {theme} from "../../styles/Theme";
import styled from "styled-components";

const Slider = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Slide = styled.div`
    text-align: center;
`
const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    margin: 22px 0 42px;
    display: inline-block;
`
const Text = styled.p`
`
const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;

        background: rgba(255, 255, 255, 0.5);
        border-radius: 20px;

        & + span {
            margin-left: 5px;
        }

        &.active {
            background-color: ${theme.colors.accent};
            width: 20px;

        }
    } 
`
export const S = {
    Slider,
    Slide,
    Name,
    Text,
    Pagination
}