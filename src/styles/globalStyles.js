import styled from "styled-components";

// Used for wrapping a page component
export const Body = styled.div`
  
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;

  :after{
  content: "";
  background-size: cover;
  background-position: 100% 100%;
  opacity: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  }
 
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
 
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  width: ${({ wid }) => (wid ? wid+"%" : "100%")};


  @media screen and (max-width: 1300px) {
    flex-wrap:wrap;
  }
  
`;

export const AmountContainer = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  width: ${({ wid }) => (wid ? wid+"%" : "100%")};
  margin:auto;


  
`;

export const TextTitle = styled.p`
  color: ${({color}) => color ? color : "#ffffff"};
  font-size:1.8rem;
  font-weight: 500;
  line-height: 1.6;
  font-family: 'syne';
  font-style: Regular;
 
`;

export const TextSubTitle = styled.p`
  color: ${({color}) => color ? color : "#ffffff"};
  font-size: ${({size}) => size ? size+"rem" : "1.5rem"};
  font-family: 'syne';
  text-align:${({align}) => align ? align : "center"};
`;

export const TextDescription = styled.p`
  color: ${({color}) => color ? color : "#ffffff"};
  font-size: ${({size}) => size ? size : "1.5rem"};
  line-height: 1.6;
  font-family: 'syne';
  text-align:center;
  width:90%;
  display:block;
  margin:0 auto;

  @media screen and (min-width: 1300px) {
    margin-top: 0 ;
  }
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;

export const line = styled.hr`
width:100%;
color:#ffffff;
`;

export const row = styled.div`
display:grid;
grid-template-columns: ${({ col }) => (col ? col+"%" + col+"%" : "50% 50%")};
width = ${({ wid }) => (wid ? wid+"%" : "100%")};
justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
align-items: ${({ ai }) => (ai ? ai : "flex-start")};
column-gap:${({ gap }) => (gap ? gap+"%" : "20%")};

@media screen and (max-width: 1300px) {
  grid-template-columns: ${({ col }) => (col ? col+"%" + col+"%" : "100%")};s
}
`;

export const Mint = styled.div`
  padding:40px 60px;
  background-color: rgb(0,0,0,0);
  border-radius:25px;
  width:30%;

  @media screen and (max-width: 1300px) {
    width:95%;
    margin-top:-5vh;
  }

`;

export const CatDiv = styled.div`
  display:block;
  width:45%;

  @media screen and (max-width: 1300px) {
    width:100%;
    margin-top:10px !important;
  }

`;

export const Image = styled.img`
  width: ${({ wid }) => (wid ? wid+"%" : "100%")};
  transition: width 0.5s;
  transition: height 0.5s;
  margin-top:20px;
  display:block;
  margin:0 auto;
  @media (max-width: 1300px) {
    width: 100%;
    margin-top:0;

  }
`;  

export const Line = styled.hr`
  width:100%;
  border: 1px solid rgb(0,0,0,0);
`;

export const FlexContainer = styled.div`
  display:flex;
  flex-direction:${({ fd }) => (fd ? fd : "column")};
  justify-content:${({ jc }) => (jc ? jc : "flex-start")};
  align-item :${({ ai }) => (ai ? ai : "flex-start")};
  flex-wrap:wrap;
  margin-top : ${({ mt }) => (mt ? mt : "0")};


`;

export const connectButton = styled.button`
  width:100%;
  padding:10px;
  background-color: #3f74fc;
  color: #ffffff;
  font-family: 'syne';
  font-style: Bold;
  text-align:center;
  font-size:1.6rem;
  border: 1px solid #3f74fc;
  border-radius:8px;
  cursor:pointer;
  transition: all 0.5s;
`;

export const maxButton = styled.button`
  width:25%;
  color: #3f74fc;
  
  border: 3px solid #3f74fc;
  background-color: rgb(0,0,0,0);
  height:50px;
  border-radius:10px;
  font-family: 'syne';
  font-size:1.4rem;
  position:relative;
  margin-left:auto;

  @media screen and (max-width: 1300px) {
    position: relative;
    margin-left: auto;
    margin-bottom: 10px;
    width:25%;
   
  }


`;


export const Layout = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0, 0);
  background-color: rgba(0,0,0, 0);
  
  
  

`;
