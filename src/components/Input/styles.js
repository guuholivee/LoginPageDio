import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%; 
    max-width: 275px; 
    border-bottom: 1px solid #3b3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;

    transition: border-color 0.3s;

    &:hover {
        border-color: #e4105d;
    }
`;

export const IconConteiner = styled.div`
    margin-right: 10px;
    color: #e4105d; 
`;

export const InputText = styled.input`
    background-color: transparent;
    color: #ffffff;
    border: 0;
    height: 30px;
    flex: 1;

    &:focus {
        outline: none;
    }
`;
