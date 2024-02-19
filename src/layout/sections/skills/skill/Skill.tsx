import React, {FC} from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";


type SkillPropsType = {
    iconId: string
    title: string
    children?: React.ReactNode
}
export const Skill: FC<SkillPropsType> = ({
                                              iconId,
                                              title,
                                              children
                                          }) => {
    return (
        <StyledSkill>
            <FlexWrapper flexDirection={'column'} alignItems={'center'}>
                <IconWrapper>
                    <Icon iconId={iconId}/>
                </IconWrapper>
                <SkillTitle>{title}</SkillTitle>
                <SkillText>
                    {children}
                </SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
    width: 380px;
    flex-grow: 1;
    padding: 62px 20px 40px;
    @media ${theme.media.mobile}{
        padding: 62px 0 40px;
    }
`
export const IconWrapper = styled.div`
    position: relative;
    
    &::before {
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);
        
        position: absolute;
        top: 50%;
        left: 50%;
        transform-origin: top left;

    }
`
const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`
const SkillText = styled.p`
    text-align: center;
`