import React from 'react';
import photo from '../../../assets/images/photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper alignItems={'center'} justifyContent={'space-around'}>
                <div>
                    <span>Hi There</span>
                    <h2>I am Aliaksandr Nikolaevich</h2>
                    <h1>A Web Developer.</h1>
                </div>
                <Photo src={photo} alt="photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
   min-height: 100vh;
    background-color: aqua;
`

const Photo = styled.img`
    width: 300px;
    height: 400px;
    object-fit: cover;

`

