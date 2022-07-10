import React, { useState, useEffect } from 'react'
import * as S from '../style'
import GlobalStyle from '../../../GlobalStyle';


import InfoLoadingComponent from '../../../InfoLoading';
import Infos from '../../../Infos';
import InfoLoading from '../../../InfoLoading';

function RelationshipList() {
  // const RelationshipList = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedInput, setIsClickedInput] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const InfoLoading = InfoLoadingComponent(Infos);
  const [appState, setAppState] = useState({
    loading: false,
    infos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:8000/api/`;
    fetch(apiUrl)
      .then((data) => data.json())
      .then((infos) => {
        setAppState({ loading: false, infos: infos });
      });
  }, [setAppState]);

  const go2BringContacts = () => {
    setIsClicked(true);
  }

  const handleFriends = (e) => {
    // props.isCheckedFriends(true);
    setIsSubmitted(true);
  }

  return (
    <GlobalStyle>
      <S.Body >
        <S.RelationshipListContainer>
          <S.RightSidedContainer>
            <S.BarContainer>
              <S.TopBar onClick={go2BringContacts}>+</S.TopBar>
              <S.MiddleBar>Relationship</S.MiddleBar>
              <S.ScrollBar>
                <S.GroupButton>전체</S.GroupButton>
                <S.GroupButton>별</S.GroupButton>
                <S.GroupButton>가족</S.GroupButton>
                <S.GroupButton>학교</S.GroupButton>
                <S.GroupButton>친구</S.GroupButton>
              </S.ScrollBar>
            </S.BarContainer>
            <div>
              <InfoLoading isLoading={appState.loading} infos={appState.infos} />
            </div>
          </S.RightSidedContainer>
        </S.RelationshipListContainer>
      </S.Body>
    </GlobalStyle>
  )
}

export default RelationshipList;