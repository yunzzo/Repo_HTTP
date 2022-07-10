import React, { useState } from 'react'
import * as S from '../style'
import StartPage from './StartPage';
import Modal from './Modal';
import CheckFriends from './CheckFriends';
import Name from './Name';
import GlobalStyle from '../../../GlobalStyle';

const BringContacts = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isClickedInput, setIsClickedInput] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [isSkipped, setIsSkipped] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);
    const [isFriendsCompleted, setIsFriendsCompleted] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);

    const go2Name = () => {
        if (props.isFriendsCompleted) {
            setIsClicked2(true);
        }
        else {
            setIsClicked(true);
        }
    }
    const go2StartPage = () => {
        setIsSkipped(true);
    }

    const openOrCompleted = () => {
        if (props.isFriendsCompleted) {
            setIsFriendsCompleted(props.isFriendsCompleted);
        }
        else {
            setModalOpen(true);
        }
    }
    const closeModal = () => {
        setModalOpen(false);
    };


    const turnBlue = () => {
        if (isClickedInput) {
            setIsClickedInput(false);
        }
        else {
            setIsClickedInput(true);
        }
    }
    if (isClicked) {
        return (
            <Name />
        )
    }
    const handleAcception = (isModalAccepted) => {
        setIsAccepted(isModalAccepted);
        setModalOpen(false);
    }

    if (isAccepted) {
        return (
            <CheckFriends />
        )
    }
    if (isFriendsCompleted) {
        return (
            <StartPage />
        )
    }
    if (isClicked2) {
        return (
            <CheckFriends />
        )
    }
    if (isSkipped) {
        return (
            <StartPage isSkipped={isSkipped} />
        )
    }
    return (
        <GlobalStyle>
            <S.Body>
                <S.InfoCollectContainer>
                    <S.LeftSidedContainer>
                        <S.UpperBar onClick={go2Name}>&lt;  연락처 가져오기</S.UpperBar>
                        <S.HorizontalSpaceBetween></S.HorizontalSpaceBetween>
                        <div >
                            {!props.isFriendsCompleted && <S.UpperBar onClick={go2StartPage}>건너뛰기</S.UpperBar>}
                        </div>
                    </S.LeftSidedContainer>
                    <S.LeftSidedContainer>
                        <S.InfoCollectBox>
                            <S.AskName>
                                어떤 분과의 관계를
                            </S.AskName>
                            <S.AskName>
                                관리하고 싶으신가요?
                            </S.AskName>
                            <S.Extend>
                                카카오톡에서 가져오기
                            </S.Extend>
                        </S.InfoCollectBox>
                    </S.LeftSidedContainer>
                    <S.CenteredContainer onClick={turnBlue}>
                        <S.Temp onClick={openOrCompleted} style={{ color: props.isFriendsCompleted ? 'blue' : 'red' }} >button</S.Temp>
                        <Modal open={modalOpen} close={closeModal} isModalAccepted={handleAcception}>
                            <S.ModalText>Repport에서 내연락처에 엑세스하도록 허용하시겠습니까?</S.ModalText>
                        </Modal>
                    </S.CenteredContainer>
                </S.InfoCollectContainer>
            </S.Body>
        </GlobalStyle>
    );
}

export default BringContacts;
