import styled from "styled-components";
export const Container = styled.div`
  padding: 50px 150px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url(https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  :before{
   background-color: rgba(192, 190, 190, 0.04);
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 0;

  }
`

export const Text = styled.div`
  width: 100%;
  position: relative  ;
  z-index: 1;
  h2{
  color: rgb(255, 255, 255);;
  font-size:  3.875rem;
  margin-bottom: 25px;

  }
  p{
    color: var(--white);
    margin-bottom: 25px;
 
  }
`