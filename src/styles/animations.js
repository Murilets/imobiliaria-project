import { keyframes, css } from "styled-components";

//animacao de entrada
export const fadeInUp = keyframes`
from {
    opacity: 0;
    transform: translateY(20px);
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

export const  pulse = keyframes`
0% {transform: scale(1); opacity: 0.8;}
50%{transform: scale(1.2); opacity: 0.8;}
100% { transform: scale(1); opacity: 0.8;}
`

export const shake = keyframes`
0%{transform: translateX(0);}
25%{transform: translateX(-3px);}
50%{transform: translateX(3px);}
75%{transform: translateX(-3px);}
100%{transform: translateX(0);}
`
export const glow = keyframes`
0% {box-shadow: 0 0 4px red; opacity: 1;}
25%{box-shadow: 0 0 15px rgb(255, 0, 0); opacity: 0.9;}
70% {box-shadow: 0 0 7px  rgb(255, 0, 0); opacity: 0.9;}
100% {box-shadow: 0 0 0px  rgb(255, 0, 0); opacity: 1;}
`