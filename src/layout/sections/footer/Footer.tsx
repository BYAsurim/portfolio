import React from 'react';
import {Icon} from "components/icon/Icon";
import {FlexWrapper} from "components/FlexWrapper";
import {S} from './Footer_Styles'

export const Footer: React.FC = () => {
    const socialItemData = [
        {
            iconId: 'instagram'
        },
        {
            iconId: 'telegram'
        },
        {
            iconId: 'vk'
        },
        {
            iconId: 'linkedin'
        }
    ]

    return (
        <S.Footer>
            <FlexWrapper flexDirection={'column'} alignItems={'center'}>
                <S.Name>Aliaksandr</S.Name>
                <S.SocialList>
                    {
                        socialItemData.map((el, index) => {
                            return <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon iconId={el.iconId} width={'21px'} height={'21px'} viewBox={'0 0 21 21'}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        })
                    }
                </S.SocialList>
                <S.CopyRight>© 2024 Asurim, All Rights Reserved.</S.CopyRight>
            </FlexWrapper>
        </S.Footer>
    );
};
