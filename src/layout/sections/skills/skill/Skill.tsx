import React, {FC} from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from './Skill_Styles'

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
        <S.Skill>
            <FlexWrapper flexDirection={'column'} alignItems={'center'}>
                <S.IconWrapper>
                    <Icon iconId={iconId}/>
                </S.IconWrapper>
                <S.SkillTitle>{title}</S.SkillTitle>
                <S.SkillText>
                    {children}
                </S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};

