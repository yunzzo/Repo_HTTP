import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Taste_basicinfo_screen = (props) => {
  return (
    <ScreenContainer>
      취향_기본정보_화면
      <Link to="/choose_taste_to_edit"><img src={require("../images/edit.png")}/></Link>
    </ScreenContainer>
  );
};

const ScreenContainer = styled.div`
width:100%;
height:100%;

a {
  //연필버튼 고정
  position:fixed;
  right:2.5%;
  bottom:1.18%;
}
`

export default Taste_basicinfo_screen;
