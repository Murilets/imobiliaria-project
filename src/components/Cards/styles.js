import styled from "styled-components";
import { devices } from "../../styles/responsive";

export const Container = styled.div`
  width: 24%;
  margin-bottom: 12px;
  background-color: var(--white);
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
border-radius: 8px;
overflow: hidden;
transition: transform 0.3s, box-shadown 0.3s;
position: relative;
color: black;

&:hover {
  transform: scale(1.05);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}

@media ${devices.laptop} {
  width: 45%;
}

@media ${devices.tablet}{
  width: 70%;
  padding:20px;
}

@media  ${devices.mobileL}{
width: 100%;
padding: 10px;
height: auto;
margin-left: 0;
}



`;
export const Img = styled.div`
  width: 100%;
  color: black;
  img {
    width: 100%;
    height: auto;
  }

`;
export const Description = styled.div`
  padding: 12px;
  color: black;
  a {
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  h4 {
    color: black;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 10px;
  }


`;

export const Itens = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: black;
  span {
    margin-bottom: 10px;
  }

@media ${devices.mobileS}{
  span{
    font-size: 0.8rem;
  }
}
`;

export const Arrow = styled.div`
position: absolute;
top: 50%;
transform: translateY(-50%);
background-color:   rgba(0, 0, 0, 0.5);
color: white;
border-radius: 50%;
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

z-index: 2;

&.left{
  left: 10px;
}

&.right{
  right: 10px;
}
&:hover {
  background-color:  rgba(0, 0, 0, 0.8);
}
`;
