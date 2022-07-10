import React, { useState } from 'react'
import * as S from '../style'
import BringContacts from './BringContacts';
import GlobalStyle from '../../../GlobalStyle';

const CheckFriends = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedInput, setIsClickedInput] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const turnBlue = () => {
    if (isClickedInput) {
      setIsClickedInput(false);
    }
    else {
      setIsClickedInput(true);
    }
  }
  const go2BringContacts = () => {
    setIsClicked(true);
  }

  const handleFriends = (e) => {
    // props.isCheckedFriends(true);
    setIsSubmitted(true);
  }
  if (isClicked) {
    return (
      <BringContacts />
    )
  }
  if (isSubmitted) {
    return (
      <BringContacts isFriendsCompleted={isSubmitted} />
    )
  }
  return (
    <GlobalStyle>
      <S.Body onClick={turnBlue}>
        <S.InfoCollectContainer>
          <S.LeftSidedContainer>
            <S.UpperBar onClick={go2BringContacts}>&lt;  연락처 가져오기</S.UpperBar>
          </S.LeftSidedContainer>

          <S.CenteredContainer onClick={turnBlue}>
            <S.InputBox className="box" onClick={turnBlue}
              isClickedInput={isClickedInput} placeholder="이름 검색"></S.InputBox>
          </S.CenteredContainer>

          <S.CenteredContainer onClick={turnBlue}>
            <div onClick={handleFriends} >button</div>
          </S.CenteredContainer>
        </S.InfoCollectContainer>
      </S.Body>
    </GlobalStyle>
  )
}

export default CheckFriends;