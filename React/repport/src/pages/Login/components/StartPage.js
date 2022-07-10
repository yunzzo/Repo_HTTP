import React, { useState } from 'react'
import * as S from '../style'
import CheckFriends from './CheckFriends';
import RelationshipList from '../../Relationship/components/RelationshipList';
import BringContacts from './BringContacts';
import GlobalStyle from '../../../GlobalStyle';
import { Link } from 'react-router-dom';

const StartPage = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isSkipped, setIsSkipped] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);

    const go2checkFriends = () => {
        if (props.isSkipped) {
            setIsSkipped(props.isSkipped);
        } else {
            setIsClicked(true);
        }
    }
    const go2RelationshipPage = () => {
        setIsAccepted(true);
    }

    if (isClicked) {
        return (
            <CheckFriends />
        )
    }
    if (isAccepted) {
        return (
            <RelationshipList />
        )
    }
    if (isSkipped) {
        return (
            <BringContacts />
        )
    }

    return (
        <GlobalStyle>
            <S.Body>
                <S.InfoCollectContainer>
                    <S.LeftSidedContainer>
                        <S.UpperBar onClick={go2checkFriends}>&lt;  시작하기</S.UpperBar>
                    </S.LeftSidedContainer>
                    <S.LeftSidedContainer>
                        <S.InfoCollectBox>
                            <S.AskName>
                                시작할 준비가
                            </S.AskName>
                            <S.AskName>
                                되었습니다.
                            </S.AskName>
                        </S.InfoCollectBox>
                    </S.LeftSidedContainer>
                    <S.CenteredContainer>
                        <S.Temp onClick={go2RelationshipPage} >
                            <ul>
                                <Link to="/RelationshipList"><li> 시작하기</li></Link>
                            </ul>
                        </S.Temp>
                    </S.CenteredContainer>
                </S.InfoCollectContainer>
            </S.Body>
        </GlobalStyle>
    );
}

export default StartPage;
