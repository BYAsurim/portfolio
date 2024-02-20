import React, {useEffect, useState} from 'react';
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {S} from "./Header_Styles"


const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contacts']
export const Header: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 768
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)

        return () => window.removeEventListener('resize', handleWindowResize)
    }, []);
    return (
        <S.Header>
            <Container>
                <FlexWrapper justifyContent={'space-between'} alignItems={'center'}>
                    <Logo/>
                    {width > breakpoint
                        ? <DesktopMenu menuItems={items}/>
                        : <MobileMenu menuItems={items}/>
                    }
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};



