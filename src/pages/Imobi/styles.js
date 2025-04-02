import styled from "styled-components";
import { devices } from "../../styles/responsive";
export const Container = styled.div`
  padding: 20px 150px;
  display: flex;
  justify-content: space-between;
`;
export const Left = styled.div`
  width: 70%;
  padding: 10px;
  border: 1px solid rgb(0, 0, 0, 0.1);
`;
export const Thumb = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    border-radius: 5p;
  }
`;
export const Description = styled.div`
  padding: 30px 0;
  h2,
  p {
    margin-bottom: 15px;
    color: var(--secondary);
  }
`;
export const Right = styled.div`
  width: 28%;
  padding: 10px;
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 5px;
`;
export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProfileImg = styled.div`
  width: 115px;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;
export const ProfileDescription = styled.div`
  h3,
  p {
     display: flex;
    margin-bottom: 15px;
    justify-content: center;
    color: var(--secondary);
  }
`;
export const ProfileContact = styled.div`
  h3,
  p {
    margin-bottom: 15px;
    color: var(--secondary);
  }
`;
export const ProfileFormContact = styled.div`
  h3,
  p {
    margin-bottom: 15px;
    color: var(--secondary);
  }
  form {
     display: flex;
     flex-direction: column;
    }
`;
export const Arrow = styled.div`
position: absolute;
top: 80%;
transform: translateY(-50%);
background-color:   rgba(0, 0, 0, 0.73);
color: white;
border-radius: 23%;
width: 61px;
height: 78px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

z-index: 2;

&.Left{
  left: 115px;

  @media ${devices.mobileM}{
    left: -15px;
    width: 60px;
    height: 60px;
  }
}

&.Right{
right: 602px;

  @media ${devices.mobileM}{
    right: -15px;
    width: 60px;
    height: 60px;
  }
}
&:hover {
  background-color:  rgba(0, 0, 0, 0.99);
}
`;