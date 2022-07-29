import  styled  from "styled-components";
import {Link as LinkS } from "react-scroll";

export const Nav= styled.nav`
  background :${({scrollNav}) => (scrollNav ? "#101522" : "transparent")};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  font-size: 1.3rem;
  clear: both;
  margin-top:-100px;

  @media screen and (max-width: 1165px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer= styled.div`
  display: flex;
  justify-content:space-evenly;
  height: 100px;
  z-index: 1;
  width: 100%;
  padding:0 24px;
  max-width: 2200px;
  transform: translateX(-55%);
  left: 50%;
  bottom: -20%;
  position: absolute;

  @media screen and (max-width: 1165px) {
    transform: translateX(-52%);
  }
`;


export const NavLogo = styled.img`
  width: 100px;
  cusror: pointer;
  display: flex;
  align-items: center;
  margin-left: -279px;
  margin-top  : 20px;
  justify-self:flex-start;
  transition: width 0.5s;
  transition: height 0.5s;
  padding-bottom:2vh;
  @media (min-width: 1165px) {
    width: 160px;
    margin-top  : 30px;
  }`;

  
export const MobileIcon = styled.div`
display:none;
  @media (max-width: 1165px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,150%);
    fontSize:1.5rem;
    cusror: pointer;
    color: #fff;
    z-index:1;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  float: left;
  justify-content: flex-start;
  margin-right: -497px;
 

  @media screen and (max-width: 1165px) {
    display:flex;
    flex-direction:column;
    content: '';
    width:100%;
    max-width: 100%;
    height:100vh;
    position:absolute;
    top:0px;
    left: ${({click}) => (click ? '0%' : '-140%')};
    opacity:1;
    transition: all 0.5s ease;
    background-color: #101522;
    
  }`;



  export const NavItems = styled.li`
    height:80px;
    padding-left:24px;
    list-style: none;
    $:hover{
      border-bottom:2px solid #5FCDE4;
    }

    @media screen and (max-width: 1165px) {
      height:0%;
      margin-top:15vh;
      margin-left: -251px;
      $:hover{
        border:none;
      }
    }
    `;

  export const NavLink = styled(LinkS)`
    text-decoration:none;
    color:#fff;
    align-items:center;
    height:100%;
    padding:0 1rem;
    display:flex;
    cursor:pointer;
    font-family: 'wonder';
    font-size:1.5rem;
    &:hover{
      color:var(--web-theme);
    }
    
       @media screen and (max-width: 594px) {
      margin-left:250px;
      weight;125%;
    
    }
    `;



  export const StyledButton = styled.button`
    padding: 8px 22px;
    border-radius: 10px;
    white-space: nowrap;
    height:40px;
    outline: none;
    border: none;
    color: var(--primary-text);
    margin-top:1.1vw;
    cursor: pointer;
    font-family: 'wonder';
    transition: 0.5s all ease-in-out;
    font-size:1.2rem;
    background:transparent;
    color: var(--web-theme);
    border: 1px solid var(--web-theme);
    :active {
      box-shadow: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
    }

    @media screen and (max-width: 1165px) {
      display:none;
    }

  `;

  export const StyledButtonMobile = styled.button`
   background-color: var(--primary);
    padding: 10px 22px;
    border-radius: 10px;
    white-space: nowrap;
    outline: none;
    border: none;
    font-weight: bolder;
    color: var(--primary-text);
    margin-top:1.1vw;
 
    cursor: pointer;
    display:none;
    transition: 0.5s all ease-in-out;
    :active {
      box-shadow: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
    }

    @media screen and (max-width: 1165px) {
      text-align:center;
      display:flex;
      justify-content:center;
    }

  `;

  export const NavIcon = styled.img`
    display:flex;
    align-items:center;
    justify-content:center;
    vertical-align:middle;
    margin:10px auto;
    width:48px;

    @media screen and (max-width: 1165px) {
      display:flex;
      align-items:center;
      margin-left: -26px;
      justify-content:center;
      flex-direction:column;
    }
  `;


