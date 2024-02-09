import React, {FC} from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";


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
            <Icon iconId={iconId}/>
            <SkillTitle>{title}</SkillTitle>
            <SkillText>
                {children}
            </SkillText>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
    background-color: #fff;
    margin: 10px;
    width: 30%;
`
const SkillTitle = styled.h3`
   

`
const SkillText = styled.div`

`