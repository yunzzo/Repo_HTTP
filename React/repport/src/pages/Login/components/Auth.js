import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import InfoCollect from './InfoCollect'
import GlobalStyle from '../../../GlobalStyle'
import * as S from '../style'
import Name from './Name'
import { KAKAO_AUTH_URL } from './oAuth';

const Auth = () => {
  const [isClicked, setIsClicked] = useState(false);
  const go2InfoColect = () => {
    setIsClicked(true);
  }
  if (isClicked) {
    return (
      <InfoCollect />
    )
  }

  return (
    <GlobalStyle>
      <S.Body >
        <S.AuthContainer>
          <S.CenteredContainer>
            <S.Title>Repport</S.Title>
          </S.CenteredContainer>

          <S.ButtonContainer>
            <S.AuthButton>
              <a href={KAKAO_AUTH_URL}>
                <span>카카오톡으로 계속하기</span>
              </a>
            </S.AuthButton>
          </S.ButtonContainer>
        </S.AuthContainer>
      </S.Body>
    </GlobalStyle>
  );
}

export default Auth;


