import React, { useState } from 'react'
import Auth from './Auth';
import * as S from '../style'
import Name from './Name';
import GlobalStyle from '../../../GlobalStyle';
import { REST_API_KEY } from './oAuth';


const InfoCollect = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    // const NEXT_URL="http://localhost:3000/Name";

   
    // fetch(`https://kauth.kakao.com/oauth/token`, {
    //     body: `grant_type=authorization_code&client_id=${REST_API_KEY}&code=${AUTHORIZE_CODE}&redirect_uri=${NEXT_URL}`,
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded"
    //     },
    //     method: "POST"
    //   })


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
