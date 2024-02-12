import React, {FC} from 'react';
import styled from "styled-components";

type WorkPropsType = {
    src: string
    title: string
    text: string

}
export const Work: FC<WorkPropsType> = ({
                                            src, title, text
                                        }) => {
    return (
        <StyledWork>
            <Image src={src} alt={''}/>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Link href={''} >demo</Link>
            <Link href={''}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: goldenrod;
    max-width: 540px;
    width: 100%;

`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Title = styled.h3`

`
const Text = styled.p`

`
const Link = styled.a`

`