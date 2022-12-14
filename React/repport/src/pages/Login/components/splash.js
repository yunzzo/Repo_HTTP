import React, { useState } from 'react'
import GlobalStyle from '../../../GlobalStyle';
import Auth from './Auth';

import * as S from '../style'
import { Link } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive'
import { useEffect } from 'react';

const Splash = () => {
    //반응형으로 수정하기
    // const isMobile = useMediaQuery({
    //   query: '(max-width:820px)',
    // })
    // const [isClicked, setIsClicked] = useState(false);
    // const go2Auth = () => {
    //     setIsClicked(true);
    // }
    // if (isClicked) {
    //     return (
    //         <Auth />
    //     )
    // }

    return (
        <GlobalStyle>
            <S.BlueBody >
                <S.StartButton >
                    <ul>
                        <Link to="/Auth"><li> 시작하기</li></Link>
                    </ul>
                </S.StartButton>
            </S.BlueBody>
        </GlobalStyle>

    );
}

export default Splash;


