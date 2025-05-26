import styled from "styled-components";
import { devices } from "../../styles/responsive";
export const Container = styled.div`
  padding: 20px 150px;
  display: flex;
  height: auto;
  align-items: flex-start;
  justify-content: space-between;
  


  @media ${devices.tablet} {
    flex-direction: column;
    padding: 0;
    gap: 20px;
  }
`;
export const Left = styled.div`
  position: relative;
  width: 70%;
  
  padding: 9px;
  

  @media ${devices.tablet} {
    width: 100vw;
    left: 0;
    padding: 0;
    object-fit: cover;
  }
`;
export const Thumb = styled.div`
position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;

  }
  .image-counter{
    position: absolute;
     top: 30px;
    right: 10px;
    background-color: rgba(0,0,0,0.6);
    color: white;
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 14px;
  }

  @media ${devices.tablet} {
 margin: 0 auto;
 padding: 0;
    img{
      width: 100vw;
      height: 250px;
      object-fit: cover;
      
    }
  }

.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  width: 100%;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel img {
  flex: 0 0 100%;
  max-height: 650px; /* ou o tamanho que quiser */
  scroll-snap-align: start;
  object-fit: cover;
  border-radius: 2px;
  margin-right: 2px;

  
}


`;
export const Description = styled.div`
  padding: 40px 0;
  hr {
    position: relative;
    bottom: 40px;
    height: 5px;
    background-color: black;
  }
  h2 {
    position: relative;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    bottom: 15px;
  }
  span {
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
  }
  .street {
    font-weight: bold;
  }

  .features {
    font-weight: bold;
  }
  .linebetween {
    position: relative;
    display: flex;
    color: rgba(0, 0, 0, 0);
    background-color: rgb(32, 22, 173);
    top: 107px;
    width: 130px;
    height: 3px;
    left: -10px;
    border-radius: 10px solid;
  }
  .linebetween2 {
    position: relative;
    display: flex;
    color: rgba(0, 0, 0, 0);
    background-color: rgb(163, 163, 167);
    top: 104px;
    width: 567px;
    height: 3px;
    left: 118px;
    border-radius: 10px solid;
  }
  .price {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: linear-gradient(135deg, rgb(78, 111, 255), rgb(9, 36, 145));
    border-radius: 11px;
    height: 65px;
    width: 280px;
    margin-right: auto;
    font-size: 34px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }
  .price::before {
    content: "";
    position: absolute;
    right: -34px;
    top: 41%;
    transform: translateY(-40%);
    width: 0;
    height: 0;
    border-top: 33px solid transparent;
    border-bottom: 29px solid transparent;
    border-left: 40px solid #0623a3;
  }
  .descricao {
    position: relative;
    display: flex;
    height: 47px;
    font-family: Arial, Helvetica, sans-serif;
    top: 20px;
    right: -10px;
    font-size: 30px;
    color: black;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  p {
    position: relative;
    height: 190px;
    bottom: -41px;
    font-size: 14px;
    color: black;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  @media ${devices.onlyMobile} {
    width: 100%;
    right: 0;
    padding: 10px;
    text-align: center;
    justify-content: center;
    
   
    hr{
      display: none;
    }
    h2{
      font-size: 25px;
      top: -6px;
    }
    p{
   
     
    }
    .price{
      justify-content: center;
      display: flex;
      align-items: center;
      right: 0;
      width: 100%;
      height: 100%;
    }
    
    .price::before {
      display: none;
    }
  }
`;
export const Right = styled.div`
  position: relative;
  width: 30%;
  padding: 20px;
  right: -80px;
  bottom: -10px;
  background-color: rgba(192, 190, 190, 0.29);
  border: 1px solid rgba(97, 137, 247, 0.84);
  

  @media ${devices.tablet} {
    position: block;
    width: 100%;
    right: 0;
    bottom: -170px;
  }
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
  h3 {
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
  h3 {
    position: relative;
    display: flex;
    top: auto;
    font-size: 30px;
    letter-spacing: 1px;
    font-family: "Dosis", sans-serif;
  }
  p {
    margin-bottom: 15px;
    color: var(--secondary);
  }
  @media ${devices.onlyMobile}{
    
  }
`;
export const ProfileFormContact = styled.div`


  @media ${devices.tablet} {
    height: auto;
    margin-top: auto;

    form{
      margin-top: 18px;
    }
  
  }

`;
export const Arrow = styled.div`
  position: absolute;
  top: 27%;
  transform: translateY(-50%);
  background-color: rgba(73, 72, 72, 0.6);
  color: white;
  border-radius: 20%;
  width: 60px;
  height: 98px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  z-index: 10;

  &.Left {
    width: 50px;
    height: 90px;
    left: -46px;

    @media ${devices.tablet} {
      left: 7px;
      right: -15px;
      width: 21px;
      height: 0;
      top: 100px;
      background-color: rgba(24, 23, 23, 0);
      color: rgb(255, 254, 254);
    }
  }

  &.Right {
     width: 50px;
    height: 90px;
    right: -46px;

    @media ${devices.tablet} {
      right: -15px;
      width: 60px;
      height: 0;
      top: 100px;
      background-color: rgba(24, 23, 23, 0);
      color: rgb(255, 254, 254);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.99);
  }
`;
