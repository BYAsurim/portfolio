import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";


export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, []);

    return (<>
        {
            showBtn && <StyledGoTopBtn onClick={() => scroll.scrollToTop()}>
                <Icon iconId={'goTopBtn'} width={'16'} height={'15'} viewBox={"0 0 16 15"}/>
            </StyledGoTopBtn>
        }

    </>);
};

const StyledGoTopBtn = styled.button`
    background-color: #0000004D;
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;

`