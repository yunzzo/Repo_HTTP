
const CLIENT_ID = "42fc419b3e4a3a02d4a5e0686e76b844";
const REDIRECT_URI = "http://localhost:3000/InfoCollect";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
