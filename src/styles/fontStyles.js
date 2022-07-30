import { createGlobalStyle } from "styled-components";
import rubik from "./fonts/rubik.ttf";
const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'syne';
  src: url(${rubik}) format('truetype');
  font-style: normal;
}
`;

export default FontStyles;