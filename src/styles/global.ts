import { createGlobalStyle } from 'styled-components';

const GlobalStyle: any = createGlobalStyle`

@keyframes fade-bottom {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-top {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-left {
  from{
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-right {
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to{
    transform: translateX(0);
    opacity: 1;
  }
}

.reveal {
  transition: 0.6s;
  opacity: 0;
}

.reveal.active {
  opacity: 1;
}

.active.fade-bottom {
  animation: fade-bottom .6s ease-in;
}
.active.fade-left {
  animation: fade-left .6s ease-in;
}
.active.fade-right {
  animation: fade-right .6s ease-in;
}
.active.fade-top {
  animation: fade-top .6s ease-in;
}

 html {
  box-sizing: border-box;
  font-size: 62.5%;

}

html,body {
  font-family: "Karla", sans-serif !important;

}

textarea{
  font-family: "Karla", sans-serif !important;
}

*, *:before, *:after {
  box-sizing: border-box;
  border:0;

}

button{
  cursor: pointer;
}

input{ outline:none}

a{
  text-decoration: none;

}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Gothic A1", sans-serif !important;
}

ol, ul {
  list-style: none;
  display: flex;
}

img {
  max-width: 100%;
  height: auto;
}

//responsive

@media (max-width: 500px) {
  html {
    font-size: 50%;
  }
}

`;

export default GlobalStyle;
