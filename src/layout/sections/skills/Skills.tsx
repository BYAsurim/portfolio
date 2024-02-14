import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My skills</SectionTitle>
                <FlexWrapper flexWrap={'wrap'}>
                    <Skill iconId={'code'} title={'HTML5'}>
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
                    </Skill>
                    <Skill iconId={'css'} title={'CSS'}>
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
                    </Skill>
                    <Skill iconId={'react'} title={'React'}>
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
                    </Skill>

                    <Skill iconId={'typeScript'} title={'TypeScript'}>
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
                    </Skill>
                    <Skill iconId={'styledComponent'} title={'Styled component'}>
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
                    </Skill>
                    <Skill iconId={'figma'} title={'Figma'}>
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
                    </Skill>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
`
