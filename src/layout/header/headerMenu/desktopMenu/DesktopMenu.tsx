import React, {FC} from 'react';
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles'


type MenuPropsType = {
    menuItems: string[]
}

export const DesktopMenu: FC<MenuPropsType> = ({
                                                   menuItems
                                               }) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={menuItems}/>
        </S.DesktopMenu>
    );
};


