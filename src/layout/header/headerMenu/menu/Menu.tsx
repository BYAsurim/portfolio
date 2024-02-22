import React from 'react';
import {S} from '../HeaderMenu_Styles'


const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contacts']

export const Menu: React.FC = () => {
    return (
        <ul>
            {
                items.map((item, index) => {
                    return <S.ListItem key={index}>
                        <S.NavLink
                            activeClass={'active'}
                            to={`${item}`}
                            smooth={true}
                            spy={true}
                        >
                            {item}
                        <S.Mask>
                            <span>{item} </span>
                        </S.Mask>
                        <S.Mask>
                            <span>  {item}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.ListItem>
                })
            }
        </ul>
    );
};


