import { createGlobalStyle } from "styled-components";
import syne from "./fonts/syne-bold.ttf";
const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'syne';
  src: url(${syne}) format('truetype');
  font-style: normal;
}
`;

export default FontStyles;