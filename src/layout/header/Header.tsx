import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./headerMenu/MobileMenu";
import {HeaderMenu} from "./MobileMenu/HeaderMenu";


const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contacts']
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justifyContent={'space-between'} alignItems={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: #1F1F20E5;
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
`
