//*기본화면에서 취향 클릭 시 나타나는 화면

/*
백엔드 서버에서 GET요청
특정 취향과 그 취향에 대한 내용 GET요청으로 성공적으로 가져옴
1)원래 기본 취향들이 있어서, 데이터베이스에 이것 반영해야함
2)기본취향들과, 추가된 취향들에 대한 각각의 이미지가 있어서, 데이터베이스 수정하고 useEffect상에서 이미지 넣는 코드 짜야함 
*/

import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

/*
특정 사람에에 대한 취향들(기본 취향들 + 사용자가 추가적으로 입력한 취향들)
그 취향들에 대해서 사용자가 입력한 구체적 내용들
*/



const Taste_taste_screen = (props) => {
  console.log("mount")
  let match = useRouteMatch();
  let friend_id = match.params.friend_id;
  let UrlToChooseTasteToEdit=`/RelationshipList/${friend_id}/taste/choose_taste_to_edit`

  //데이터통신
  const [infos, setInfos] = useState();
  const [isLoading, setIsLoading] = useState(false);
  //error을 컨트롤하기 위한 state
  const [error, setError] = useState(null);
  const [listElements,setListElements]=useState([]);
  
  //데이터 통신 함수
  async function fetchTasteHandler() {
    console.log("fetch start");
    //로딩시작
    setIsLoading(true);
    setError(null)
    try {
      const response = await fetch('http://localhost:8000/api/tastes');
      
      //에러가 있다면
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      
      //리스트 엘리먼트 생성
      const list_of_elements=data.map((taste) => (
        <ListItemsContainer><li key={taste.id}><ListImageContainer><img src={require("../images/custom.png")}/></ListImageContainer><ListTextsContainer><span>{taste.category}</span><span>{taste.contents}</span></ListTextsContainer></li></ListItemsContainer> 
    ));
      setListElements(list_of_elements);
    }

    catch (error){
      setError(error.message);
    }
    //로딩 종료 
    setIsLoading(false);
  };


  useEffect(() => {
    console.log("useEffect");
    fetchTasteHandler();
   },[]);

  
  //image를 렌더링하기 위한 로직
  /*
  매번 이렇게 반복문과 검사를 해주어야 하므로 비효율적이지만,
  문자열 값인 변수를 넣으면 작동하지않는 require의 특성때문에,
  현재로써는 이게 최선인 것 같다.
  */
  // const imageSources = [
  //   require("../images/food.png"),
  //   require("../images/hobby.png"),
  //   require("../images/music.png"),
  //   require("../images/culture.png"),
  //   require("../images/place.png"),
  //   require("../images/present.png"),
  //   require("../images/custom.png"),
  // ];
  // //받아온 호칭 배열에 이미지 주소 넣기
  // for(let i=0;i<props.tastes.length;i++){
  //   if (i<6){
  //     props.tastes[i].image=imageSources[i];
  //   }
  //   else{
  //     props.tastes[i].image=imageSources[6];
  //   }
  // }

  // //props로 받아온 딕셔너리 배열로 리스트 엘리먼트 생성.
  // const list_of_tastes = props.tastes.map((taste) => (
  //       <ListItemsContainer><li key={taste.key}><ListImageContainer><img src={taste.image}/></ListImageContainer><ListTextsContainer><span>{taste.name}</span><span>{taste.content}</span></ListTextsContainer></li></ListItemsContainer>
  // ));

  return (
  <>
  {isLoading ? (<div>Loading...</div>):(<ScreenContainer>
    <ul>{listElements}</ul>
  <Link to={`/RelationshipList/${friend_id}/taste/choose_taste_to_edit`}><img src={require("../images/edit.png")}/></Link>
  </ScreenContainer>)}
  </>

  );
};

export default Taste_taste_screen;


const ScreenContainer = styled.div`
width:100%;
height:100%;
//ul list에서 점 없애줌.
//ul의 기본 마진과 패딩이 존재해서, 없애줌.
ul { list-style: none; padding-left: 0px; margin:0px; 
  /*ListItemsContainer의 부모 요소가 ul이여서, 의도한대로 크기를 적용하기 위해서는 ul에도 크기를 주어야한다. */
  width:100%; height:100% };


a {
  //연필버튼 고정
  position:fixed;
  

  right:2.5%;
  bottom:1.18%;
 
}
`
const ListItemsContainer = styled.div`
width:100%;
height:20%;
/* 
MVP에는 border에 대한 속성이
opacity: 0.4;
border: solid 0.5px #627cec 로 되어있었는데,

border이 아닌 border-bottom에만 속성을 적용하고,
#627cec를 rgb값으로 바꾸고,
opacity를 rgba값으로 함께 주어서
border-bottom의 색과 투명도를 함께 적용하였다.
*/
border-bottom: solid 0.5px rgba(98,124,236,0.3);
li {
/*ListImageContainer, ListTextsContainer의 부모 요소이므로, 크기 설정과 flex box로 지정 */
display:flex;
width:100%;
height:100%;
}
`
const ListImageContainer = styled.div`
width:35%;
height:100%;

display:flex;
justify-content: center;
align-items: center;

img {
  width:55%;
  height:55%;
}
`

const ListTextsContainer = styled.div`
width:65%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;

span:nth-child(1) {
  font-size:0.938rem;
  font-weight: bold;
  color: #292929;
  font-family: Roboto;
}

span:nth-child(2) {
  font-size:0.938rem;
  font-weight: normal;
  color: #939393;
  font-family: Roboto;
}
`

