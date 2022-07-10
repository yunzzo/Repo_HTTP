import styled from 'styled-components'

export const StartButton = styled.div`
  margin-top:75vh;
  font-size:1.1rem;
  color: #5B7DF4;
  width: 12vw;
  height: 8vh;
  border: 2px solid white;
  border-radius:4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  background-size: 1000%;

`
export const BlueBody = styled.div`
  margin: 0;
  box-sizing: border-box;
  font-size: 1.6rem;
  background-color: #5B7DF4;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom:10vw;
`
export const AuthButton = styled.div`
  font-size:0.9rem;
  width: 25vw;
  height: 6vh;
  border-radius:0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  margin-top:0.6rem;
  box-shadow: 1px 1px 5px 3px rgba(0,0,0,0.1);
`
export const Body = styled.div`
  margin: 0;
  box-sizing: border-box;
  font-size: 1.6rem;
  padding-bottom:20vw;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  margin-top:18rem;
`
export const AuthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction:column;
`
export const InfoCollectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction:column;
`
export const CenteredContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
  margin-top:15rem;
`
export const Extend = styled.div`
  display: flex;
  flex-direction:column;
  margin-top:0.5rem;
  font-size:1.0rem;
  text-decoration:underline;
  text-underline-position: under;
  color:gray;
`

export const Title = styled.div`
  color:#5B7DF4;
  font-size:3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const InfoCollectAgree = styled.div`
  font-size:1.0rem;
  font-weight:600;
`

export const LeftSidedContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top:2rem;
  margin-left:2.5vw;
`
export const UpperBar = styled.div`
  font-size:1.0rem;
  font-weight:600;
  color:gray;
`
export const InfoCollectBox = styled.div`
  margin-top:36vh;
  
`

export const CheckBox = styled.div`
  margin-top:38vh;
  font-size:1.5rem;
  margin-left:4rem;
  color: ${props => props.isChecked ? '#5B7DF4' : 'gray'};
`
export const AskName = styled.div`
  font-size:1.2rem;
  font-weight:600;
`
export const InputBox = styled.input`
  margin-top:0.7rem;
  padding-left: 1rem;
  font-size:1.1rem;
  border: 1px solid black;
  border-radius:0.5rem;
  height:3rem;
  width: 19rem;
  color: ${props => props.isClickedInput ? '#5B7DF4' : 'gray'};
  &:focus {outline-color: #5B7DF4};
  &::placeholder{
    color:${props => props.isClickedInput ? '#5B7DF4' : 'gray'};
    font-size: 1.1rem;
    padding-left: 1rem;
  }
`
export const HorizontalSpaceBetween = styled.div`
  padding-right:7rem;
`
export const ModalText = styled.div`
  font-size:0.7rem;
  color:#5B7DF4;
`

export const Temp = styled.div`
 
`