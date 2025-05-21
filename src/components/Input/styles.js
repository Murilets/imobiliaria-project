import styled from "styled-components";
import {devices} from '../../styles/responsive'
export const Container = styled.input`
height: 50px;
padding: 8px, 15px;
border-radius: 3px;
width: 100%;
color: var(--secondary);
letter-spacing: 0.1px;
font-size: 0.938rem;
margin-bottom: 10px;
outline: none;
border-color: var(--blue);
border-radius: 7px;
resize: none;


@media ${devices.tablet}{
    position: relative;
    display: flex;
   

}
`;
