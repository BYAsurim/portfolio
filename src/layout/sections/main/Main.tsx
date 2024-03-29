import React from 'react';
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/Container";
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect';


export const Main: React.FC = () => {
    return (
        <S.Main id={'Home'}>
            <Container>
                <FlexWrapper alignItems={'center'} justifyContent={'space-around'} flexWrap={'wrap'}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span> Aliaksandr Nikolaevich </span></S.Name>
                        <S.MainTitle>
                           <p>A Web Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>

                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="photo"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};



