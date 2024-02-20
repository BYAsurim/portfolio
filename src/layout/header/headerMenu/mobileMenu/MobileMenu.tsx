import React, {FC, useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles'


type MenuPropsType = {
    menuItems: string[]
}

export const MobileMenu: FC<MenuPropsType> = ({
                                                  menuItems
                                              }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={isOpen} onClick={()=>setIsOpen(false)}>
               <Menu menuItems={menuItems}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};




