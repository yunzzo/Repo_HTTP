import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import InfoCollect from './InfoCollect'
import GlobalStyle from '../../../GlobalStyle'
import * as S from '../style'
import Name from './Name'

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
              <ul>
                <Link to="/InfoCollect"><li>카카오톡으로 계속하기</li></Link>
              </ul>
            </S.AuthButton>
            <S.AuthButton onClick={go2InfoColect}>
              <ul>
                <Link to="/InfoCollect"><li> Gmail로 계속하기</li></Link>
              </ul>
            </S.AuthButton>
          </S.ButtonContainer>
        </S.AuthContainer>
      </S.Body>
    </GlobalStyle>
  );
}

export default Auth;


