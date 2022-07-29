import React, { useState } from 'react'
import Auth from './Auth';
import * as S from '../style'
import Name from './Name';
import GlobalStyle from '../../../GlobalStyle';


const InfoCollect = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);


    // 인가코드
    let code = new URL(window.location.href).searchParams.get("code");

    console.log(code)


    const go2Auth = () => {
        setIsClicked(true);
    }

    const go2Name = () => {
        setIsSubmitted(true);
    }


    const turnBlue = () => {
        if (isChecked) {
            setIsChecked(false);
            setIsSubmitted(false);
        }
        else {
            setIsChecked(true);
            setIsSubmitted(false);
        }
    }
    if (isClicked) {
        return (
            <Auth />
        )
    }
    if (isChecked) {
        if (isSubmitted) {
            return (
                <Name />
            )
        }
    }
    return (
        <GlobalStyle>
            <S.Body >
                <S.InfoCollectContainer>
                    <S.LeftSidedContainer>
                        <S.UpperBar onClick={go2Auth}>&lt;  이용약관 동의</S.UpperBar>
                    </S.LeftSidedContainer>
                    <S.LeftSidedContainer>
                        <S.InfoCollectBox>
                            <S.InfoCollectAgree>
                                이용약관 및
                            </S.InfoCollectAgree>
                            <S.InfoCollectAgree>
                                개인정보처리방침에 동의합니다.
                            </S.InfoCollectAgree>
                            <S.Extend>
                                전문보기
                            </S.Extend>
                        </S.InfoCollectBox>
                        <S.CheckBox onClick={turnBlue} isChecked={isChecked}>V</S.CheckBox>
                    </S.LeftSidedContainer>
                    <S.CenteredContainer onClick={go2Name}>
                        button
                    </S.CenteredContainer>

                </S.InfoCollectContainer>
            </S.Body>
        </GlobalStyle>
    );
}

export default InfoCollect;
