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
  
    margin-bottom: 40px;
    ul {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
`
const ListItem = styled.li `
   
 
`

