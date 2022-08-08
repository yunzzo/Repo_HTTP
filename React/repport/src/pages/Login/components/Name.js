import React, { useState } from 'react'
import * as S from '../style'
import BringContacts from './BringContacts';
import InfoCollect from './InfoCollect';
import GlobalStyle from '../../../GlobalStyle';
import { Link } from "react-router-dom";

const Name = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isClickedInput, setIsClickedInput] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const go2Auth = () => {
        setIsClicked(true);
    }

    const go2BringContacts = () => {
        setIsSubmitted(true);
    }

    const turnBlue = () => {
        if (isClickedInput) {
            setIsClickedInput(false);
        }
        else {
            setIsClickedInput(true);
        }
    }
    if (isClicked) {
        console.log("눌렀다");
        return (
            <InfoCollect />
        )
    }
    if (isSubmitted) {
        return (
            <BringContacts />
        )
    }
    return (
        <GlobalStyle>
            <S.Body onClick={turnBlue} >
                <S.InfoCollectContainer>
                    <S.LeftSidedContainer>
                        <S.UpperBar onClick={go2Auth}>&lt;  프로필 설정</S.UpperBar>
                    </S.LeftSidedContainer>
                    <S.LeftSidedContainer>
                        <S.InfoCollectBox>
                            <S.AskName>
                                당신의 이름은
                            </S.AskName>
                            <S.AskName>
                                무엇인가요?
                            </S.AskName>
                            <S.InputBox className="box" onClick={turnBlue} isClickedInput={isClickedInput}></S.InputBox>
                        </S.InfoCollectBox>
                    </S.LeftSidedContainer>
                    <S.CenteredContainer onClick={turnBlue}>
                       <Link to={`/BringContacts`}><div>button</div></Link>
                    </S.CenteredContainer>

                </S.InfoCollectContainer>
            </S.Body>
        </GlobalStyle>
    );
}

export default Name;
