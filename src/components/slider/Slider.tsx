import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './Slider_Styles'
import '../../styles/slider.css'


type SlidePropsType = {
    text: string
    userName: string
}
const Slide: React.FC<SlidePropsType> = ({text, userName}) => {
    return <S.Slide>
        <S.Text>
            {text}
        </S.Text>
        <S.Name>@{userName}</S.Name>
    </S.Slide>
}

const items = [
    <Slide text={' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n' +
        '                        labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
    userName={'Igor ZUZ'}
    />,
    <Slide
        text={' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n' +
            '                        labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
        userName={'Igor ZUZ'}
    />,
    <Slide
        text={' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n' +
            '                        labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
        userName={' Igor ZUZ'}
    />,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>
);


// import React from 'react';
// import {FlexWrapper} from "../FlexWrapper";
// import {S} from './Slider_Styles'
//
// export const Slider:React.FC = () => {
//     return (
//         <S.Slider>
//             <FlexWrapper>
//                 <S.Slide>
//                     <S.Text>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
//                         labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     </S.Text>
//                     <S.Name>@ivan ivanow</S.Name>
//                 </S.Slide>
//             </FlexWrapper>
//             <S.Pagination>
//                 <span></span>
//                 <span className={'active'}></span>
//                 <span></span>
//             </S.Pagination>
//
//         </S.Slider>
//     );
// };
//
