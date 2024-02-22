import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contakt_Styles'
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return
        emailjs
            .sendForm('service_lg30fkp', 'template_24kximi', form.current, {
                publicKey: 'vxqCINgjIaHk1r1yO',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },

            );
        e.target.reset()
    };

    return (
        <S.Contact id={'Contacts'}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field placeholder={'email'} name={'email'} required/>
                    <S.Field placeholder={'name'} name={'name'} required/>
                    <S.Field placeholder={'subject'} name={'subject'} required/>
                    <S.Field as={'textarea'} placeholder={'message'} name={'message'} required/>
                    <Button type={'submit'}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};
