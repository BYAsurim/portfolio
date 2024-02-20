import React, {FC} from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";


type MenuPropsType = {
    menuItems: string[]
}

export const TabMenu: FC<MenuPropsType> = ({
                                            menuItems
                                        }) => {
    return (
        <StyledMenu>

            <ul>
                {
                    menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>
                    })
                }
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
`
const ListItem = styled.li `
   
 
`

