import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/proj1.webp'
import {Container} from "components/Container";

const items = ['All', 'landing page', 'React', 'spa']

export const Works: React.FC = () => {
    const workData = [
        {
            title: 'Social network',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            src: socialImg
        },
        {
            title: 'Social network',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            src: socialImg
        },
    ]

    return (
        <StyledWorks id={'Works'}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={items}/>
                <FlexWrapper justifyContent={'space-between'} alignItems={'flex-start'} flexWrap={'wrap'}>

                    {workData.map((el, index) => {
                        return <Work key={index} src={el.src} title={el.title} text={el.text}/>
                    })}

                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px
    }
`
