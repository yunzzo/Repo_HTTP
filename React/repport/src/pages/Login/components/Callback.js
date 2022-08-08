import React, { useState } from 'react'
import * as S from '../style'
import BringContacts from './BringContacts';
import InfoCollect from './InfoCollect';
import GlobalStyle from '../../../GlobalStyle';
import { Link } from "react-router-dom";
import KakaoLogin from './KakaoLogin';
import Name from './Name';


const Callback = () => {
    // 인가코드
    let AUTHORIZE_CODE = new URL(window.location.href).searchParams.get("code");

    // console.log(AUTHORIZE_CODE)

   
    return (
       <KakaoLogin code={AUTHORIZE_CODE}/>
    );
}

export default Callback;
