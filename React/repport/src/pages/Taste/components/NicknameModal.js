//*호칭 버튼을 클릭하면 뜨는 모달
//! 반응형 완료

//todo 글자 크기 늘어나면 그에따라 콘텐츠 크기도 커지게..
//todo PATCH요청 보내는 것 코드 일단 주석처리 해놓음.
//todo 직접입력시 POST 요청도 해야함.

import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import MainButton from "./MainButton";

import styled from "styled-components";
import axios from "axios";

const NicknameModal = (props) => {

  let match = useRouteMatch();
  let friend_id = match.params.friend_id;

  //사용자로부터 전달받은 호칭을 저장하는 state
  const [selectedNickname, setSelectedNickname] = useState("");

  //이것 결국 백엔드로부터 GET요청으로 받아와야하는 것
  const [nicknames, setNicknames]=useState(['호칭없음','님','씨','쓰','언니','오빠','형','누나','선배','후배','선생님','교수님'])
  
  const [isBtnSelected, setIsBtnSelected]=useState(false);

  //완료 버튼
  const completeHandler = () => {
    //todo 만약에 완료 버튼 눌렀을 시 조건문으로 검사해 아무 것도 선택되지 않았다면, 기본값(호칭)으로 설정하거나 필수적으로 선택해야한다는 문구 띄우는 로직 작성하기
    props.onChange(selectedNickname);
    
    //완료 시 선택한 호칭을 백엔드로 저장
    // axios({
    //   url:`http://localhost:8000/api/friends/${friend_id}`,
    //   method:'patch',
    //   data:{
    //     how2call:selectedNickname
    //   },
    // })
    
    //백엔드로 요청을 보낸후 중간 변수 초기화
    setSelectedNickname("")
    //닉네임을 바꾸었으면 모달을 끈다.
    props.onCancel();
  };

  //취소 버튼
  const delHandler = () => {
    props.onCancel();
    //그리고 논리적으로 호칭을 임시 저장하는 state도 초기화 해주어야함
    setSelectedNickname("");
  };

  //특정 호칭 클릭했을 때
  const nicknameHandler = (e) => {
    setSelectedNickname(e.target.innerText);
    

};
    
const styleChangeHandler =(idx) => {
  //이렇게 구성하면 항상 한 요소만 true일 수 밖에 없다
  const newArr = Array(nicknames.length).fill(false);
  console.log("newArr",newArr);
  newArr[idx] = true;
  setIsBtnSelected(newArr);
  console.log("changed",isBtnSelected);
}

  const nameInputHandler = (e)=> {
    if (e.key ==='Enter'){
      setNicknames(n=>[...n,e.target.value]);
    }
  }

  const nicknamesList = nicknames.map((nickname, index) => 
   {
    return (
        <li class={isBtnSelected[index] ? "clickedStyle" : "basicStyle" } key={index} onClick={()=>(styleChangeHandler(index))}>
        <button onClick={nicknameHandler}>{nickname}</button>
      </li>
    )
    }
    )

    const InputElement = <input type="text" onKeyPress={nameInputHandler}  placeholder="직접 입력"/>
    nicknamesList.push(InputElement);

  return (
    <>
      {props.visible ? (
        <ScreenContainer>
          <TransparentContainer></TransparentContainer>
          <ContentContainer>
          <Header>
          <button onClick={delHandler}>취소</button>
            <span>호칭</span>
            <button onClick={completeHandler}>완료</button>
          </Header>
          <SectionBox>
            <ul>
              {nicknamesList}
            </ul>
           
          </SectionBox>
          </ContentContainer>
          </ScreenContainer>
      ) : null}
    </>
  );
};

const ScreenContainer =styled.div`
/*
position:fixed를 하면 기존 문서 흐름에서 벗어나고,
하지만 right 0만 작성해주면 전체 height가 적용되지 않는다.
개발자 도구로 확인해보면 height가 -295라고 되어있다.(왜 이렇게 작동하는지 이유는 모름)
그래서 top 0을 하여 뷰포트 기준으로 배치한다는 것을 명시해주었다.

right도 마찬가지,
따라서 항상 left 0, top 0 이런 식으로 뷰포트를 기준으로 요소를 배치함을 명시해주자,,

*/
width:100vw;
height:100vh;

position:fixed;
top:0;
left:0;
z-index:4;


* {
  box-sizing:border-box;
  margin:0px;
  padding:0px;
  
  ul{
  list-style:none;
  padding-left:0px;
  }
  
  button {
    background-color: transparent;
    border:none;
  }
}
`
const TransparentContainer =styled.div`
width:100%;
height:60%;
//투명하도록
background-color: rgba(0, 0, 0, 0.5);
`

const ContentContainer =styled.div`
width:100%;
height:40%;
background-color: rgba(0, 0, 0, 0.5);

//이 값 안주면 연필버튼이 상위에 표시
z-index:1;
`
const Header =styled.div`
width:100%;
height:20%;
display:flex;
justify-content: space-between;
padding-right:4%;
padding-left:4%;
background-color: white;

//border
border:3px solid white;
//border radius를 px와 %로 줄때의 차이??, %로 주면 내가 원하는대로 나오지 않음->일단 rem으로
border-top-left-radius:1.25rem;
border-top-right-radius:1.25rem;

span {
  display: flex;
  align-items: center;
  text-align: center;
  color: #535353;
  font-family: Roboto;
  font-size: 1.063rem;
  font-weight: bold; 
}


button {
  //text
  font-family: Roboto;
  font-size: 1.063rem;
  font-weight: 500;
  color: #c9c9c9;
  text-align: center;
}

`
const SectionBox=styled.div`
width:100%;
height:80%;
background-color: white;
overflow-y:scroll;

ul {
  display:flex;
  overflow-y:scroll;
  //justify-content: space-between;
  //이걸로 하지말고 padding, width로 구현,,
  flex-wrap:wrap;

  /*
  box-sizing:border-box이므로(width가 가로 전체가 됨) 
  width 100%, padding left right 10%을 주어야
  content영역 80%, padding left right 10%씩 적용이 된다.
  
  그리고 이 방식으로 content영역을 화면의 가운데에 배치할 수 있음.
  상위 컨테이너를 flex box로 만들고 justify-content:center를 하는 방법과 다른 방법
  */
  width:100%;
  padding-left:7%;
  padding-right:7%;
  height:100%;

  .basicStyle {
    
    width:21.8%;
    height:14%;
    
    margin-right:2%;
    margin-left:2%;
    padding-top:2%;
    padding-bottom:2%;
    
    /*
    flex grow, shrink에 0값을 줌으로써 flex item의 크기가 변하지 않도록,
    flex basis값을 20%로 줌으로써 flex item의 크기가 계속 유지되도록
    */
    flex: 0 0 20%;


    border: solid 2px #627cec;
    border-radius: 1.25rem;
    

    
    text-align:center;

    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#fff;
      
    button {
    color:#627cec; 
    font-family: Roboto;
    font-size: 0.875rem;
    font-weight: 500;
      }
    }

    .clickedStyle {
     
    width:21.8%;
    height:14%;
    
    margin-right:2%;
    margin-left:2%;
    padding-top:2%;
    padding-bottom:2%;
    
    /*
    flex grow, shrink에 0값을 줌으로써 flex item의 크기가 변하지 않도록,
    flex basis값을 20%로 줌으로써 flex item의 크기가 계속 유지되도록
    */
    flex: 0 0 20%;

    border: solid 2px #627cec;
    border-radius: 1.25rem;

    text-align:center;

    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#627cec;

    button {
      color:#fff;
      font-family: Roboto;
      font-size: 0.875rem;
      font-weight: 500;
      }
    }

  input {
    width:20%;
    height:14%;  
    margin-right:2%;
    margin-left:2%;

    border: solid 2px #627cec;
    border-radius: 1.25rem;
    background-color: rgba(98, 124, 236, 0.18);

    text-align: center;
  }

  input::placeholder {
    font-family: Roboto;
    font-size: 0.75rem;
    font-weight: 500;
    color: #627cec;
  }

  input:focus {
    outline: none ;
}
}
`
/*
todo
근데 반응형으로 이런식으로 구현하면,
하나 클릭하면 모든 버튼의 배경색과 글자 색이 바뀜
더 고민해서 하나만 바뀌도록 해야함,,
그리고 아직 prop값에 따라 style 안바뀜
prop까지는 잘 전달됨,,
아, 내가 알기로 가상선택자에는 이거 적용 안되는 걸로 암,,

이거 ul태그의 가상선택자 li가 우선해서 가변 스타일링 적용안됐던 것,
그래서 이제 각각 하나하나 씩만 스타일 바뀌도록 구현하면 됨,,
nth child ㄱㄱ??
*/

export default NicknameModal;
