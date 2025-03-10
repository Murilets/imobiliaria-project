import { keyframes } from "styled-components";

//animacao de entrada
export const fadeInUp = keyframes`
from {
    opacity: 0;
    transform: translateY(50px);
}
to {
    opacity: 1;
    transform: translateY(0);
}
`;

//animaco do H2 
export const typingEffect = keyframes`
  0% {
    width: 0;
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
`;

export const borderFill = keyframes`
0% {
    border-width:  0px;
    border-color: transparent;
}
100%{
    border-width: 5px;
    border-color: var(--blue);
}
`

export const expandText = keyframes`
0%{
  transform: scaleX(0);
  opacity: 0;
  transform-origin: center ;
}
50%{
  transform: scaleX(1.0);
  opacity: 0.7;
  transform-origin: center ;
}
100% {
  transform: scaleX(1);
  opacity: 1;
  transform-origin: center;
}
`