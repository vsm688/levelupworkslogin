import styled from "styled-components";

export const Button = styled.button`
    height: 60%;
    border-radius: 5px;
    margin: 5px 10px;
    border:none;
    width: 150px;
    background-color: ${(props) => props.color};
    font-family: 'Nunito Sans';
    font-weight: 900;
    color: white;
    &:hover{
        transform: scale(0.95);
    }
`;