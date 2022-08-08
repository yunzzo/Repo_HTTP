import React, { useState, useEffect } from 'react'
import * as S from '../style'
import GlobalStyle from '../../../GlobalStyle';
import axios from "axios";
import { Route, Link, useRouteMatch } from "react-router-dom";

function RelationshipList() {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedInput, setIsClickedInput] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [infos, setInfos] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getInfos = async () => {
    const apiUrl = `http://localhost:8000/api/friends`;
    await axios
      .get(apiUrl)
      .then((res) => {
        console.log(res);
        setInfos(res.data);
      })
  }
  // useEffect(async () => {
  //   await getInfos();
  //   setIsLoading(false);
  // }, []);


  const go2BringContacts = () => {
    setIsClicked(true);
  }

  const handleFriends = (e) => {
    // props.isCheckedFriends(true);
    setIsSubmitted(true);
  }
  if (isLoading) {
    return <div>로딩중..</div>;
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

          </S.RightSidedContainer>
          <S.RightSidedContainer>
            <div>

              {infos.map((info) => {
                return (
                  <div key={info.id}>
                    <Link to={`/RelationshipList/${info.id}/taste`}> <h5>{info.fname}</h5></Link>
                    <p>{info.cellNum}</p>
                  </div>
                )

              })}


            </div>
          </S.RightSidedContainer>
        </S.RelationshipListContainer>
      </S.Body>
    </GlobalStyle>
  )
}

export default RelationshipList;