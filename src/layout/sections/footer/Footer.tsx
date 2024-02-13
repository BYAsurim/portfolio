import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper flexDirection={'column'} alignItems={'center'} >
                <Name>Aliaksandr</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'instagram'} width={'35'} height={'35'} viewBox={'0 0 21 21'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'telegram'} width={'35'} height={'35'} viewBox={'0 0 21px 21px'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'vk'} width={'35px'} height={'35px'} viewBox={'0 0 21px 21px'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'linkedin'} width={'35'} height={'35'} viewBox={'0 0 21px 21px'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <CopyRight>© 2024 Asurim, All Rights Reserved.</CopyRight>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 30vh;
    background-color: #289bff;
`
const Name = styled.span`

`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
`
const SocialItem = styled.li`
`

const SocialLink = styled.a`

`
const CopyRight = styled.small`
`