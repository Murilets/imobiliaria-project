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
top: 60px;
height: 220px;

img{
  width: 230px;
}


p{
  display: flex;
  padding: 10px;
  margin-right: 40px;
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
  @media ${devices.mobileM}{
    position: relative;

    h3{
      margin-left: 15px;
      align-items: center;
      justify-content: center;
      font-size: 35px;
    }
    ul{
      margin-right: 50px;
      cursor: pointer;
      font-size: 24px;
      font-family: Arial, Helvetica, sans-serif;
      
    }
  }

  /*responsavidade */
    @media ${devices.mobileM}{
     position: relative;
     display: flex;
     width: 400px;
     justify-content: center;
     align-items: center;
     left: 10px;
     padding: 20px 20px;
     
      
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
      width: 95%;
      height: auto;
      font-size: 20px;
      display: flex;
      right: 150px;
      bottom: 200px;
      text-align: left;
      word-wrap:break-word;
      max-width: 100%;
      gap: 2px;
      font-family: Arial, Helvetica, sans-serif;
      
     }
     
      /* &.services{
        display: flex;
    flex-direction: column;
    align-items: center;
    right: 120px;

    .services ul{

    }
     } */
    }

     /* @media ${devices.mobileM}{
      .social-icons {
        display: flex;
        justify-content: center;
        gap: 15px;
      }
      .social-icons li{
        position: relative;
        width: auto;
        right: 80px;
        bottom: 110px;
        cursor: pointer;
      }

      .social-line{
        position: absolute;
        bottom: 180px;
        right: 6px;
        width: 189%;
        height: 5px;
        background-color: black;
      }
     } */
      @media ${devices.mobileL}{
     position: relative;
     display: flex;
     width: 400px;
     justify-content: center;
     align-items: center;
     left: 10px;
     padding: 20px 20px;
     
      
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
      width: 95%;
      height: auto;
      font-size: 20px;
      display: flex;
      right: 150px;
      bottom: 200px;
      text-align: left;
      word-wrap:break-word;
      max-width: 100%;
      gap: 2px;
      font-family: Arial, Helvetica, sans-serif;
     }
    }
    @media ${devices.tablet}{
     position: relative;
     display: flex;
     width: 400px;
     justify-content: center;
     align-items: center;
     left: 10px;
     padding: 20px 20px;
     
      
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
      width: 95%;
      height: auto;
      font-size: 20px;
      display: flex;
      right: 150px;
      bottom: 200px;
      text-align: left;
      word-wrap:break-word;
      max-width: 100%;
      gap: 2px;
      font-family: Arial, Helvetica, sans-serif;
     }
    }
`;


export const Copy  = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 125px;
    size: 30px;
    border-top: 3px solid rgb(0, 0, 0);

    .endereco{
      display: flex;
      position: absolute;
      size: 50px;
    }
    ul{
      display: flex;
      align-items: center;
      right: 30px;
      li{
        span{
          margin-left: 20px;
          cursor: pointer;
          transition: color 0.3;
        }
        span:hover {
          color: var(--blue);
        }

      }
    }



    @media ${devices.mobileM}{
      padding: 20px 20px;
      width: 100%;
      height: 100px;
      position: relative;
      font-size: 11px;
      gap: 5px;
      display: flex;
      align-items: center;
      background-color: rgba(206, 201, 201, 0.33);

      p{
        position: relative;
        height: 25px;
        display: flex;
        gap: 20px;
        flex-direction: center;
        right: -3px;
        bottom: 12px;
        font-size: 10px;
        color: rgb(9, 74, 253);
        text-decoration-line: underline ;
        cursor: pointer;
      }

      ul{
        position: relative;
        display: flex;
        flex-wrap: wrap ;
        flex-direction: center;
        justify-content: center;
        font-size: 8.5px;
        font-family: Arial, Helvetica, sans-serif;
        padding: 0;
        margin: 0;
        bottom: 10px;
        gap: 10px;
        text-decoration-line: underline;
        color:  rgb(9, 74, 253);
        
      }
    }
    @media ${devices.mobileL}{
      padding: 20px 20px;
      width: 100%;
      height: 140px;
      position: relative;
      font-size: 11px;
      gap: 5px;
      display: flex;
      align-items: center;
      background-color: rgba(206, 201, 201, 0.33);

      p{
        position: relative;
        height: 30px;
        display: flex;
        gap: 20px;
        flex-direction: center;
        right: -3px;
        bottom: 12px;
        font-size: 18px;
        color: rgb(9, 74, 253);
        text-decoration-line: underline ;
        cursor: pointer;
      }

      ul{
        position: relative;
        display: flex;
        flex-wrap: wrap ;
        flex-direction: center;
        justify-content: center;
        font-size: 17px;
        font-family: Arial, Helvetica, sans-serif;
        padding: 0;
        margin: 0;
        bottom: -5px;
        right: -15px;
        gap: 10px;
        text-decoration-line: underline;
        color:  rgb(9, 74, 253);
        
      }
    }
    @media ${devices.tablet}{
      padding: 20px 20px;
      width: 100%;
      height: 140px;
      position: relative;
      font-size: 11px;
      gap: 5px;
      display: flex;
      align-items: center;
      background-color: rgba(206, 201, 201, 0.33);

      p{
        position: relative;
        height: 30px;
        display: flex;
        gap: 20px;
        flex-direction: center;
        right: -3px;
        bottom: 12px;
        font-size: 18px;
        color: rgb(9, 74, 253);
        text-decoration-line: underline ;
        cursor: pointer;
      }

      ul{
        position: relative;
        display: flex;
        flex-wrap: wrap ;
        flex-direction: center;
        justify-content: center;
        font-size: 17px;
        font-family: Arial, Helvetica, sans-serif;
        padding: 0;
        margin: 0;
        bottom: -5px;
        right: -15px;
        gap: 10px;
        text-decoration-line: underline;
        color:  rgb(9, 74, 253);
        
      }
    }
`;
