import styled from "styled-components";
import { devices } from "../../styles/responsive";
export const Container = styled.div`
  padding: 20px 150px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;
export const Left = styled.div`
  position: relative;
  width: 70%;
  left: -50px;
  padding: 9px;
  border: 3px solid rgb(0, 0, 0, 0.1);
`;
export const Thumb = styled.div`
max-width: 100%;
aspect-ratio:  16 / 9;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
`;
export const Description = styled.div`
  padding: 40px 0;
   hr{
    position: relative;
    bottom: 40px;
    height: 5px;
    background-color: black;
   };
  h2{
    position: relative;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    bottom: 15px;
  }
  span{
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;

  }
  .street{
    font-weight: bold;
  }

  .features{
    font-weight: bold;
  }
  .linebetween{
    position: relative;
    display: flex;
    color:  rgba(0, 0, 0, 0);
    background-color:  rgb(32, 22, 173);
    top:107px;
    width: 130px;
    height: 3px;
    left: -10px;
    border-radius: 10px solid;
  }
   .linebetween2{
    position: relative;
    display: flex;
    color:  rgba(0, 0, 0, 0);
    background-color:  rgb(163, 163, 167);
    top:104px;
    width: 567px;
    height: 3px;
    left: 118px;
    border-radius: 10px solid;
  } 
  .price{
    position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: linear-gradient(135deg,rgb(11, 36, 150),rgb(9, 36, 145));
  border-radius: 11px;
  height: 70px;
  width: 390px;
  right: 112px;
  font-size: 34px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }
  .price::before{
    content: '';
    position: absolute;
    right: -34px;
    top: 41%;
    transform: translateY(-40%);
    width: 0;
    height: 0;
    border-top: 33px solid transparent ;
    border-bottom: 35px solid transparent;
    border-left: 40px solid #0623a3;
    
  }
  .descricao{
    position: relative;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    top: 25px;
     right: -10px;
     font-size: 30px;
     color: black;
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  p {
    position: relative;
    bottom: -48px;
    font-size: 14px;
  color: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;;
  }
`;
export const Right = styled.div`
position: relative;
  width: 30%;
  padding: 20px;
  right: -60px;
  bottom: 110px;
  background-color:  rgba(192, 190, 190, 0.29);
  border: 1px solid  rgba(97, 137, 247, 0.84);
  border-radius: 5px;
`;
export const Profile = styled.div`
width: 50%;
height: 20px;
  display: flex;
  justify-content: space-between;
  left: 30px;
`;
// export const ProfileImg = styled.div`
//   width: 115px;
//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 5px;
//   }
// `;
export const ProfileDescription = styled.div`
  h3{
    position: relative;
    top: -10px;
    left: 90px;
    font-family: Arial, Helvetica, sans-serif;
  }
  p {
     display: flex;
    margin-bottom: 15px;
    justify-content: center;
    color: var(--secondary);
  }
`;
export const ProfileContact = styled.div`
  h3{
    position: relative;
    display: flex;
    top: -12px;
    font-size: 30px;
    letter-spacing: 1px;
    font-family: "Dosis", sans-serif;
  }
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
top: 43%;
transform: translateY(-50%);
background-color:   rgba(0, 0, 0, 0.73);
color: white;
border-radius: 20%;
width: 80px;
height: 87px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

z-index: 2;

&.Left{
  left: -86px;

  @media ${devices.mobileM}{
    left: -15px;
    width: 60px;
    height: 60px;
  }
}

&.Right{
right: -90px;

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