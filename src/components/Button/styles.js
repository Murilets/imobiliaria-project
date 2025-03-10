import styled from "styled-components";

export const Container = styled.button`
margin-top: ${(props) => props.marginTop || '30px'};


width: ${(props) => props.width || '100%'};
cursor: pointer;
display: ${(props) => props.display || 'inline-block'};
text-align: center;
background-color: var(--blue);
line-height: 24px;
border: 0;
color: var(--white);
font: 0.875rem;
font-weight: 600;
transition: 0.3s;
padding: 10px 20px;
position: ${(props) => props.position || 'relative'};  /* Usando 'relative' por padrão */
  left: ${(props) => props.left || '0px'};
  
  &:hover{
    background-color: var(--lightblue);
    transform: scale(1.0);
  }
`;



