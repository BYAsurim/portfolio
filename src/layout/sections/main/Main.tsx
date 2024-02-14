import React from 'react';
import photo from '../../../assets/images/photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper alignItems={'center'} justifyContent={'space-between'}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span> Aliaksandr Nikolaevich </span></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt="photo"/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: aqua;
    display: flex;
`
const PhotoWrapper = styled.div `
    position: relative;
    z-index: 1;
    &::before{
        content: '';
        width: 310px;
        height: 440px;
        border: 5px solid ${theme.colors.accent};
        
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
     

    }
`
const Photo = styled.img`
    width: 300px;
    height: 400px;
    object-fit: cover;
`
const SmallText = styled.span`
    font-weight: 400;
    font-size: 14px;
`
const Name = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    margin: 10px 0;
    
    span{
        
        position: relative;
        z-index: 1;
        
        &::before{
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
    
`
const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
`

