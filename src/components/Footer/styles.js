import styled from "styled-components";

export const Container = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   padding: 100px 150px;
   background-color: var(--tertiary);
   

`
export const Item = styled.div`
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
`
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
