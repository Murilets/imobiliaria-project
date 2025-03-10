import styled from "styled-components";
export const Container = styled.div`
width: 100%;
height: 250px;
background-color: var(--altwhite);
display: flex;
h2{
  position: absolute;
  margin-left: 90px;
  bottom: -900px;
  letter-spacing: 2px;
  font-size: 37px;
  font-family: Arial, Helvetica, sans-serif;
  color:  rgba(48, 48, 48, 0.97);
}
p{
  position: absolute;
  font-size: 15px;
  margin-left: 550px;
  bottom: -990px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgba(44, 43, 43, 0.97);
}
`

export const Divider = styled.div`
width: 1px;
height: 100%;
background-color: black;
margin: 0 500px;
`