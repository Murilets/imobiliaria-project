import styled from "styled-components";
import { devices } from "../../styles/responsive";

export const Container = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   padding: 100px 150px;
   background-color: var(--tertiary);

@media ${devices.mobileM}{
 grid-template-columns: 1fr;

}
`;



export const Item = styled.div`
position: relative;

img{
  width: 200px;
}


h3{
  margin-bottom: 10px;
}
  ul{
    li{
        padding: 12px 0;
       
    }
    nav{
      display:flex;
      margin-top: 15px;
     
      li{
       span{
         margin-right: 15px;
         cursor: pointer;
       }
      }
    }
  }

  /*responsavidade */
    @media ${devices.mobileM}{
     position: relative;
     display: flex;
     justify-content: center;
     align-items: center;

     img{
      visibility: hidden;
      position: relative;
      width: 200px;
      height: 60px;
      bottom: 110px;
      left: 25px;
     }
    
    
     p{
      position: absolute;
      width: 75%;
      height: auto;
      font-size: clamp(15px, 5vw, 15px);
      text-align: left;
      align-self: flex-start;
      display: flex;
      left: -10px;
      bottom: 50px;
      text-align: left;
      word-wrap:break-word;
      white-space: normal;
      max-width: 100%;
      font-family: Arial, Helvetica, sans-serif;
     }

      &.services{
        display: flex;
    flex-direction: column;
    align-items: center;
    right: 120px;

    .services ul{

    }
     }
    }

     @media ${devices.mobileM}{
      .social-icons {
        display: flex;
        justify-content: center;
        gap: 15px;
      }
      .social-icons li{
        position: relative;
        width: auto;
        right: 348px;
        bottom: 110px;
      }

      .social-line{
        position: absolute;
        bottom: 180px;
        right: 6px;
        width: 189%;
        height: 5px;
        background-color: black;
      }
     }
    
`;


export const Copy  = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 150px;
    border-top: 3px solid rgb(0, 0, 0);
    ul{
      display: flex;
      align-items: center;
      li{
        span{
          margin-left: 15px;
          cursor: pointer;
          transition: color 0.3;
        }
        span:hover {
          color: var(--blue);
        }

      }
    }

`
