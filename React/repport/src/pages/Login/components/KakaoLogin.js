import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Name from './Name';
import Splash from './splash';
import { MdApi } from 'react-icons/md';

const KakaoLogin =(code) => {
    const CODE = code.code
    const url=`http://localhost:8000/api/oauth/kakao/login?code=${CODE}`
    
    try {
        axios.get(url);
        console.log("hi");
        // console.log(CODE);
    } catch (error) {
        console.log("error", error);
    }
      return <Name/>
      
  }
  export default KakaoLogin;
 