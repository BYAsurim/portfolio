import React, {FC} from 'react';
import {S} from '../HeaderMenu_Styles'


type MenuPropsType = {
    menuItems: string[]
}
export const Menu: FC<MenuPropsType> = ({
                         menuItems
                     }) => {
    return (
        <ul>
            {
                menuItems.map((item, index) => {
                    return <S.ListItem key={index}>
                        <S.Link href="">
                            {item}
                            <S.Mask>
                                <span>{item} </span>
                            </S.Mask>
                            <S.Mask>
                                <span>  {item}</span>
                            </S.Mask>
                        </S.Link>
                    </S.ListItem>
                })
            }
        </ul>
    );
};


