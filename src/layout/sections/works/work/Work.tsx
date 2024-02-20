import React from 'react';
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from './Work_Styles'

type WorkPropsType = {
    src: string
    title: string
    text: string

}
export const Work: React.FC<WorkPropsType> = ({
                                            src, title, text
                                        }) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={src} alt={''}/>
                <Button>view project</Button>
            </S.ImageWrapper>

            <S.Description>
                <S.Title>{title}</S.Title>
                <S.Text>{text}</S.Text>
                <Link href={''}>demo</Link>
                <Link href={''}>code</Link>
            </S.Description>
        </S.Work>
    );
};

