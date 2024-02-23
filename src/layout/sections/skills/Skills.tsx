import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/FlexWrapper";
import {SectionTitle} from "components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "components/Container";

export const Skills = () => {
    const skillData = [
        {
            iconId: 'code',
            title: 'HTML5'
        },
        {
            iconId: 'css',
            title: 'CSS3'
        },
        {
            iconId: 'react',
            title: 'React'
        },
        {
            iconId: 'typeScript',
            title: 'TypeScript'
        },
        {
            iconId: 'styledComponent',
            title: 'Styled components'
        },
        {
            iconId: 'figma',
            title: 'Figma'
        },

    ]

    return (
        <StyledSkills id={'Skills'}>
            <Container>
                <SectionTitle>My skills</SectionTitle>
                <FlexWrapper flexWrap={'wrap'}>
                    {
                        skillData.map((el, index) => {
                            return <Skill key={index} iconId={el.iconId} title={el.title}>
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                                ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
                            </Skill>
                        })
                    }
                </FlexWrapper>
            </Container>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
`
