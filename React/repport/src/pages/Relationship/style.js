import styled from 'styled-components'

export const Body = styled.div`
  margin: 0;
  box-sizing: border-box;
  font-size: 1.6rem;
  padding-bottom:20vw;
`


export const RightSidedContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

export const RelationshipListContainer = styled.div`
  display: flex;
  margin-left:2vw;
  justify-content: space-between;
  flex-direction:column;
`
export const BarContainer = styled.div`
  display: flex;
  flex-direction:column;
`
export const TopBar = styled.div`
  font-size:2.5rem;
  font-weight:600;
  text-align:right;
  color: #5B7DF4;
`
export const MiddleBar = styled.div`
  font-size:1.5rem;
  font-weight:600;
  margin-bottom: 0.8rem;
  margin-top: 0.5rem;
`
export const ScrollBar = styled.div`
  display: flex;
  // justify-contents:space-between;
  font-size:1.0rem;
  font-weight:600;
`
export const GroupButton = styled.div`
  font-size:0.9rem;
  width: 4vw;
  height: 3.5vh;
  border-radius:1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightGray;
  margin-top:0.6rem;
  margin-right:0.6rem;
  box-shadow: 1px 1px 5px 3px rgba(0,0,0,0.1);
`