import { styled } from "styled-components";


const BaseButton = styled.button`
   
    padding: 10px 35px;

    transition: 0.4s;
    border-radius: 50px;
    margin: 10px;
`;

export const PrimaryButton = styled(BaseButton)`

    background: ${props=>props.disabled ?'gray' :'#FF6337'};
    color: #fff;
    border:none;
    &:hover {
        background: ${props=>props.disabled ?'gray' :'#FF6337'};
    }


`
export const SecondaryButton = styled(BaseButton)`

    background: black;
    color: #fff;
    border:none;
    &:hover {
        background: red;
    }


`
export const outlinedButton = styled(BaseButton)`

 
    color: #000;
    border:2px solid black;
    &:hover {
        background: #1c84e3;
    }


`